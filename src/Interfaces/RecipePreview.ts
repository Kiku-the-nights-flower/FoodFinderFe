export interface IRecipePreview {
    recipeId: number;

    image?: string;
    rating: number;
    ratingAmount: number;
    name: string;
    description?: string;
}

export class RecipePreview implements IRecipePreview {
    recipeId: number;
    image?: string;
    rating: number;
    ratingAmount: number;
    name: string;
    description?: string;

    constructor(recipe: IRecipePreview) {
        this.recipeId = recipe.recipeId;
        this.image = recipe.image;
        this.rating = recipe.rating;
        this.ratingAmount = recipe.ratingAmount;
        this.name = recipe.name;
        this.description = recipe.description;
    }
}