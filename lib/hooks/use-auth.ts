import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

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

export function useSignIn() {
	const router = useRouter();

	return useMutation({
		mutationFn: async (data: SignInData) => {
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
		},
		onSuccess: result => {
			if (result?.ok) {
				// After successful signin, we need to get the user's role
				// We'll redirect to a temporary page that will handle the role-based redirect
				router.push('/auth-redirect');
			}
		},
	});
}

export function useSignUp() {
	const router = useRouter();

	return useMutation({
		mutationFn: async (data: SignUpData) => {
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
		},
		onSuccess: result => {
			if (result?.ok) {
				// After successful signup, redirect to role-based redirect page
				router.push('/auth-redirect');
			}
		},
	});
}
