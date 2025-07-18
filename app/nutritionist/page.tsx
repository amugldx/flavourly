import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NutritionistDashboard() {
	return (
		<div className='space-y-6'>
			<div className='flex items-center justify-between'>
				<div>
					<h1 className='text-3xl font-bold tracking-tight'>Nutritionist Dashboard</h1>
					<p className='text-muted-foreground'>
						Review and verify recipes submitted by recipe developers.
					</p>
				</div>
			</div>

			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Pending Reviews</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>0</div>
						<p className='text-xs text-muted-foreground'>Recipes waiting for verification</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Verified Today</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>0</div>
						<p className='text-xs text-muted-foreground'>Recipes verified today</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Total Verified</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>0</div>
						<p className='text-xs text-muted-foreground'>Recipes verified by you</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Average Review Time</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>--</div>
						<p className='text-xs text-muted-foreground'>Minutes per review</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Coming Soon</CardTitle>
					<CardDescription>
						The nutritionist dashboard is under development. You'll be able to review and verify
						recipes here.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className='text-sm text-muted-foreground'>This page will include:</p>
					<ul className='mt-2 text-sm text-muted-foreground space-y-1'>
						<li>• Recipe review queue</li>
						<li>• Nutritional information verification</li>
						<li>• Health tips and suggestions</li>
						<li>• Recipe approval/rejection workflow</li>
					</ul>
				</CardContent>
			</Card>
		</div>
	);
}
