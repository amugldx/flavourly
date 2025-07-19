'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ErrorDisplay } from '@/components/ui/error-display';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '@/components/ui/password-input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSignIn } from '@/lib/hooks/use-auth';
import Link from 'next/link';
import { useState } from 'react';

export default function SignInPage() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [selectedRole, setSelectedRole] = useState('user');
	const [errors, setErrors] = useState<Record<string, string>>({});

	const signInMutation = useSignIn();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({ ...prev, [name]: '' }));
		}
		// Clear mutation error when user starts typing
		if (signInMutation.error) {
			signInMutation.reset();
		}
	};

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		if (!formData.password) {
			newErrors.password = 'Password is required';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Clear previous errors
		setErrors({});

		if (!validateForm()) {
			return;
		}

		signInMutation.mutate(formData);
	};

	// Get user-friendly error message from mutation error
	const getErrorMessage = () => {
		if (!signInMutation.error) return null;

		const errorMessage = signInMutation.error.message;

		// Map specific error messages to user-friendly versions
		const errorMap: Record<string, string> = {
			'No user found with this email':
				'No account found with this email address. Please check your email or create a new account.',
			'Invalid password': 'Incorrect password. Please try again.',
			CredentialsSignin: 'Invalid email or password. Please check your credentials and try again.',
			'Network error': 'Connection error. Please check your internet connection and try again.',
		};

		// Check for exact matches first
		if (errorMap[errorMessage]) {
			return errorMap[errorMessage];
		}

		// Check for partial matches
		for (const [key, message] of Object.entries(errorMap)) {
			if (errorMessage.toLowerCase().includes(key.toLowerCase())) {
				return message;
			}
		}

		// Return a generic message for unknown errors
		return 'Sign in failed. Please check your credentials and try again.';
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-background px-4 relative'>
			{/* Theme Toggle in top right */}
			<div className='absolute top-4 right-4'>
				<ThemeToggle />
			</div>

			<Card className='w-full max-w-md'>
				<CardHeader className='space-y-1'>
					<CardTitle className='text-2xl font-bold text-center'>Sign In</CardTitle>
					<CardDescription className='text-center'>
						Enter your credentials to access your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Tabs
						value={selectedRole}
						onValueChange={setSelectedRole}
						className='w-full'>
						<TabsList className='grid w-full grid-cols-2'>
							<TabsTrigger value='user'>Recipe Developer</TabsTrigger>
							<TabsTrigger value='nutritionist'>Nutritionist</TabsTrigger>
						</TabsList>

						<TabsContent
							value='user'
							className='space-y-4'>
							<form
								onSubmit={handleSubmit}
								className='space-y-4'>
								<div className='space-y-2'>
									<Label htmlFor='email'>Email</Label>
									<Input
										id='email'
										name='email'
										type='email'
										placeholder='john@example.com'
										value={formData.email}
										onChange={handleChange}
										required
										aria-invalid={!!errors.email}
									/>
									{errors.email && <p className='text-sm text-red-500'>{errors.email}</p>}
								</div>
								<div className='space-y-2'>
									<Label htmlFor='password'>Password</Label>
									<PasswordInput
										id='password'
										name='password'
										placeholder='Enter your password'
										value={formData.password}
										onChange={handleChange}
										required
										aria-invalid={!!errors.password}
									/>
									{errors.password && <p className='text-sm text-red-500'>{errors.password}</p>}
								</div>
								<ErrorDisplay
									error={getErrorMessage()}
									title='Sign In Failed'
									variant='destructive'
									dismissible={true}
									onDismiss={() => signInMutation.reset()}
								/>
								<Button
									type='submit'
									className='w-full'
									disabled={signInMutation.isPending}>
									{signInMutation.isPending ? (
										<>
											<div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
											Signing in...
										</>
									) : (
										'Sign In as Recipe Developer'
									)}
								</Button>
							</form>
						</TabsContent>

						<TabsContent
							value='nutritionist'
							className='space-y-4'>
							<form
								onSubmit={handleSubmit}
								className='space-y-4'>
								<div className='space-y-2'>
									<Label htmlFor='nutritionist-email'>Email</Label>
									<Input
										id='nutritionist-email'
										name='email'
										type='email'
										placeholder='john@example.com'
										value={formData.email}
										onChange={handleChange}
										required
										aria-invalid={!!errors.email}
									/>
									{errors.email && <p className='text-sm text-red-500'>{errors.email}</p>}
								</div>
								<div className='space-y-2'>
									<Label htmlFor='nutritionist-password'>Password</Label>
									<PasswordInput
										id='nutritionist-password'
										name='password'
										placeholder='Enter your password'
										value={formData.password}
										onChange={handleChange}
										required
										aria-invalid={!!errors.password}
									/>
									{errors.password && <p className='text-sm text-red-500'>{errors.password}</p>}
								</div>
								<ErrorDisplay
									error={getErrorMessage()}
									title='Sign In Failed'
									variant='destructive'
									dismissible={true}
									onDismiss={() => signInMutation.reset()}
								/>
								<Button
									type='submit'
									className='w-full'
									disabled={signInMutation.isPending}>
									{signInMutation.isPending ? (
										<>
											<div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
											Signing in...
										</>
									) : (
										'Sign In as Nutritionist'
									)}
								</Button>
							</form>
						</TabsContent>
					</Tabs>

					<div className='mt-4 text-center text-sm'>
						Don&apos;t have an account?{' '}
						<Link
							href='/signup'
							className='text-primary hover:underline'>
							Sign up
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
