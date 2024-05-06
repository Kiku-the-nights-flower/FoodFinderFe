export interface IRecipe {
    id: number;
    name: string;
    ownerId: number;
    ingredients: string[];
    steps: string[];
    description: string;
    cook_time: number;
    cuisine_type: string;
}

export class Recipe implements IRecipe {
    id: number;
    name: string;
    ownerId: number;
    ingredients: string[];
    steps: string[];
    description: string;
    cook_time: number;
    cuisine_type: string;

    constructor(recipe: IRecipe) {
        this.id = recipe.id;
        this.name = recipe.name;
        this.ownerId = recipe.ownerId;
        this.ingredients = recipe.ingredients;
        this.steps = recipe.steps;
        this.description = recipe.description;
        this.cook_time = recipe.cook_time;
        this.cuisine_type = recipe.cuisine_type;
    }
}