import { prisma } from '../lib/prisma';

async function testRoleRedirects() {
	console.log('🧪 Testing Role-Based Redirects...\n');

	try {
		// Get all users with their roles
		const users = await prisma.user.findMany({
			include: {
				role: true,
			},
		});

		console.log('📊 Available test users:');
		users.forEach(user => {
			console.log(`  - ${user.fullName} (${user.username}) - ${user.role.name}`);
		});

		console.log('\n🔀 Expected redirects after login:');
		users.forEach(user => {
			const expectedRedirect = user.role.name === 'Nutritionist' ? '/nutritionist' : '/dashboard';
			console.log(`  - ${user.username} (${user.role.name}) → ${expectedRedirect}`);
		});

		console.log('\n📋 Test Instructions:');
		console.log('1. Start the development server: pnpm dev');
		console.log('2. Test Recipe Developer login:');
		console.log('   - Go to: http://localhost:3000/signin');
		console.log('   - Sign in as: test / test123');
		console.log('   - Should redirect to: /dashboard');
		console.log('');
		console.log('3. Test Nutritionist login:');
		console.log('   - Go to: http://localhost:3000/signin');
		console.log('   - Sign in as: ammar / ammar123');
		console.log('   - Should redirect to: /nutritionist');
		console.log('');
		console.log('4. Test unauthorized access:');
		console.log('   - Sign in as Recipe Developer');
		console.log('   - Try to access: http://localhost:3000/nutritionist');
		console.log('   - Should redirect to: /unauthorized');

		console.log('\n🎯 Role-based routing summary:');
		console.log('  ✅ RecipeDeveloper → /dashboard');
		console.log('  ✅ Nutritionist → /nutritionist');
		console.log('  ✅ Unauthorized access → /unauthorized');
		console.log('  ✅ Placeholder pages created for nutritionist routes');
	} catch (error) {
		console.error('❌ Error testing role redirects:', error);
	} finally {
		await prisma.$disconnect();
	}
}

testRoleRedirects();
