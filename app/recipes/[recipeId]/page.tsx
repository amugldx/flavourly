'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MealType } from '@/generated/prisma/client';
import { useAddMealPlanEntry, useMealPlans } from '@/lib/hooks/use-meal-plans';
import {
	useAddRecipeToCollection,
	useAddToFavorites,
	useCreateReview,
	useRemoveFromFavorites,
	useResubmitRecipe,
} from '@/lib/hooks/use-mutations';
import {
	useRecipe,
	useRecipeReviews,
	useUserCollections,
	useUserFavorites,
} from '@/lib/hooks/use-queries';
import {
	AlertCircle,
	ArrowLeft,
	BookOpen,
	Calendar,
	CheckCircle,
	ChevronLeft,
	ChevronRight,
	Clock,
	Edit,
	Heart,
	Loader2,
	Play,
	RefreshCw,
	Share2,
	Star,
	User,
	Users,
} from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useState } from 'react';
import { toast } from 'sonner';

interface RecipeDetailPageProps {
	params: Promise<{ recipeId: string }>;
}

export default function RecipeDetailPage({ params }: RecipeDetailPageProps) {
	const { recipeId } = use(params);
	const recipeIdNum = parseInt(recipeId);
	const { data: recipe, isLoading: recipeLoading, error: recipeError } = useRecipe(recipeIdNum);
	const { data: reviews, isLoading: reviewsLoading } = useRecipeReviews(recipeIdNum);
	const { data: userFavorites } = useUserFavorites();
	const { data: session } = useSession();
	const router = useRouter();

	// Enhanced Quick Actions hooks
	const { data: collections } = useUserCollections();
	const { data: mealPlans } = useMealPlans();
	const addToCollection = useAddRecipeToCollection();
	const addMealPlanEntry = useAddMealPlanEntry();
	const resubmitRecipe = useResubmitRecipe();

	// Quick Actions state
	const [showMealPlanDialog, setShowMealPlanDialog] = useState(false);
	const [showCollectionDialog, setShowCollectionDialog] = useState(false);
	const [selectedMealPlan, setSelectedMealPlan] = useState('');
	const [selectedCollection, setSelectedCollection] = useState('');
	const [selectedMealType, setSelectedMealType] = useState<MealType>(MealType.Dinner);
	const [selectedDate, setSelectedDate] = useState('');
	const [servingsToPrepare, setServingsToPrepare] = useState(1);

	const addToFavorites = useAddToFavorites();
	const removeFromFavorites = useRemoveFromFavorites();
	const createReview = useCreateReview();

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [activeTab, setActiveTab] = useState('overview');

	// Check if recipe is in user's favorites
	const isFavorited = userFavorites?.some(fav => fav.recipe.id === recipeIdNum) || false;

	// Check if user can edit this recipe
	const canEdit = session?.user?.id && recipe?.authorId === parseInt(session.user.id);

	// Check if recipe can be resubmitted (needs revision and user is the author)
	const canResubmit = canEdit && recipe?.status === 'needs_revision';

	// Check if user is a nutritionist (should not see Quick Actions)
	const isNutritionist = session?.user?.role === 'Nutritionist';

	// Handle resubmitting recipe for review
	const handleResubmit = async () => {
		if (!canResubmit) return;

		try {
			await resubmitRecipe.mutateAsync(recipeIdNum);
		} catch (error) {
			// Error is handled by the mutation
		}
	};

	// Handle adding recipe to meal plan
	const handleAddToMealPlan = async () => {
		if (!selectedMealPlan || !selectedDate) {
			toast.error('Please select a meal plan and date');
			return;
		}

		try {
			await addMealPlanEntry.mutateAsync({
				planId: parseInt(selectedMealPlan),
				data: {
					recipeId: recipeIdNum,
					mealDate: selectedDate,
					mealType: selectedMealType,
					servingsToPrepare,
				},
			});
			setShowMealPlanDialog(false);
			setSelectedMealPlan('');
			setSelectedDate('');
			setServingsToPrepare(1);
		} catch (error) {
			// Error is handled by the mutation
		}
	};

	// Handle adding recipe to collection
	const handleAddToCollection = async () => {
		if (!selectedCollection) {
			toast.error('Please select a collection');
			return;
		}

		try {
			await addToCollection.mutateAsync({
				collectionId: parseInt(selectedCollection),
				recipeId: recipeIdNum,
			});
			setShowCollectionDialog(false);
			setSelectedCollection('');
		} catch (error) {
			// Error is handled by the mutation
		}
	};

	const handleFavoriteToggle = async () => {
		if (!session) {
			toast.error('Please sign in to add favorites');
			return;
		}

		try {
			if (isFavorited) {
				await removeFromFavorites.mutateAsync(recipeIdNum);
			} else {
				await addToFavorites.mutateAsync(recipeIdNum);
			}
		} catch (error) {
			// Error is handled by the mutation
		}
	};

	const handleShare = () => {
		if (navigator.share) {
			navigator.share({
				title: recipe?.title || 'Recipe',
				text: recipe?.description || '',
				url: window.location.href,
			});
		} else {
			navigator.clipboard.writeText(window.location.href);
			toast.success('Link copied to clipboard!');
		}
	};

	const nextImage = () => {
		if (recipe?.media && recipe.media.length > 0) {
			setCurrentImageIndex(prev => (prev === recipe.media.length - 1 ? 0 : prev + 1));
		}
	};

	const prevImage = () => {
		if (recipe?.media && recipe.media.length > 0) {
			setCurrentImageIndex(prev => (prev === 0 ? recipe.media.length - 1 : prev - 1));
		}
	};

	if (recipeError) {
		return (
			<div className='container mx-auto px-4 py-8'>
				<div className='text-center'>
					<h1 className='text-2xl font-bold text-destructive mb-4'>Recipe Not Found</h1>
					<p className='text-muted-foreground mb-4'>
						The recipe you're looking for doesn't exist or has been removed.
					</p>
					<Button onClick={() => router.push('/recipes')}>Browse Recipes</Button>
				</div>
			</div>
		);
	}

	if (recipeLoading) {
		return (
			<div className='container mx-auto px-4 py-8'>
				{/* Header Skeleton */}
				<div className='mb-8'>
					<Skeleton className='h-8 w-64 mb-4' />
					<Skeleton className='h-4 w-full mb-2' />
					<Skeleton className='h-4 w-3/4' />
				</div>

				{/* Image Skeleton */}
				<Skeleton className='h-96 w-full rounded-lg mb-8' />

				{/* Content Skeleton */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					<div className='lg:col-span-2'>
						<Skeleton className='h-6 w-48 mb-4' />
						<Skeleton className='h-4 w-full mb-2' />
						<Skeleton className='h-4 w-full mb-2' />
						<Skeleton className='h-4 w-3/4' />
					</div>
					<div>
						<Skeleton className='h-64 w-full' />
					</div>
				</div>
			</div>
		);
	}

	if (!recipe) {
		return null;
	}

	const images = recipe.media.filter(m => m.mediaType === 'image');
	const videos = recipe.media.filter(m => m.mediaType === 'video');
	const currentMedia = images[currentImageIndex];
	const hasImages = images.length > 0;
	const hasVideos = videos.length > 0;

	// Media Gallery Component
	const MediaGallery = ({ className = '' }: { className?: string }) => (
		<div className={className}>
			<div className='relative aspect-video rounded-lg overflow-hidden bg-muted'>
				{currentMedia ? (
					<img
						src={currentMedia.url}
						alt={currentMedia.caption || recipe.title}
						className='w-full h-full object-cover'
					/>
				) : videos.length > 0 ? (
					<div className='w-full h-full flex items-center justify-center'>
						<Play className='h-16 w-16 text-muted-foreground' />
						<span className='ml-2 text-muted-foreground'>Video content</span>
					</div>
				) : (
					<div className='w-full h-full flex items-center justify-center'>
						<span className='text-muted-foreground'>No media available</span>
					</div>
				)}

				{/* Navigation Arrows */}
				{images.length > 1 && (
					<>
						<Button
							variant='secondary'
							size='sm'
							className='absolute left-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100'
							onClick={prevImage}>
							<ChevronLeft className='h-4 w-4' />
						</Button>
						<Button
							variant='secondary'
							size='sm'
							className='absolute right-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100'
							onClick={nextImage}>
							<ChevronRight className='h-4 w-4' />
						</Button>
					</>
				)}

				{/* Image Counter */}
				{images.length > 1 && (
					<div className='absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm'>
						{currentImageIndex + 1} / {images.length}
					</div>
				)}
			</div>

			{/* Thumbnail Navigation */}
			{images.length > 1 && (
				<div className='flex gap-2 mt-4 overflow-x-auto'>
					{images.map((image, index) => (
						<button
							key={image.id}
							onClick={() => setCurrentImageIndex(index)}
							className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-colors ${
								index === currentImageIndex
									? 'border-primary'
									: 'border-transparent hover:border-muted-foreground'
							}`}>
							<img
								src={image.url}
								alt={image.caption || `Image ${index + 1}`}
								className='w-full h-full object-cover'
							/>
						</button>
					))}
				</div>
			)}
		</div>
	);

	return (
		<div className='container mx-auto px-4 py-8'>
			{/* Header */}
			<div className='mb-8'>
				<Button
					variant='ghost'
					onClick={() => router.back()}
					className='mb-4'>
					<ArrowLeft className='h-4 w-4 mr-2' />
					Back
				</Button>

				<div className='flex items-start justify-between'>
					<div className='flex-1'>
						<h1 className='text-3xl font-bold mb-2'>{recipe.title}</h1>
						{recipe.description && (
							<p className='text-muted-foreground text-lg mb-4'>{recipe.description}</p>
						)}

						{/* Recipe Meta */}
						<div className='flex items-center gap-6 text-sm text-muted-foreground'>
							{recipe.cookingTimeMinutes && (
								<div className='flex items-center gap-1'>
									<Clock className='h-4 w-4' />
									<span>{recipe.cookingTimeMinutes} minutes</span>
								</div>
							)}
							{recipe.servings && (
								<div className='flex items-center gap-1'>
									<Users className='h-4 w-4' />
									<span>{recipe.servings} servings</span>
								</div>
							)}
							{recipe.averageRating && (
								<div className='flex items-center gap-1'>
									<Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
									<span>
										{recipe.averageRating.toFixed(1)} ({recipe.reviewCount} reviews)
									</span>
								</div>
							)}
						</div>
					</div>

					{/* Action Buttons */}
					<div className='flex gap-2'>
						<Button
							variant='outline'
							size='sm'
							onClick={handleShare}>
							<Share2 className='h-4 w-4 mr-2' />
							Share
						</Button>
						{!isNutritionist && (
							<Button
								variant={isFavorited ? 'default' : 'outline'}
								size='sm'
								onClick={handleFavoriteToggle}
								disabled={addToFavorites.isPending || removeFromFavorites.isPending}>
								<Heart className={`h-4 w-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
								{isFavorited ? 'Favorited' : 'Favorite'}
							</Button>
						)}
					</div>
				</div>
			</div>

			{/* Video Media Gallery - Full Width (only if there are videos and no images) */}
			{hasVideos && !hasImages && recipe.media.length > 0 && (
				<div className='mb-8'>
					<MediaGallery />
				</div>
			)}

			{/* Status Badge */}
			<div className='mb-6 flex items-center gap-4'>
				<Badge
					variant={
						recipe.status === 'verified'
							? 'default'
							: recipe.status === 'pending_verification'
							? 'secondary'
							: 'destructive'
					}
					className='text-sm'>
					{recipe.status === 'verified'
						? '✅ Nutritionist Verified'
						: recipe.status === 'pending_verification'
						? '⏳ Pending Verification'
						: '⚠️ Needs Revision'}
				</Badge>

				{/* Resubmit Button - Only show for recipes that need revision and user is the author */}
				{canResubmit && (
					<Button
						onClick={handleResubmit}
						disabled={resubmitRecipe.isPending}
						variant='outline'
						size='sm'
						className='bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'>
						{resubmitRecipe.isPending ? (
							<>
								<Loader2 className='h-4 w-4 mr-2 animate-spin' />
								Resubmitting...
							</>
						) : (
							<>
								<RefreshCw className='h-4 w-4 mr-2' />
								Resubmit for Review
							</>
						)}
					</Button>
				)}
			</div>

			{/* Main Content */}
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
				{/* Left Column - Recipe Details */}
				<div className='lg:col-span-2'>
					<Tabs
						value={activeTab}
						onValueChange={setActiveTab}
						className='w-full'>
						<TabsList className='grid w-full grid-cols-3'>
							<TabsTrigger value='overview'>Overview</TabsTrigger>
							<TabsTrigger value='ingredients'>Ingredients</TabsTrigger>
							<TabsTrigger value='reviews'>Reviews</TabsTrigger>
						</TabsList>

						<TabsContent
							value='overview'
							className='space-y-6'>
							{/* Preparation Steps */}
							<Card>
								<CardHeader>
									<CardTitle>Preparation Steps</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='space-y-4'>
										{recipe.steps?.map((step, index) => (
											<div
												key={step.id}
												className='flex gap-4'>
												<div className='flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold'>
													{index + 1}
												</div>
												<p className='flex-1 pt-1'>{step.instruction}</p>
											</div>
										))}
									</div>
								</CardContent>
							</Card>

							{/* Nutritional Information */}
							{recipe.nutritionalInfo && (
								<Card>
									<CardHeader>
										<CardTitle>Nutritional Information</CardTitle>
										<Badge
											variant='outline'
											className='w-fit'>
											{recipe.nutritionalInfo.dataSource === 'verified_nutritionist'
												? 'Verified by Nutritionist'
												: 'Estimated'}
										</Badge>
									</CardHeader>
									<CardContent>
										<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
											{recipe.nutritionalInfo.calories && (
												<div className='text-center'>
													<div className='text-2xl font-bold text-primary'>
														{recipe.nutritionalInfo.calories}
													</div>
													<div className='text-sm text-muted-foreground'>Calories</div>
												</div>
											)}
											{recipe.nutritionalInfo.proteinGrams && (
												<div className='text-center'>
													<div className='text-2xl font-bold'>
														{recipe.nutritionalInfo.proteinGrams}g
													</div>
													<div className='text-sm text-muted-foreground'>Protein</div>
												</div>
											)}
											{recipe.nutritionalInfo.carbohydratesGrams && (
												<div className='text-center'>
													<div className='text-2xl font-bold'>
														{recipe.nutritionalInfo.carbohydratesGrams}g
													</div>
													<div className='text-sm text-muted-foreground'>Carbs</div>
												</div>
											)}
											{recipe.nutritionalInfo.fatGrams && (
												<div className='text-center'>
													<div className='text-2xl font-bold'>
														{recipe.nutritionalInfo.fatGrams}g
													</div>
													<div className='text-sm text-muted-foreground'>Fat</div>
												</div>
											)}
										</div>
									</CardContent>
								</Card>
							)}

							{/* Health Tips */}
							{recipe.healthTips && (
								<Card>
									<CardHeader>
										<CardTitle>Health Tips</CardTitle>
									</CardHeader>
									<CardContent>
										<p className='text-muted-foreground'>{recipe.healthTips}</p>
									</CardContent>
								</Card>
							)}
						</TabsContent>

						<TabsContent
							value='ingredients'
							className='space-y-6'>
							<Card>
								<CardHeader>
									<CardTitle>Ingredients</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='space-y-4'>
										{recipe.ingredients?.map(ingredient => (
											<div
												key={`${ingredient.recipeId}-${ingredient.ingredientId}`}
												className='flex items-center justify-between p-3 border rounded-lg'>
												<div className='flex-1'>
													<div className='font-medium'>{ingredient.ingredient.name}</div>
													{ingredient.notes && (
														<div className='text-sm text-muted-foreground'>{ingredient.notes}</div>
													)}
												</div>
												<div className='text-right'>
													<div className='font-medium'>
														{ingredient.quantity} {ingredient.unit.unitName}
													</div>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent
							value='reviews'
							className='space-y-6'>
							{/* Review Summary */}
							<Card>
								<CardHeader>
									<CardTitle>Reviews</CardTitle>
								</CardHeader>
								<CardContent>
									{reviewsLoading ? (
										<div className='space-y-4'>
											{Array.from({ length: 3 }).map((_, index) => (
												<div
													key={index}
													className='space-y-2'>
													<Skeleton className='h-4 w-32' />
													<Skeleton className='h-4 w-full' />
													<Skeleton className='h-4 w-3/4' />
												</div>
											))}
										</div>
									) : reviews && reviews.length > 0 ? (
										<div className='space-y-6'>
											{reviews.map(review => (
												<div
													key={review.id}
													className='border-b pb-4 last:border-b-0'>
													<div className='flex items-center gap-2 mb-2'>
														<div className='flex items-center gap-1'>
															{Array.from({ length: 5 }).map((_, index) => (
																<Star
																	key={index}
																	className={`h-4 w-4 ${
																		index < review.rating
																			? 'fill-yellow-400 text-yellow-400'
																			: 'text-muted-foreground'
																	}`}
																/>
															))}
														</div>
														<span className='text-sm text-muted-foreground'>
															by {review.user.fullName || review.user.username}
														</span>
													</div>
													{review.comment && (
														<p className='text-muted-foreground'>{review.comment}</p>
													)}
												</div>
											))}
										</div>
									) : (
										<div className='text-center py-8'>
											<Star className='h-12 w-12 text-muted-foreground mx-auto mb-4' />
											<p className='text-muted-foreground'>No reviews yet</p>
											<p className='text-sm text-muted-foreground'>
												Be the first to review this recipe!
											</p>
										</div>
									)}
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>

				{/* Right Column - Recipe Info */}
				<div className='space-y-6'>
					{/* Image Media Gallery - Right Side (only if there are images) */}
					{hasImages && <MediaGallery className='mb-6' />}

					{/* Author Info */}
					<Card>
						<CardHeader>
							<CardTitle>Recipe Author</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='space-y-3'>
								<div className='flex items-center gap-3'>
									<Avatar className='w-12 h-12'>
										<AvatarImage src={recipe.author.profilePicture || undefined} />
										<AvatarFallback>
											{(recipe.author.fullName || recipe.author.username).charAt(0).toUpperCase()}
										</AvatarFallback>
									</Avatar>
									<div>
										<div className='font-medium'>
											{recipe.author.fullName || recipe.author.username}
										</div>
										<div className='text-sm text-muted-foreground'>Recipe Developer</div>
									</div>
								</div>
								<Button
									asChild
									variant='outline'
									size='sm'
									className='w-full'>
									<Link href={`/users/${recipe.author.id}`}>
										<User className='h-4 w-4 mr-2' />
										View Author Profile
									</Link>
								</Button>
							</div>
						</CardContent>
					</Card>

					{/* Nutritionist Verification Info - Only for verified recipes */}
					{recipe.status === 'verified' && recipe.verifiedBy && (
						<Card>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<CheckCircle className='h-5 w-5 text-green-600' />
									Verified by Nutritionist
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-3'>
									<div className='flex items-center gap-3'>
										<Avatar className='w-12 h-12'>
											<AvatarImage src={recipe.verifiedBy.profilePicture || undefined} />
											<AvatarFallback>
												{(recipe.verifiedBy.fullName || recipe.verifiedBy.username)
													.charAt(0)
													.toUpperCase()}
											</AvatarFallback>
										</Avatar>
										<div>
											<div className='font-medium'>
												{recipe.verifiedBy.fullName || recipe.verifiedBy.username}
											</div>
											<div className='text-sm text-muted-foreground'>Certified Nutritionist</div>
										</div>
									</div>
									<Button
										asChild
										variant='outline'
										size='sm'
										className='w-full'>
										<Link href={`/nutritionist-profile/${recipe.verifiedBy.id}`}>
											<User className='h-4 w-4 mr-2' />
											View Nutritionist Profile
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					)}

					{/* Nutritionist Review Info - For recipes that need revision */}
					{recipe.status === 'needs_revision' && recipe.verifiedBy && (
						<Card>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<AlertCircle className='h-5 w-5 text-orange-600' />
									Review by Nutritionist
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-3'>
									<div className='flex items-center gap-3'>
										<Avatar className='w-12 h-12'>
											<AvatarImage src={recipe.verifiedBy.profilePicture || undefined} />
											<AvatarFallback>
												{(recipe.verifiedBy.fullName || recipe.verifiedBy.username)
													.charAt(0)
													.toUpperCase()}
											</AvatarFallback>
										</Avatar>
										<div>
											<div className='font-medium'>
												{recipe.verifiedBy.fullName || recipe.verifiedBy.username}
											</div>
											<div className='text-sm text-muted-foreground'>Certified Nutritionist</div>
										</div>
									</div>
									<Button
										asChild
										variant='outline'
										size='sm'
										className='w-full'>
										<Link href={`/nutritionist-profile/${recipe.verifiedBy.id}`}>
											<User className='h-4 w-4 mr-2' />
											View Nutritionist Profile
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					)}

					{/* Revision Notes - Show when recipe needs revision */}
					{recipe.status === 'needs_revision' && recipe.healthTips && (
						<Card className='border-orange-200 bg-orange-50'>
							<CardHeader>
								<CardTitle className='flex items-center text-orange-800'>
									<AlertCircle className='h-5 w-5 mr-2' />
									Revision Notes from Nutritionist
								</CardTitle>
								<CardDescription className='text-orange-700'>
									Please review the feedback below and make the necessary changes before
									resubmitting.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className='p-4 bg-white rounded-lg border border-orange-200'>
									<p className='text-sm text-gray-800 whitespace-pre-wrap'>{recipe.healthTips}</p>
								</div>
							</CardContent>
						</Card>
					)}

					{/* Recipe Stats */}
					<Card>
						<CardHeader>
							<CardTitle>Recipe Stats</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='space-y-3'>
								<div className='flex justify-between'>
									<span className='text-muted-foreground'>Created</span>
									<span>{new Date(recipe.createdAt).toLocaleDateString()}</span>
								</div>
								<div className='flex justify-between'>
									<span className='text-muted-foreground'>Last Updated</span>
									<span>{new Date(recipe.updatedAt).toLocaleDateString()}</span>
								</div>
								{recipe.verifiedAt && (
									<div className='flex justify-between'>
										<span className='text-muted-foreground'>Verified</span>
										<span>{new Date(recipe.verifiedAt).toLocaleDateString()}</span>
									</div>
								)}
								<div className='flex justify-between'>
									<span className='text-muted-foreground'>Ingredients</span>
									<span>{recipe.ingredients?.length || 0}</span>
								</div>
								<div className='flex justify-between'>
									<span className='text-muted-foreground'>Steps</span>
									<span>{recipe.steps?.length || 0}</span>
								</div>
								<div className='flex justify-between'>
									<span className='text-muted-foreground'>Reviews</span>
									<span>{recipe.reviewCount}</span>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Quick Actions */}
					{!isNutritionist && (
						<Card>
							<CardHeader>
								<CardTitle>Quick Actions</CardTitle>
							</CardHeader>
							<CardContent className='space-y-3'>
								{canEdit && (
									<Button
										variant='outline'
										className='w-full justify-start'
										onClick={() => router.push(`/dashboard/recipes/edit/${recipe.id}`)}>
										<Edit className='h-4 w-4 mr-2' />
										Edit Recipe
									</Button>
								)}

								{/* Add to Meal Plan Dialog */}
								<Dialog
									open={showMealPlanDialog}
									onOpenChange={setShowMealPlanDialog}>
									<DialogTrigger asChild>
										<Button
											variant='outline'
											className='w-full justify-start'>
											<Calendar className='h-4 w-4 mr-2' />
											Add to Meal Plan
										</Button>
									</DialogTrigger>
									<DialogContent className='max-w-md'>
										<DialogHeader>
											<DialogTitle>Add to Meal Plan</DialogTitle>
										</DialogHeader>
										<div className='space-y-4'>
											<div className='space-y-2'>
												<Label htmlFor='meal-plan'>Select Meal Plan</Label>
												<Select
													value={selectedMealPlan}
													onValueChange={setSelectedMealPlan}>
													<SelectTrigger>
														<SelectValue placeholder='Choose a meal plan' />
													</SelectTrigger>
													<SelectContent>
														{mealPlans?.map((plan: any) => (
															<SelectItem
																key={plan.id}
																value={plan.id.toString()}>
																{plan.planName}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</div>

											<div className='space-y-2'>
												<Label htmlFor='date'>Date</Label>
												<input
													type='date'
													id='date'
													value={selectedDate}
													onChange={e => setSelectedDate(e.target.value)}
													className='w-full px-3 py-2 border border-input rounded-md bg-background text-sm'
												/>
											</div>

											<div className='space-y-2'>
												<Label htmlFor='meal-type'>Meal Type</Label>
												<Select
													value={selectedMealType}
													onValueChange={value => setSelectedMealType(value as MealType)}>
													<SelectTrigger>
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value={MealType.Breakfast}>Breakfast</SelectItem>
														<SelectItem value={MealType.Lunch}>Lunch</SelectItem>
														<SelectItem value={MealType.Dinner}>Dinner</SelectItem>
														<SelectItem value={MealType.Snack}>Snack</SelectItem>
													</SelectContent>
												</Select>
											</div>

											<div className='space-y-2'>
												<Label htmlFor='servings'>Servings to Prepare</Label>
												<Select
													value={servingsToPrepare.toString()}
													onValueChange={value => setServingsToPrepare(parseInt(value))}>
													<SelectTrigger>
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														{[1, 2, 3, 4, 5, 6, 8, 10].map(serving => (
															<SelectItem
																key={serving}
																value={serving.toString()}>
																{serving} {serving === 1 ? 'serving' : 'servings'}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</div>

											<div className='flex justify-end gap-2'>
												<Button
													variant='outline'
													onClick={() => setShowMealPlanDialog(false)}>
													Cancel
												</Button>
												<Button
													onClick={handleAddToMealPlan}
													disabled={
														addMealPlanEntry.isPending || !selectedMealPlan || !selectedDate
													}>
													{addMealPlanEntry.isPending ? 'Adding...' : 'Add to Meal Plan'}
												</Button>
											</div>
										</div>
									</DialogContent>
								</Dialog>

								{/* Add to Collection Dialog */}
								<Dialog
									open={showCollectionDialog}
									onOpenChange={setShowCollectionDialog}>
									<DialogTrigger asChild>
										<Button
											variant='outline'
											className='w-full justify-start'>
											<BookOpen className='h-4 w-4 mr-2' />
											Add to Collection
										</Button>
									</DialogTrigger>
									<DialogContent className='max-w-md'>
										<DialogHeader>
											<DialogTitle>Add to Collection</DialogTitle>
										</DialogHeader>
										<div className='space-y-4'>
											<div className='space-y-2'>
												<Label htmlFor='collection'>Select Collection</Label>
												<Select
													value={selectedCollection}
													onValueChange={setSelectedCollection}>
													<SelectTrigger>
														<SelectValue placeholder='Choose a collection' />
													</SelectTrigger>
													<SelectContent>
														{collections?.map(collection => (
															<SelectItem
																key={collection.id}
																value={collection.id.toString()}>
																{collection.collectionName}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</div>

											<div className='flex justify-end gap-2'>
												<Button
													variant='outline'
													onClick={() => setShowCollectionDialog(false)}>
													Cancel
												</Button>
												<Button
													onClick={handleAddToCollection}
													disabled={addToCollection.isPending || !selectedCollection}>
													{addToCollection.isPending ? 'Adding...' : 'Add to Collection'}
												</Button>
											</div>
										</div>
									</DialogContent>
								</Dialog>
							</CardContent>
						</Card>
					)}
				</div>
			</div>
		</div>
	);
}
