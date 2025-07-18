'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export function Navbar() {
	const { data: session, status } = useSession();

	const handleLogout = async () => {
		await signOut({ callbackUrl: '/signin' });
	};

	return (
		<nav className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-14 items-center justify-between px-4'>
				{/* Left side - Logo */}
				<div className='flex items-center gap-4'>
					<Link
						href='/'
						className='flex items-center space-x-2 hover:opacity-80 transition-opacity'>
						<span className='text-xl font-bold'>Flavourly</span>
					</Link>
				</div>

				{/* Right side - User info and actions */}
				<div className='flex items-center gap-3'>
					{/* Show user info and actions if authenticated */}
					{status === 'authenticated' && session ? (
						<>
							{/* User name */}
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<User className='w-4 h-4' />
								<span>{session.user?.name || session.user?.username}</span>
							</div>

							{/* Theme Toggle */}
							<ThemeToggle />

							{/* Logout Button */}
							<Button
								onClick={handleLogout}
								variant='outline'
								size='sm'
								className='gap-2'>
								<LogOut className='w-4 h-4' />
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
