import { PrismaClient, RoleName } from '../generated/prisma/client';

const prisma = new PrismaClient();

async function main() {
	console.log('Seeding database...');

	// Create roles
	const roles = [
		{ name: RoleName.RecipeDeveloper },
		{ name: RoleName.Nutritionist },
		{ name: RoleName.Admin },
	];

	for (const role of roles) {
		await prisma.role.upsert({
			where: { name: role.name },
			update: {},
			create: role,
		});
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
