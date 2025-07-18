import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='space-y-8'>
			{/* Hero Section */}
			<div className='text-center space-y-4'>
				<h1 className='text-4xl font-bold tracking-tight'>Welcome to Flavourly</h1>
				<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
					Your ultimate recipe management platform. Discover, create, and organize your favorite
					recipes with ease.
				</p>
				<div className='flex gap-4 justify-center'>
					<Button asChild>
						<Link href='/signin'>Get Started</Link>
					</Button>
					<Button
						variant='outline'
						asChild>
						<Link href='/signup'>Create Account</Link>
					</Button>
				</div>
			</div>

			{/* Features Section */}
			<div className='grid md:grid-cols-3 gap-6'>
				<Card>
					<CardHeader>
						<CardTitle>Discover Recipes</CardTitle>
						<CardDescription>
							Browse through thousands of delicious recipes from around the world
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className='text-sm text-muted-foreground'>
							Find new favorites with our curated collection of recipes, complete with nutritional
							information and cooking tips.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Create & Share</CardTitle>
						<CardDescription>Share your culinary creations with the community</CardDescription>
					</CardHeader>
					<CardContent>
						<p className='text-sm text-muted-foreground'>
							Upload your own recipes, add photos, and get feedback from other food enthusiasts.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Meal Planning</CardTitle>
						<CardDescription>Plan your meals and organize your cooking schedule</CardDescription>
					</CardHeader>
					<CardContent>
						<p className='text-sm text-muted-foreground'>
							Create weekly meal plans, generate shopping lists, and never wonder what to cook
							again.
						</p>
					</CardContent>
				</Card>
			</div>

			{/* CTA Section */}
			<div className='text-center space-y-4'>
				<h2 className='text-2xl font-semibold'>Ready to start cooking?</h2>
				<p className='text-muted-foreground'>
					Join thousands of food lovers who are already using Flavourly
				</p>
				<Button
					size='lg'
					asChild>
					<Link href='/signup'>Join Flavourly</Link>
				</Button>
			</div>
		</div>
	);
}
