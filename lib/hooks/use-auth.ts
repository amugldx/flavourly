import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface SignInData {
	email: string;
	password: string;
}

interface SignUpData {
	email: string;
	password: string;
	username: string;
	fullName: string;
	role: string;
}

// Helper function to get user-friendly error messages
function getAuthErrorMessage(error: string): string {
	const errorMessages: Record<string, string> = {
		CredentialsSignin: 'Invalid email or password. Please check your credentials and try again.',
		'User with this email or username already exists':
			'An account with this email or username already exists. Please try signing in instead.',
		'Username and full name are required for registration': 'Please fill in all required fields.',
		'Role not found. Please seed the database first.':
			'System configuration error. Please contact support.',
		'No user found with this email':
			'No account found with this email address. Please check your email or create a new account.',
		'Invalid password': 'Incorrect password. Please try again.',
		'Password must be at least 8 characters long': 'Password must be at least 8 characters long.',
		'Password must contain both letters and numbers':
			'Password must contain both letters and numbers.',
		'Network error': 'Connection error. Please check your internet connection and try again.',
		default: 'An unexpected error occurred. Please try again.',
	};

	// Check for exact matches first
	if (errorMessages[error]) {
		return errorMessages[error];
	}

	// Check for partial matches
	for (const [key, message] of Object.entries(errorMessages)) {
		if (error.toLowerCase().includes(key.toLowerCase())) {
			return message;
		}
	}

	// Return the original error if no match found
	return error || errorMessages.default;
}

export function useSignIn() {
	const router = useRouter();

	return useMutation({
		mutationFn: async (data: SignInData) => {
			try {
				const result = await signIn('credentials', {
					email: data.email,
					password: data.password,
					action: 'signin',
					redirect: false,
				});

				if (result?.error) {
					throw new Error(result.error);
				}

				return result;
			} catch (error) {
				// Handle network errors
				if (error instanceof TypeError && error.message.includes('fetch')) {
					throw new Error('Network error');
				}
				throw error;
			}
		},
		onSuccess: result => {
			if (result?.ok) {
				toast.success('Welcome back! Redirecting to your dashboard...');
				// After successful signin, we need to get the user's role
				// We'll redirect to a temporary page that will handle the role-based redirect
				router.push('/auth-redirect');
			}
		},
		onError: (error: Error) => {
			const userFriendlyMessage = getAuthErrorMessage(error.message);
			toast.error(userFriendlyMessage);
		},
	});
}

export function useSignUp() {
	const router = useRouter();

	return useMutation({
		mutationFn: async (data: SignUpData) => {
			try {
				const result = await signIn('credentials', {
					email: data.email,
					password: data.password,
					username: data.username,
					fullName: data.fullName,
					role: data.role,
					action: 'signup',
					redirect: false,
				});

				if (result?.error) {
					throw new Error(result.error);
				}

				return result;
			} catch (error) {
				// Handle network errors
				if (error instanceof TypeError && error.message.includes('fetch')) {
					throw new Error('Network error');
				}
				throw error;
			}
		},
		onSuccess: result => {
			if (result?.ok) {
				toast.success('Account created successfully! Welcome to Flavourly!');
				// After successful signup, redirect to role-based redirect page
				router.push('/auth-redirect');
			}
		},
		onError: (error: Error) => {
			const userFriendlyMessage = getAuthErrorMessage(error.message);
			toast.error(userFriendlyMessage);
		},
	});
}
