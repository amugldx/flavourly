'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function UnauthorizedPage() {
	const { data: session } = useSession();

	return (
		<div className='min-h-screen flex items-center justify-center bg-background px-4'>
			<Card className='w-full max-w-md'>
				<CardHeader className='text-center'>
					<div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100'>
						<Shield className='h-6 w-6 text-red-600' />
					</div>
					<CardTitle className='text-2xl font-bold'>Access Denied</CardTitle>
					<CardDescription>You don't have permission to access this page</CardDescription>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='text-center text-sm text-muted-foreground'>
						{session ? (
							<>
								<p>Hello, {session.user?.name || session.user?.username}!</p>
								<p className='mt-2'>
									Your role: <span className='font-medium'>{session.user?.role}</span>
								</p>
								<p className='mt-2'>
									This page requires different permissions than your current role.
								</p>
							</>
						) : (
							<p>Please sign in to access this page.</p>
						)}
					</div>

					<div className='space-y-2'>
						{session?.user?.role === 'RecipeDeveloper' && (
							<Button
								asChild
								className='w-full'>
								<Link href='/dashboard'>
									<ArrowLeft className='w-4 h-4 mr-2' />
									Go to Recipe Dashboard
								</Link>
							</Button>
						)}

						{session?.user?.role === 'Nutritionist' && (
							<Button
								asChild
								className='w-full'>
								<Link href='/nutritionist'>
									<ArrowLeft className='w-4 h-4 mr-2' />
									Go to Nutritionist Dashboard
								</Link>
							</Button>
						)}

						<Button
							asChild
							variant='outline'
							className='w-full'>
							<Link href='/'>
								<ArrowLeft className='w-4 h-4 mr-2' />
								Go to Homepage
							</Link>
						</Button>
					</div>

					<div className='text-center text-xs text-muted-foreground'>
						If you believe this is an error, please contact support.
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
