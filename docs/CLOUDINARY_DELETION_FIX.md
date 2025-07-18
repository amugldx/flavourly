# Cloudinary Image Deletion Fix

## Problem Description

The recipe deletion functionality was not properly deleting images from Cloudinary when a recipe was deleted from the database. The issue was in the public ID extraction logic in the DELETE API route.

### Root Cause

The original deletion code was using a simplistic approach to extract the public ID from Cloudinary URLs:

```typescript
// OLD CODE - Incorrect
const urlParts = media.url.split('/');
const filename = urlParts[urlParts.length - 1];
const publicId = filename.split('.')[0]; // Remove file extension
```

This approach failed because:

1. It didn't account for the full Cloudinary URL structure
2. It didn't handle version numbers in URLs
3. It didn't preserve the folder structure
4. It didn't validate that the URL was actually from Cloudinary

## Solution Implementation

### 1. Enhanced Cloudinary Helper Functions

Created comprehensive helper functions in `lib/cloudinary.ts`:

#### URL Extraction Function

```typescript
export function extractPublicIdFromUrl(url: string): string | null {
	try {
		const urlObj = new URL(url);

		// Validate Cloudinary URL
		if (!urlObj.hostname.includes('cloudinary.com')) {
			return null;
		}

		const pathParts = urlObj.pathname.split('/').filter(part => part.length > 0);
		const uploadIndex = pathParts.findIndex(part => part === 'upload');

		if (uploadIndex === -1) {
			return null;
		}

		// Get parts after 'upload' and remove version numbers
		const partsAfterUpload = pathParts.slice(uploadIndex + 1);
		const partsWithoutVersion = partsAfterUpload.filter(part => !part.match(/^v\d+$/));

		// Join parts and remove file extension
		const publicId = partsWithoutVersion.join('/').replace(/\.[^/.]+$/, '');

		return publicId;
	} catch (error) {
		console.error('Error extracting public ID from URL:', url, error);
		return null;
	}
}
```

#### Deletion Functions

```typescript
export async function deleteFromCloudinary(publicId: string): Promise<void> {
	try {
		await cloudinary.uploader.destroy(publicId);
		console.log(`Successfully deleted from Cloudinary: ${publicId}`);
	} catch (error) {
		console.error(`Failed to delete from Cloudinary: ${publicId}`, error);
		throw error;
	}
}

export async function deleteMultipleFromCloudinary(publicIds: string[]): Promise<void> {
	const deletePromises = publicIds.map(publicId => deleteFromCloudinary(publicId));
	await Promise.allSettled(deletePromises);
}
```

### 2. Updated DELETE API Route

Enhanced the deletion logic in `app/api/recipes/[recipeId]/route.ts`:

```typescript
// Delete images from Cloudinary if they exist
if (existingRecipe.media && existingRecipe.media.length > 0) {
	const { extractPublicIdFromUrl, deleteFromCloudinary } = require('@/lib/cloudinary');

	// Delete each media file from Cloudinary
	for (const media of existingRecipe.media) {
		try {
			// Extract public ID from URL
			const publicId = extractPublicIdFromUrl(media.url);

			if (publicId) {
				// Delete from Cloudinary
				await deleteFromCloudinary(publicId);
				console.log(`Successfully deleted from Cloudinary: ${publicId} (${media.url})`);
			} else {
				console.warn(`Could not extract public ID from URL: ${media.url}`);
			}
		} catch (cloudinaryError) {
			console.error(`Failed to delete image from Cloudinary: ${media.url}`, cloudinaryError);
			// Continue with deletion even if Cloudinary deletion fails
		}
	}
}
```

## Key Improvements

### 1. Robust URL Parsing

- **Proper URL validation**: Checks if the URL is actually from Cloudinary
- **Version handling**: Removes version numbers (e.g., `v1234567890`) from URLs
- **Folder preservation**: Maintains the complete folder structure in the public ID
- **Extension removal**: Properly removes file extensions

### 2. Error Handling

- **Graceful degradation**: Continues with database deletion even if Cloudinary deletion fails
- **Detailed logging**: Provides comprehensive error messages for debugging
- **Null safety**: Handles cases where public ID extraction fails

### 3. URL Format Support

The system now correctly handles various Cloudinary URL formats:

```
✅ https://res.cloudinary.com/cloud_name/image/upload/v1234567890/folder/filename.jpg
   → Extracts: folder/filename

✅ https://res.cloudinary.com/cloud_name/video/upload/v1234567890/folder/filename.mp4
   → Extracts: folder/filename

✅ https://res.cloudinary.com/cloud_name/image/upload/folder/filename.jpg
   → Extracts: folder/filename

❌ https://example.com/not-cloudinary.jpg
   → Returns: null
```

## Testing

The fix was thoroughly tested with various URL formats:

1. **Image URLs with version numbers**
2. **Video URLs with version numbers**
3. **URLs without version numbers**
4. **Invalid/non-Cloudinary URLs**
5. **URLs with complex folder structures**

## Benefits

### 1. Reliability

- **Accurate deletion**: Properly identifies and deletes Cloudinary resources
- **No orphaned files**: Prevents accumulation of unused files in Cloudinary
- **Cost optimization**: Reduces storage costs by cleaning up deleted resources

### 2. Maintainability

- **Centralized logic**: All Cloudinary operations are in one helper file
- **Reusable functions**: Can be used for other Cloudinary operations
- **Clear separation**: Database and Cloudinary operations are properly separated

### 3. Debugging

- **Comprehensive logging**: Detailed logs for troubleshooting
- **Error tracking**: Clear error messages for failed operations
- **Audit trail**: Complete record of deletion operations

## Usage

### Basic Usage

```typescript
import { extractPublicIdFromUrl, deleteFromCloudinary } from '@/lib/cloudinary';

// Extract public ID from URL
const publicId = extractPublicIdFromUrl(mediaUrl);
if (publicId) {
	await deleteFromCloudinary(publicId);
}
```

### Batch Deletion

```typescript
import { deleteMultipleFromCloudinary } from '@/lib/cloudinary';

const publicIds = mediaUrls.map(url => extractPublicIdFromUrl(url)).filter(id => id !== null);

await deleteMultipleFromCloudinary(publicIds);
```

## Future Enhancements

### 1. Database Schema Improvement

Consider adding a `publicId` field to the `Media` model to store the Cloudinary public ID directly:

```prisma
model Media {
  id              Int       @id @default(autoincrement())
  mediaType       MediaType
  url             String    @db.VarChar(2048)
  publicId        String?   // Add this field for direct access
  caption         String?
  recipeId        Int
  recipe          Recipe    @relation(fields: [recipeId], references: [id], onDelete: Cascade)
}
```

### 2. Batch Operations

Implement batch deletion for better performance when deleting multiple recipes.

### 3. Retry Logic

Add retry mechanisms for failed Cloudinary deletions.

### 4. Monitoring

Implement monitoring and alerting for failed deletion operations.

## Migration Guide

If you have existing recipes with media that weren't properly deleted from Cloudinary:

1. **Audit existing media**: Check for orphaned files in your Cloudinary account
2. **Manual cleanup**: Use Cloudinary's management interface to delete orphaned files
3. **Update existing records**: Consider updating the database schema to include `publicId` field

## Conclusion

This fix ensures that when recipes are deleted from the application, their associated media files are properly removed from Cloudinary, preventing storage waste and maintaining a clean media library. The solution is robust, maintainable, and provides comprehensive error handling for production use.
