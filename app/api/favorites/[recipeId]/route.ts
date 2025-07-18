import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
	request: NextRequest,
	{ params }: { params: Promise<{ recipeId: string }> },
) {
	try {
		const session = await auth();

		if (!session?.user?.id) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const { recipeId: recipeIdParam } = await params;
		const recipeId = parseInt(recipeIdParam);
		if (isNaN(recipeId)) {
			return NextResponse.json({ error: 'Invalid recipe ID' }, { status: 400 });
		}

		// Check if the favorite exists
		const existingFavorite = await prisma.favoriteRecipe.findFirst({
			where: {
				userId: parseInt(session.user.id),
				recipeId,
			},
		});

		if (!existingFavorite) {
			return NextResponse.json({ error: 'Favorite not found' }, { status: 404 });
		}

		// Remove the favorite
		await prisma.favoriteRecipe.delete({
			where: {
				userId_recipeId: {
					userId: parseInt(session.user.id),
					recipeId,
				},
			},
		});

		return NextResponse.json({ message: 'Recipe removed from favorites' });
	} catch (error) {
		console.error('Error removing favorite:', error);
		return NextResponse.json({ error: 'Failed to remove favorite' }, { status: 500 });
	}
}
