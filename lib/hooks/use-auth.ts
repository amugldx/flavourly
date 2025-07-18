import { useMutation } from '@tanstack/react-query';
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
			const response = await fetch('/api/auth/signin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.error || 'Sign in failed');
			}

			return response.json();
		},
		onSuccess: () => {
			router.push('/');
			router.refresh();
		},
	});
}

export function useSignUp() {
	const router = useRouter();

	return useMutation({
		mutationFn: async (data: SignUpData) => {
			const response = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.error || 'Sign up failed');
			}

			return response.json();
		},
		onSuccess: () => {
			router.push('/');
			router.refresh();
		},
	});
}
