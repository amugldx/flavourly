'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

export function Navbar() {
	return (
		<nav className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-14 items-center justify-between'>
				<div className='flex items-center space-x-4'>
					<Link
						href='/'
						className='flex items-center space-x-2'>
						<span className='text-xl font-bold'>Flavourly</span>
					</Link>
				</div>

				<div className='flex items-center space-x-4'>
					<ThemeToggle />
				</div>
			</div>
		</nav>
	);
}
