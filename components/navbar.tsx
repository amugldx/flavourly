'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useUser } from '@/lib/hooks/use-user';
import { ChefHat, LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export function Navbar() {
	const { data: session, status } = useSession();
	const { data: user } = useUser();

	const handleLogout = async () => {
		await signOut({ callbackUrl: '/signin' });
	};

	const getUserInitials = (name: string) => {
		return name
			.split(' ')
			.map(n => n[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	};

	return (
		<nav className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='flex h-16 items-center justify-between px-6'>
				{/* Left side - Logo and Role */}
				<div className='flex items-center gap-4'>
					<Link
						href='/'
						className='flex items-center gap-3 hover:opacity-80 transition-opacity'>
						<div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary'>
							<ChefHat className='h-6 w-6 text-primary-foreground' />
						</div>
						<div className='flex flex-col'>
							<span className='text-xl font-bold'>Flavourly</span>
							{status === 'authenticated' && session?.user?.role && (
								<span className='text-sm text-muted-foreground capitalize'>
									{session.user.role}
								</span>
							)}
						</div>
					</Link>
				</div>

				{/* Center - Page Title (if needed) */}
				<div className='flex-1 flex justify-center'>
					{/* This can be used for page titles if needed */}
				</div>

				{/* Right side - User info and actions */}
				<div className='flex items-center gap-4'>
					{/* Show user info and actions if authenticated */}
					{status === 'authenticated' && session ? (
						<>
							{/* User Profile */}
							<div className='flex items-center gap-3'>
								<Avatar className='h-10 w-10'>
									<AvatarImage
										src={user?.profilePicture}
										alt={user?.fullName || user?.username || 'Profile picture'}
									/>
									<AvatarFallback className='bg-primary text-primary-foreground'>
										{getUserInitials(user?.fullName || user?.username || session.user?.name || 'U')}
									</AvatarFallback>
								</Avatar>
								<div className='flex flex-col'>
									<span className='text-sm font-medium'>
										{user?.fullName || user?.username || session.user?.name}
									</span>
									<span className='text-xs text-muted-foreground'>
										{user?.email || session.user?.email}
									</span>
								</div>
							</div>

							{/* Theme Toggle */}
							<ThemeToggle />

							{/* Logout Button */}
							<Button
								onClick={handleLogout}
								variant='ghost'
								size='sm'
								className='gap-2'>
								<LogOut className='h-4 w-4' />
								Logout
							</Button>
						</>
					) : (
						/* Show auth buttons if not authenticated */
						<>
							{/* Theme Toggle */}
							<ThemeToggle />

							{/* Auth Buttons */}
							<div className='flex items-center gap-2'>
								<Button
									asChild
									variant='outline'
									size='sm'>
									<Link href='/signin'>Sign In</Link>
								</Button>
								<Button
									asChild
									size='sm'>
									<Link href='/signup'>Sign Up</Link>
								</Button>
							</div>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
