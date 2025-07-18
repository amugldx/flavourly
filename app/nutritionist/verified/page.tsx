import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function VerifiedRecipesPage() {
	return (
		<div className='space-y-6'>
			<div>
				<h1 className='text-3xl font-bold tracking-tight'>Verified Recipes</h1>
				<p className='text-muted-foreground'>View all recipes you have verified and approved.</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Coming Soon</CardTitle>
					<CardDescription>
						The verified recipes page is under development. You'll be able to view your verification
						history here.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className='text-sm text-muted-foreground'>This page will include:</p>
					<ul className='mt-2 text-sm text-muted-foreground space-y-1'>
						<li>• History of all recipes you've verified</li>
						<li>• Verification dates and details</li>
						<li>• Nutritional information you approved</li>
						<li>• Health tips you added</li>
						<li>• Search and filter options</li>
					</ul>
				</CardContent>
			</Card>
		</div>
	);
}
