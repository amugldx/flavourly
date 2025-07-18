import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ReviewQueuePage() {
	return (
		<div className='space-y-6'>
			<div>
				<h1 className='text-3xl font-bold tracking-tight'>Review Queue</h1>
				<p className='text-muted-foreground'>Review recipes that are pending verification.</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Coming Soon</CardTitle>
					<CardDescription>
						The recipe review queue is under development. You'll be able to review pending recipes
						here.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className='text-sm text-muted-foreground'>This page will include:</p>
					<ul className='mt-2 text-sm text-muted-foreground space-y-1'>
						<li>• List of recipes pending verification</li>
						<li>• Recipe details and ingredients</li>
						<li>• Nutritional information review</li>
						<li>• Approval/rejection workflow</li>
						<li>• Health tips and suggestions</li>
					</ul>
				</CardContent>
			</Card>
		</div>
	);
}
