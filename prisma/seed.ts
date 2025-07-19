import { PrismaClient, RoleName } from '../generated/prisma/client';

const prisma = new PrismaClient();

async function main() {
	console.log('Seeding database...');

	// Create roles
	const roles = [{ name: RoleName.RecipeDeveloper }, { name: RoleName.Nutritionist }];

	for (const role of roles) {
		await prisma.role.upsert({
			where: { name: role.name },
			update: {},
			create: role,
		});
	}

	// Create default tag types and tags
	const defaultTagTypes = [
		{
			typeName: 'Dietary',
			tags: [
				'Vegetarian',
				'Vegan',
				'Gluten-Free',
				'Dairy-Free',
				'Keto',
				'Low-Carb',
				'Paleo',
				'Low-Sodium',
				'Low-Fat',
				'High-Protein',
				'Low-Calorie',
				'Nut-Free',
				'Soy-Free',
				'Egg-Free',
				'Shellfish-Free',
			],
		},
		{
			typeName: 'Cuisine',
			tags: [
				'Italian',
				'Mexican',
				'Asian',
				'Mediterranean',
				'American',
				'Indian',
				'Thai',
				'Chinese',
				'Japanese',
				'French',
				'Greek',
				'Spanish',
				'Middle Eastern',
				'Caribbean',
				'African',
			],
		},
		{
			typeName: 'Meal Type',
			tags: [
				'Breakfast',
				'Lunch',
				'Dinner',
				'Snack',
				'Dessert',
				'Appetizer',
				'Soup',
				'Salad',
				'Main Course',
				'Side Dish',
				'Beverage',
			],
		},
		{
			typeName: 'Cooking Method',
			tags: [
				'Baked',
				'Grilled',
				'Fried',
				'Steamed',
				'Raw',
				'Boiled',
				'Roasted',
				'Sauteed',
				'Slow Cooked',
				'Air Fried',
				'Smoked',
				'Pickled',
				'Fermented',
			],
		},
		{
			typeName: 'Difficulty',
			tags: [
				'Easy',
				'Medium',
				'Hard',
				'Beginner',
				'Intermediate',
				'Advanced',
				'Quick & Easy',
				'Simple',
			],
		},
		{
			typeName: 'Health',
			tags: [
				'Heart-Healthy',
				'High-Protein',
				'Low-Sodium',
				'Anti-Inflammatory',
				'Gut-Healthy',
				'Brain-Boosting',
				'Immune-Boosting',
				'Energy-Boosting',
				'Detox',
				'Weight Loss',
				'Muscle Building',
				'Diabetes-Friendly',
				'Pregnancy-Safe',
				'Kid-Friendly',
				'Senior-Friendly',
			],
		},
	];

	// Create tag types and their tags
	for (const tagTypeData of defaultTagTypes) {
		console.log(`Creating tag type: ${tagTypeData.typeName}`);

		// Create or find the tag type
		const tagType = await prisma.tagType.upsert({
			where: { typeName: tagTypeData.typeName },
			update: {},
			create: { typeName: tagTypeData.typeName },
		});

		// Create tags for this type
		for (const tagName of tagTypeData.tags) {
			await prisma.tag.upsert({
				where: {
					tagTypeId_tagName: {
						tagTypeId: tagType.id,
						tagName,
					},
				},
				update: {},
				create: {
					tagName,
					tagTypeId: tagType.id,
				},
			});
		}
	}

	console.log('Database seeded successfully!');
}

main()
	.catch(e => {
		console.error('Error seeding database:', e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
