'use client';

import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { CheckCircle, ClipboardList, Home } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function NutritionistLayout({ children }: { children: React.ReactNode }) {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return (
			<div className='min-h-screen bg-background flex items-center justify-center'>
				<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
			</div>
		);
	}

	if (!session) {
		redirect('/signin');
	}

	// Check if user is a nutritionist
	if (session.user?.role !== 'Nutritionist') {
		redirect('/unauthorized');
	}

	return (
		<div className='min-h-screen bg-background'>
			<Navbar />

			{/* Nutritionist Navigation */}
			<div className='border-b bg-muted/30'>
				<div className='container'>
					<nav className='flex space-x-6'>
						<Link href='/nutritionist'>
							<Button
								variant='ghost'
								className='h-12 px-4'>
								<Home className='w-4 h-4 mr-2' />
								Dashboard
							</Button>
						</Link>
						<Link href='/nutritionist/queue'>
							<Button
								variant='ghost'
								className='h-12 px-4'>
								<ClipboardList className='w-4 h-4 mr-2' />
								Review Queue
							</Button>
						</Link>
						<Link href='/nutritionist/verified'>
							<Button
								variant='ghost'
								className='h-12 px-4'>
								<CheckCircle className='w-4 h-4 mr-2' />
								Verified Recipes
							</Button>
						</Link>
					</nav>
				</div>
			</div>

			{/* Main Content */}
			<main className='container py-6'>{children}</main>
		</div>
	);
}
