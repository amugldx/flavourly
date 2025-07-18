import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

// Types
export interface Ingredient {
	name: string;
	quantity: string;
	unit: string;
	notes?: string;
}

export interface CreateRecipeData {
	title: string;
	description?: string;
	cookingTimeMinutes?: number;
	servings?: number;
	ingredients: Ingredient[];
	steps: string[];
}

export interface Recipe {
	id: number;
	title: string;
	description?: string;
	cookingTimeMinutes?: number;
	servings?: number;
	status: 'pending_verification' | 'verified' | 'needs_revision';
	createdAt: string;
	updatedAt: string;
	author: {
		id: number;
		name: string;
		username: string;
	};
}

// API functions
const createRecipe = async (data: CreateRecipeData) => {
	const response = await fetch('/api/recipes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.error || 'Failed to create recipe');
	}

	return response.json();
};

const getUserRecipes = async (): Promise<Recipe[]> => {
	const response = await fetch('/api/recipes');

	if (!response.ok) {
		throw new Error('Failed to fetch recipes');
	}

	return response.json();
};

// Hooks
export function useCreateRecipe() {
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation({
		mutationFn: createRecipe,
		onSuccess: data => {
			toast.success('Recipe created successfully!');
			queryClient.invalidateQueries({ queryKey: ['recipes'] });
			router.push('/dashboard');
		},
		onError: (error: Error) => {
			toast.error(error.message || 'Failed to create recipe');
		},
	});
}

export function useUserRecipes() {
	return useQuery({
		queryKey: ['recipes'],
		queryFn: getUserRecipes,
	});
}
