# Cloudinary Setup Guide

This guide will help you set up Cloudinary for direct file uploads in the Flavourly application.

## 1. Create a Cloudinary Account

1. Go to [Cloudinary](https://cloudinary.com/) and sign up for a free account
2. Verify your email address

## 2. Get Your Cloud Name

1. After logging in, you'll see your Cloud Name in the dashboard
2. It will look something like `your-cloud-name` or `demo123456`

## 3. Create an Upload Preset

1. In your Cloudinary dashboard, go to **Settings** → **Upload**
2. Scroll down to **Upload presets**
3. Click **Add upload preset**
4. Set the following:
   - **Preset name**: `flavourly_uploads`
   - **Signing Mode**: `Unsigned`
   - **Folder**: `flavourly/recipes`
5. Click **Save**

## 4. Configure Environment Variables

Add these environment variables to your `.env.local` file:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=flavourly_uploads
```

Replace `your-cloud-name` with your actual Cloud Name from step 2.

## 5. How It Works

The application now uses **direct uploads** to Cloudinary:

- Files are uploaded directly from the browser to Cloudinary
- No server-side processing required
- Supports drag & drop and file selection
- Automatic file validation and size limits
- Secure uploads using your upload preset

## 6. File Support

The upload component supports:

- **Images**: JPG, PNG, WebP
- **Videos**: MP4, WebM, OGG
- **Max file size**: 10MB per file
- **Multiple files**: Up to 10 files at once

## 7. Security Notes

- Uploads are unsigned (no API key required in frontend)
- Files are automatically organized in the `flavourly/recipes` folder
- Upload preset controls what types of files can be uploaded
- File size and type validation happens on both client and server

## 8. Testing

To test the upload functionality:

1. Start your development server: `pnpm dev`
2. Go to `/dashboard/recipes/new`
3. Navigate to the Media step
4. Try dragging and dropping files or clicking "Choose Files"
5. Files should upload directly to Cloudinary and appear in your dashboard

## Troubleshooting

**Upload fails**: Check that your upload preset is set to "Unsigned" and the preset name matches your environment variable.

**Files not appearing**: Verify your Cloud Name is correct in the environment variables.

**CORS errors**: Make sure you're using the correct Cloudinary endpoint (`https://api.cloudinary.com/v1_1/your-cloud-name/auto/upload`).
