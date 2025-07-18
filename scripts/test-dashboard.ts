import { prisma } from '../lib/prisma';

async function testDashboard() {
	console.log('🧪 Testing Dashboard Functionality...\n');

	try {
		// Check if we have any users
		const users = await prisma.user.findMany({
			include: {
				role: true,
			},
		});

		console.log(`📊 Found ${users.length} users in the database:`);
		users.forEach(user => {
			console.log(`  - ${user.fullName} (${user.username}) - ${user.role.name}`);
		});

		if (users.length === 0) {
			console.log('\n❌ No users found. Please create a user first by signing up.');
			return;
		}

		// Check if we have any recipes
		const recipes = await prisma.recipe.findMany({
			include: {
				author: {
					include: {
						role: true,
					},
				},
				verifiedBy: {
					include: {
						role: true,
					},
				},
			},
		});

		console.log(`\n📝 Found ${recipes.length} recipes in the database:`);
		recipes.forEach(recipe => {
			console.log(
				`  - "${recipe.title}" by ${recipe.author.fullName} (${recipe.author.role.name}) - Status: ${recipe.status}`,
			);
			if (recipe.verifiedBy) {
				console.log(
					`    Verified by: ${recipe.verifiedBy.fullName} (${recipe.verifiedBy.role.name})`,
				);
			}
		});

		// Test the API endpoint by creating a simple test
		console.log('\n🔗 Testing API endpoint...');
		console.log('You can test the dashboard by:');
		console.log('1. Starting the development server: pnpm dev');
		console.log('2. Signing in with one of the users above');
		console.log('3. Navigating to /dashboard');
		console.log('4. The dashboard should show your recipes with proper status indicators');

		// Show sample data structure
		if (recipes.length > 0) {
			const sampleRecipe = recipes[0];
			console.log('\n📋 Sample recipe data structure:');
			console.log(
				JSON.stringify(
					{
						id: sampleRecipe.id,
						title: sampleRecipe.title,
						status: sampleRecipe.status,
						author: {
							id: sampleRecipe.author.id,
							username: sampleRecipe.author.username,
							fullName: sampleRecipe.author.fullName,
						},
						verifiedBy: sampleRecipe.verifiedBy
							? {
									id: sampleRecipe.verifiedBy.id,
									username: sampleRecipe.verifiedBy.username,
									fullName: sampleRecipe.verifiedBy.fullName,
							  }
							: null,
					},
					null,
					2,
				),
			);
		}
	} catch (error) {
		console.error('❌ Error testing dashboard:', error);
	} finally {
		await prisma.$disconnect();
	}
}

testDashboard();
