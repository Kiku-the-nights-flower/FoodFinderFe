export interface IRecipePreview {
        image?: string;
        rating: number;
        ratingAmount: number;
        name: string;
        description?: string;
}

export class RecipePreview implements IRecipePreview {
    image?: string;
    rating: number;
    ratingAmount: number;
    name: string;
    description?: string;

    constructor(recipe: IRecipePreview) {
        this.image = recipe.image;
        this.rating = recipe.rating;
        this.ratingAmount = recipe.ratingAmount;
        this.name = recipe.name;
        this.description = recipe.description;
    }
}