export interface IRecipe {
        image?: string;
        rating: number;
        ratingAmount: number;
        name: string;
        description?: string;
}

export class Recipe implements IRecipe {
    image?: string;
    rating: number;
    ratingAmount: number;
    name: string;
    description?: string;

    constructor(recipe: IRecipe) {
        this.image = recipe.image;
        this.rating = recipe.rating;
        this.ratingAmount = recipe.ratingAmount;
        this.name = recipe.name;
        this.description = recipe.description;
    }
}