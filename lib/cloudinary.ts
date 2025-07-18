import { Cloudinary } from '@cloudinary/url-gen';

// Configure Cloudinary for URL generation
export const cld = new Cloudinary({
	cloud: {
		cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'your-cloud-name',
	},
});

// Type for upload result
export interface UploadResult {
	event: string;
	info?: {
		secure_url: string;
		public_id: string;
		resource_type: string;
		width?: number;
		height?: number;
	};
}
