'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Plus } from 'lucide-react';
import Link from 'next/link';

export default function NewRecipePage() {
	return (
		<div className='space-y-6'>
			{/* Header */}
			<div className='flex items-center gap-4'>
				<Button
					asChild
					variant='outline'
					size='sm'>
					<Link href='/dashboard'>
						<ArrowLeft className='w-4 h-4 mr-2' />
						Back to Dashboard
					</Link>
				</Button>
				<div>
					<h1 className='text-3xl font-bold tracking-tight'>Create New Recipe</h1>
					<p className='text-muted-foreground'>Share your culinary creations with the community</p>
				</div>
			</div>

			{/* Placeholder Content */}
			<Card>
				<CardHeader>
					<CardTitle className='flex items-center gap-2'>
						<Plus className='w-5 h-5' />
						Recipe Creation Form
					</CardTitle>
					<CardDescription>
						This page will contain a comprehensive form for creating new recipes.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='text-center py-12'>
						<Plus className='w-12 h-12 text-muted-foreground mx-auto mb-4' />
						<h3 className='text-lg font-semibold mb-2'>Coming Soon</h3>
						<p className='text-muted-foreground mb-6 max-w-md mx-auto'>
							The recipe creation form is being developed. You'll be able to add ingredients,
							preparation steps, cooking times, and upload media for your recipes.
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
