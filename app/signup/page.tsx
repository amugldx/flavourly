'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ErrorDisplay } from '@/components/ui/error-display';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '@/components/ui/password-input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSignUp } from '@/lib/hooks/use-auth';
import Link from 'next/link';
import { useState } from 'react';

export default function SignUpPage() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		username: '',
		fullName: '',
	});
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [selectedRole, setSelectedRole] = useState('user');

	const signUpMutation = useSignUp();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({ ...prev, [name]: '' }));
		}
		// Clear mutation error when user starts typing
		if (signUpMutation.error) {
			signUpMutation.reset();
		}
	};

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!formData.fullName.trim()) {
			newErrors.fullName = 'Full name is required';
		}

		if (!formData.username.trim()) {
			newErrors.username = 'Username is required';
		} else if (formData.username.length < 3) {
			newErrors.username = 'Username must be at least 3 characters';
		} else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
			newErrors.username = 'Username can only contain letters, numbers, and underscores';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (formData.password.length < 8) {
			newErrors.password = 'Password must be at least 8 characters long';
		} else {
			const hasLetters = /[a-zA-Z]/.test(formData.password);
			const hasNumbers = /\d/.test(formData.password);
			if (!hasLetters || !hasNumbers) {
				newErrors.password = 'Password must contain both letters and numbers';
			}
		}

		if (!formData.confirmPassword) {
			newErrors.confirmPassword = 'Please confirm your password';
		} else if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = 'Passwords do not match';
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

		const role = selectedRole === 'user' ? 'RecipeDeveloper' : 'Nutritionist';

		signUpMutation.mutate({
			email: formData.email,
			password: formData.password,
			username: formData.username,
			fullName: formData.fullName,
			role,
		});
	};

	// Get user-friendly error message from mutation error
	const getErrorMessage = () => {
		if (!signUpMutation.error) return null;

		const errorMessage = signUpMutation.error.message;

		// Map specific error messages to user-friendly versions
		const errorMap: Record<string, string> = {
			'User with this email or username already exists':
				'An account with this email or username already exists. Please try signing in instead.',
			'Username and full name are required for registration': 'Please fill in all required fields.',
			'Role not found. Please seed the database first.':
				'System configuration error. Please contact support.',
			'Password must be at least 8 characters long': 'Password must be at least 8 characters long.',
			'Password must contain both letters and numbers':
				'Password must contain both letters and numbers.',
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
		return 'Account creation failed. Please check your information and try again.';
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-background px-4 relative'>
			{/* Theme Toggle in top right */}
			<div className='absolute top-4 right-4'>
				<ThemeToggle />
			</div>

			<Card className='w-full max-w-md'>
				<CardHeader className='space-y-1'>
					<CardTitle className='text-2xl font-bold text-center'>Create Account</CardTitle>
					<CardDescription className='text-center'>
						Enter your information to create a new account
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
									<Label htmlFor='fullName'>Full Name</Label>
									<Input
										id='fullName'
										name='fullName'
										type='text'
										placeholder='John Doe'
										value={formData.fullName}
										onChange={handleChange}
										required
										aria-invalid={!!errors.fullName}
									/>
									{errors.fullName && <p className='text-sm text-red-500'>{errors.fullName}</p>}
								</div>

								<div className='space-y-2'>
									<Label htmlFor='username'>Username</Label>
									<Input
										id='username'
										name='username'
										type='text'
										placeholder='john_doe'
										value={formData.username}
										onChange={handleChange}
										required
										aria-invalid={!!errors.username}
									/>
									{errors.username && <p className='text-sm text-red-500'>{errors.username}</p>}
								</div>

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
										placeholder='Create a password'
										value={formData.password}
										onChange={handleChange}
										required
										aria-invalid={!!errors.password}
									/>
									<p className='text-sm text-muted-foreground'>
										Password must be at least 8 characters long and contain letters and numbers
									</p>
									{errors.password && <p className='text-sm text-red-500'>{errors.password}</p>}
								</div>

								<div className='space-y-2'>
									<Label htmlFor='confirmPassword'>Confirm Password</Label>
									<PasswordInput
										id='confirmPassword'
										name='confirmPassword'
										placeholder='Confirm your password'
										value={formData.confirmPassword}
										onChange={handleChange}
										required
										aria-invalid={!!errors.confirmPassword}
									/>
									{errors.confirmPassword && (
										<p className='text-sm text-red-500'>{errors.confirmPassword}</p>
									)}
								</div>

								<ErrorDisplay
									error={getErrorMessage()}
									title='Account Creation Failed'
									variant='destructive'
									dismissible={true}
									onDismiss={() => signUpMutation.reset()}
								/>

								<Button
									type='submit'
									className='w-full'
									disabled={signUpMutation.isPending}>
									{signUpMutation.isPending ? (
										<>
											<div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
											Creating account...
										</>
									) : (
										'Create Recipe Developer Account'
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
									<Label htmlFor='nutritionist-fullName'>Full Name</Label>
									<Input
										id='nutritionist-fullName'
										name='fullName'
										type='text'
										placeholder='John Doe'
										value={formData.fullName}
										onChange={handleChange}
										required
										aria-invalid={!!errors.fullName}
									/>
									{errors.fullName && <p className='text-sm text-red-500'>{errors.fullName}</p>}
								</div>

								<div className='space-y-2'>
									<Label htmlFor='nutritionist-username'>Username</Label>
									<Input
										id='nutritionist-username'
										name='username'
										type='text'
										placeholder='john_doe'
										value={formData.username}
										onChange={handleChange}
										required
										aria-invalid={!!errors.username}
									/>
									{errors.username && <p className='text-sm text-red-500'>{errors.username}</p>}
								</div>

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
										placeholder='Create a password'
										value={formData.password}
										onChange={handleChange}
										required
										aria-invalid={!!errors.password}
									/>
									<p className='text-sm text-muted-foreground'>
										Password must be at least 8 characters long and contain letters and numbers
									</p>
									{errors.password && <p className='text-sm text-red-500'>{errors.password}</p>}
								</div>

								<div className='space-y-2'>
									<Label htmlFor='nutritionist-confirmPassword'>Confirm Password</Label>
									<PasswordInput
										id='nutritionist-confirmPassword'
										name='confirmPassword'
										placeholder='Confirm your password'
										value={formData.confirmPassword}
										onChange={handleChange}
										required
										aria-invalid={!!errors.confirmPassword}
									/>
									{errors.confirmPassword && (
										<p className='text-sm text-red-500'>{errors.confirmPassword}</p>
									)}
								</div>

								<ErrorDisplay
									error={getErrorMessage()}
									title='Account Creation Failed'
									variant='destructive'
									dismissible={true}
									onDismiss={() => signUpMutation.reset()}
								/>

								<Button
									type='submit'
									className='w-full'
									disabled={signUpMutation.isPending}>
									{signUpMutation.isPending ? (
										<>
											<div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
											Creating account...
										</>
									) : (
										'Create Nutritionist Account'
									)}
								</Button>
							</form>
						</TabsContent>
					</Tabs>

					<div className='mt-4 text-center text-sm'>
						Already have an account?{' '}
						<Link
							href='/signin'
							className='text-primary hover:underline'>
							Sign in
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
