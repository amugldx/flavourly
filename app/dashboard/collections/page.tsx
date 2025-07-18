'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FolderOpen } from 'lucide-react';
import Link from 'next/link';

export default function CollectionsPage() {
	return (
		<div className='space-y-6'>
			{/* Header */}
			<div className='flex flex-col items-start gap-4'>
				<Button
					variant='outline'
					size='sm'
					asChild>
					<Link href='/dashboard'>
						<ArrowLeft className='w-4 h-4 mr-2' />
						Back to Dashboard
					</Link>
				</Button>
				<div>
					<h1 className='text-3xl font-bold tracking-tight'>My Collections</h1>
					<p className='text-muted-foreground'>Organize your recipes into collections</p>
				</div>
			</div>

			{/* Placeholder Content */}
			<Card>
				<CardHeader>
					<CardTitle className='flex items-center gap-2'>
						<FolderOpen className='w-5 h-5' />
						Recipe Collections
					</CardTitle>
					<CardDescription>
						This page will allow you to create and manage recipe collections.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='text-center py-12'>
						<FolderOpen className='w-12 h-12 text-muted-foreground mx-auto mb-4' />
						<h3 className='text-lg font-semibold mb-2'>Coming Soon</h3>
						<p className='text-muted-foreground mb-6 max-w-md mx-auto'>
							The collections feature is being developed. You'll be able to organize your recipes
							into themed collections like "Quick Weeknight Dinners" or "Holiday Baking".
						</p>
						<Button asChild>
							<Link href='/dashboard'>
								<ArrowLeft className='w-4 h-4 mr-2' />
								Back to Dashboard
							</Link>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
