# Cloudinary Setup for Flavourly

This guide will help you set up Cloudinary for media uploads in the Flavourly application.

## 1. Create a Cloudinary Account

1. Go to [Cloudinary](https://cloudinary.com/) and sign up for a free account
2. Verify your email address
3. Log in to your Cloudinary dashboard

## 2. Get Your Credentials

From your Cloudinary dashboard, you'll need:

- **Cloud Name**: Found in the dashboard overview
- **API Key**: Found in the dashboard overview
- **API Secret**: Found in the dashboard overview

## 3. Environment Variables

Add these variables to your `.env.local` file:

```env
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

## 4. Features

The Cloudinary integration provides:

- **Image Upload**: Supports JPEG, PNG, WebP formats
- **Video Upload**: Supports MP4, WebM, OGG formats
- **Automatic Optimization**: Images are automatically resized and optimized
- **Secure URLs**: All media is served over HTTPS
- **File Size Limit**: Maximum 10MB per file
- **Drag & Drop**: Easy upload interface with preview

## 5. Usage

Media uploads are integrated into the recipe creation process:

1. Go to `/dashboard/recipes/new`
2. Complete the first 3 steps (Basic Info, Ingredients, Instructions)
3. In step 4, upload your media files
4. Add captions to your media
5. Click "Upload All" to upload to Cloudinary
6. Create your recipe

## 6. File Structure

Uploaded files are organized in Cloudinary as:

- `flavourly/recipes/` - Main folder for recipe media
- Each file gets a unique ID and is optimized automatically

## 7. Security

- Only authenticated users can upload media
- File types are validated on both client and server
- File sizes are limited to prevent abuse
- All uploads are associated with the authenticated user
