import { signIn } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const { email, password, username, fullName, role } = await request.json();

		console.log('Signup API received:', { email, username, fullName, role }); // Debug log

		if (!email || !password || !username || !fullName) {
			return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
		}

		const result = await signIn('credentials', {
			email,
			password,
			username,
			fullName,
			role,
			action: 'signup',
			redirect: false,
		});

		console.log('Signup result:', result); // Debug log

		if (result?.error) {
			return NextResponse.json({ error: result.error }, { status: 400 });
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Signup error:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
