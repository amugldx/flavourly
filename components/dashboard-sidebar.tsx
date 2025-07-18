'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
	BookOpen,
	Calendar,
	ChevronRight,
	FolderOpen,
	Heart,
	Plus,
	Settings,
	ShoppingCart,
} from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
	title: string;
	href: string;
	icon: React.ComponentType<{ className?: string }>;
	badge?: string;
}

export function DashboardSidebar() {
	const { data: session } = useSession();
	const pathname = usePathname();
	const isNutritionist = session?.user?.role === 'Nutritionist';

	const navItems: NavItem[] = [
		{
			title: 'My Recipes',
			href: '/dashboard',
			icon: BookOpen,
		},
		{
			title: 'Create Recipe',
			href: '/dashboard/recipes/new',
			icon: Plus,
		},
		{
			title: 'Favorites',
			href: '/dashboard/favorites',
			icon: Heart,
		},
		{
			title: 'Collections',
			href: '/dashboard/collections',
			icon: FolderOpen,
		},
		{
			title: 'Meal Planner',
			href: '/dashboard/meal-planner',
			icon: Calendar,
		},
		{
			title: 'Shopping List',
			href: '/dashboard/shopping-list',
			icon: ShoppingCart,
		},
		{
			title: 'Settings',
			href: '/dashboard/settings',
			icon: Settings,
		},
	];

	// Add nutritionist-specific navigation
	if (isNutritionist) {
		navItems.push(
			{
				title: 'Review Queue',
				href: '/nutritionist/queue',
				icon: BookOpen,
				badge: 'New',
			},
			{
				title: 'Verified Recipes',
				href: '/nutritionist/verified',
				icon: BookOpen,
			},
		);
	}

	return (
		<div className='w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='p-6'>
				<h2 className='text-lg font-semibold mb-6'>Dashboard</h2>
				<nav className='space-y-8'>
					{navItems.map(item => {
						const isActive = pathname === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}>
								<Button
									variant={isActive ? 'secondary' : 'ghost'}
									className={cn('w-full justify-start', isActive && 'bg-secondary')}>
									<item.icon className='mr-2 h-4 w-4' />
									{item.title}
									{item.badge && (
										<Badge
											variant='destructive'
											className='ml-auto'>
											{item.badge}
										</Badge>
									)}
									{isActive && <ChevronRight className='ml-auto h-4 w-4' />}
								</Button>
							</Link>
						);
					})}
				</nav>
			</div>
		</div>
	);
}
