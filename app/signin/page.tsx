'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

	const signInMutation = useSignIn();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		signInMutation.mutate(formData);
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
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='password'>Password</Label>
									<Input
										id='password'
										name='password'
										type='password'
										placeholder='Enter your password'
										value={formData.password}
										onChange={handleChange}
										required
									/>
								</div>
								{signInMutation.error && (
									<div className='text-sm text-red-500 text-center'>
										{signInMutation.error.message}
									</div>
								)}
								<Button
									type='submit'
									className='w-full'
									disabled={signInMutation.isPending}>
									{signInMutation.isPending ? 'Signing in...' : 'Sign In as Recipe Developer'}
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
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='nutritionist-password'>Password</Label>
									<Input
										id='nutritionist-password'
										name='password'
										type='password'
										placeholder='Enter your password'
										value={formData.password}
										onChange={handleChange}
										required
									/>
								</div>
								{signInMutation.error && (
									<div className='text-sm text-red-500 text-center'>
										{signInMutation.error.message}
									</div>
								)}
								<Button
									type='submit'
									className='w-full'
									disabled={signInMutation.isPending}>
									{signInMutation.isPending ? 'Signing in...' : 'Sign In as Nutritionist'}
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
