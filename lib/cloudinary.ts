import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Extract the public ID from a Cloudinary URL
 * @param url - The Cloudinary URL (e.g., https://res.cloudinary.com/cloud_name/image/upload/v1234567890/folder/filename.jpg)
 * @returns The public ID (e.g., folder/filename)
 */
export function extractPublicIdFromUrl(url: string): string | null {
	try {
		// Parse the URL
		const urlObj = new URL(url);

		// Check if it's a Cloudinary URL
		if (!urlObj.hostname.includes('cloudinary.com')) {
			console.warn('Not a Cloudinary URL:', url);
			return null;
		}

		// Split the pathname into parts
		const pathParts = urlObj.pathname.split('/').filter(part => part.length > 0);

		// Find the 'upload' part and get everything after it
		const uploadIndex = pathParts.findIndex(part => part === 'upload');
		if (uploadIndex === -1) {
			console.warn('No upload part found in Cloudinary URL:', url);
			return null;
		}

		// Get the parts after 'upload' (excluding version if present)
		const partsAfterUpload = pathParts.slice(uploadIndex + 1);

		// Remove version if it starts with 'v' and is followed by numbers
		const partsWithoutVersion = partsAfterUpload.filter(part => !part.match(/^v\d+$/));

		// Join the remaining parts to form the public ID
		const publicId = partsWithoutVersion.join('/');

		// Remove file extension
		const publicIdWithoutExtension = publicId.replace(/\.[^/.]+$/, '');

		return publicIdWithoutExtension;
	} catch (error) {
		console.error('Error extracting public ID from URL:', url, error);
		return null;
	}
}

/**
 * Delete a file from Cloudinary using its public ID
 * @param publicId - The public ID of the file to delete
 * @returns Promise that resolves when deletion is complete
 */
export async function deleteFromCloudinary(publicId: string): Promise<void> {
	try {
		await cloudinary.uploader.destroy(publicId);
		console.log(`Successfully deleted from Cloudinary: ${publicId}`);
	} catch (error) {
		console.error(`Failed to delete from Cloudinary: ${publicId}`, error);
		throw error;
	}
}

/**
 * Delete multiple files from Cloudinary
 * @param publicIds - Array of public IDs to delete
 * @returns Promise that resolves when all deletions are complete
 */
export async function deleteMultipleFromCloudinary(publicIds: string[]): Promise<void> {
	const deletePromises = publicIds.map(publicId => deleteFromCloudinary(publicId));
	await Promise.allSettled(deletePromises);
}

export default cloudinary;
