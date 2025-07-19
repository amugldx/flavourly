#!/usr/bin/env tsx

import { prisma } from '../lib/prisma';

async function testAuthErrors() {
	console.log('🔍 Testing Authentication Error Handling...\n');

	try {
		// Test database connection
		console.log('Testing database connection...');
		const userCount = await prisma.user.count();
		console.log(`✅ Database connected. Total users: ${userCount}`);

		// Check for existing users
		const existingUsers = await prisma.user.findMany({
			include: {
				role: true,
			},
			take: 3,
		});

		console.log('\n📋 Existing users for testing:');
		existingUsers.forEach(user => {
			console.log(`- ${user.username} (${user.email}) - ${user.role.name}`);
		});

		console.log('\n🎯 Test Scenarios for Error Handling:');
		console.log('\n1. **Sign In Errors:**');
		console.log('   - Try signing in with non-existent email');
		console.log('   - Try signing in with wrong password');
		console.log('   - Try signing in with empty fields');
		console.log('   - Try signing in with invalid email format');

		console.log('\n2. **Sign Up Errors:**');
		console.log('   - Try signing up with existing email');
		console.log('   - Try signing up with existing username');
		console.log('   - Try signing up with weak password (< 8 chars)');
		console.log('   - Try signing up with password without letters/numbers');
		console.log('   - Try signing up with empty required fields');
		console.log('   - Try signing up with invalid username format');

		console.log('\n3. **Network Errors:**');
		console.log('   - Disconnect internet and try to sign in/up');
		console.log('   - Check if network error messages are user-friendly');

		console.log('\n🔧 Expected Error Messages:');
		console.log('\n**Sign In:**');
		console.log(
			'- "No account found with this email address. Please check your email or create a new account."',
		);
		console.log('- "Incorrect password. Please try again."');
		console.log('- "Invalid email or password. Please check your credentials and try again."');

		console.log('\n**Sign Up:**');
		console.log(
			'- "An account with this email or username already exists. Please try signing in instead."',
		);
		console.log('- "Password must be at least 8 characters long."');
		console.log('- "Password must contain both letters and numbers."');
		console.log('- "Please fill in all required fields."');

		console.log('\n**Network:**');
		console.log('- "Connection error. Please check your internet connection and try again."');

		console.log('\n📝 Manual Testing Instructions:');
		console.log('1. Open the application in your browser');
		console.log('2. Go to /signin page');
		console.log('3. Try the error scenarios listed above');
		console.log('4. Verify that error messages are clear and helpful');
		console.log('5. Test both Recipe Developer and Nutritionist tabs');
		console.log('6. Go to /signup page and repeat the testing');

		console.log('\n✅ Improvements Made:');
		console.log('- Enhanced error message mapping in auth hooks');
		console.log('- Better network error detection');
		console.log('- Cleaner error message formatting');
		console.log('- Role-specific error handling');
		console.log('- Improved error display titles');
	} catch (error) {
		console.error('❌ Error during testing:', error);
	}
}

testAuthErrors()
	.catch(console.error)
	.finally(() => process.exit(0));
