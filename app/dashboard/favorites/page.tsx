'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Heart } from 'lucide-react';
import Link from 'next/link';

export default function FavoritesPage() {
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
					<h1 className='text-3xl font-bold tracking-tight'>My Favorites</h1>
					<p className='text-muted-foreground'>Your saved and favorite recipes</p>
				</div>
			</div>

			{/* Placeholder Content */}
			<Card>
				<CardHeader>
					<CardTitle className='flex items-center gap-2'>
						<Heart className='w-5 h-5' />
						Favorite Recipes
					</CardTitle>
					<CardDescription>This page will display all your favorite recipes.</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='text-center py-12'>
						<Heart className='w-12 h-12 text-muted-foreground mx-auto mb-4' />
						<h3 className='text-lg font-semibold mb-2'>Coming Soon</h3>
						<p className='text-muted-foreground mb-6 max-w-md mx-auto'>
							The favorites feature is being developed. You'll be able to save and organize your
							favorite recipes from the community.
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
