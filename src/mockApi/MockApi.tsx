import {RecipePreview} from "../Interfaces/RecipePreview";
import {IRecipe, Recipe} from "../Interfaces/Recipe";
import {IUser} from "../Interfaces/User";

const previewFactory = (recipe: IRecipe): RecipePreview => {
    return {
        recipeId: recipe.id,
        image: recipe.image,
        name: recipe.name,
        description: recipe.description,
        rating: recipe.rating,
        ratingAmount: recipe.ratings.length
    }
}

const recipes: IRecipe[] = [
    {
        id: 1,
        name: "Classic Spaghetti Carbonara",
        ownerId: 1,
        description: "This classic spaghetti carbonara recipe is a delicious meal that can be made in under 30 minutes. It's the perfect weeknight dinner!",
        ingredients: ["8 oz spaghetti", "4 slices bacon", "2 large eggs", "1 cup grated Parmesan cheese", "1/2 tsp black pepper", "Salt", "Chopped parsley"],
        steps: [
            "Boil water in a large pot and cook spaghetti according to package instructions until al dente.",
            "Meanwhile, fry chopped bacon in a skillet over medium heat until crispy.",
            "In a bowl, whisk together eggs, grated Parmesan cheese, and black pepper.",
            "Reserve some pasta water, then drain cooked spaghetti and return it to the pot.",
            "Immediately add the hot spaghetti to the bacon in the skillet, tossing to coat.",
            "Remove skillet from heat and quickly stir in the egg mixture, adding reserved pasta water as needed to create a creamy sauce.",
            "Season with salt and additional pepper to taste.",
            "Serve hot, garnished with extra grated Parmesan cheese and chopped parsley."
        ],
        cook_time: 189,
        cuisine_type: "Italian",
        rating: 4.5,
        ratings: [
            {
                id: 1,
                user: {
                    id: 2,
                    username: "Bob"
                }, rating: 5, comment: "Delicious and easy to make!"
            },
            {
                id: 2,
                user: {
                    id: 3,
                    username: "Charlie"
                }, rating: 4, comment: "Great recipe, will make again."
            },
            {
                id: 3,
                user: {
                    id: 4,
                    username: "David"
                }, rating: 4, comment: "Best carbonara I've ever had!"
            }
        ]
    },
    {
        id: 2,
        name: "Homemade Margherita Pizza",
        ownerId: 1,
        description: "This homemade Margherita pizza recipe is a classic Italian dish that is simple to make and bursting with flavor. The combination of fresh mozzarella, tomatoes, and basil creates a delicious and satisfying meal.",
        ingredients: ["1 lb pizza dough", "1/2 cup tomato sauce", "8 oz fresh mozzarella cheese", "1 large tomato", "2 tbsp olive oil", "1/2 tsp salt", "1 tsp dried oregano"],
        steps: [
            "Preheat oven to 475°F (245°C) and place a pizza stone inside to heat up.",
            "Roll out pizza dough on a lightly floured surface to desired thickness.",
            "Transfer the dough to a pizza peel or parchment paper.",
            "Spread a thin layer of tomato sauce over the dough, leaving a small border for the crust.",
            "Arrange slices of fresh mozzarella cheese and tomato evenly over the sauce.",
            "Drizzle olive oil over the pizza and sprinkle with salt and dried oregano.",
            "Carefully slide the pizza onto the hot pizza stone in the oven.",
            "Bake for 10-12 minutes or until the crust is golden and the cheese is bubbly and slightly browned.",
            "Remove from oven, let cool for a few minutes, then slice and serve hot."
        ],
        cook_time: 58,
        cuisine_type: "French",
        rating: 4.7,
        ratings: [
            {
                id: 3,
                user: {
                    id: 2,
                    username: "Bob"
                }, rating: 5, comment: "This was delicious!"
            },
            {
                id: 4,
                user: {
                    id: 3,
                    username: "Charlie"
                }, rating: 5, comment: "Best pizza I've ever had."
            },
            {
                id: 5,
                user: {
                    id: 4,
                    username: "David"
                }, rating: 4, comment: "Great recipe, will make again."
            }
        ]
    },
    {
        id: 3,
        name: "Chicken Stir-Fry with Vegetables",
        ownerId: 3,
        description: "This chicken stir-fry with vegetables is a quick and easy meal that is perfect for busy weeknights. The combination of tender chicken, crisp vegetables, and a savory sauce makes for a delicious and satisfying dish that the whole family will love.",
        ingredients: ["1 lb boneless, skinless chicken breast", "2 tbsp soy sauce", "2 cloves garlic", "2 tbsp vegetable oil", "2 bell peppers", "1 cup broccoli florets", "1 cup snap peas", "1/4 cup soy sauce", "2 tbsp oyster sauce", "1 tsp sugar"],
        steps: [
            "Slice boneless, skinless chicken breast into thin strips and marinate in soy sauce and minced garlic for 15 minutes.",
            "Heat vegetable oil in a wok or large skillet over high heat.",
            "Add sliced chicken to the hot oil and stir-fry until cooked through, about 5 minutes.",
            "Remove chicken from the wok and set aside.",
            "Add chopped vegetables (like bell peppers, broccoli, and snap peas) to the wok and stir-fry until crisp-tender.",
            "Return cooked chicken to the wok and toss with the vegetables.",
            "In a small bowl, mix together soy sauce, oyster sauce, and a pinch of sugar.",
            "Pour sauce over the chicken and vegetables, stirring to coat evenly.",
            "Cook for an additional 2-3 minutes until heated through.",
            "Serve hot over steamed rice or noodles."
        ],
        cook_time: 211,
        cuisine_type: "Chinese",
        rating: 3.7,
        ratings: [
            {
                id: 6,
                user: {
                    id: 1,
                    username: "Alice"
                }, rating: 3, comment: "Not bad, but could use more flavor."
            },
            {
                id: 7,
                user: {
                    id: 2,
                    username: "Bob"
                }, rating: 4, comment: "Great recipe, will make again."
            },
            {
                id: 8,
                user: {
                    id: 4,
                    username: "David"
                }, rating: 3, comment: "I've had better stir-fry."
            }
        ]
    },
    {
        id: 4,
        name: "Creamy Mushroom Risotto",
        ownerId: 2,
        description: "This creamy mushroom risotto recipe is a rich and flavorful dish that is perfect for a special occasion or a cozy night in. The combination of Arborio rice, white wine, mushrooms, and Parmesan cheese creates a luxurious and satisfying meal that will impress your guests.",
        ingredients: ["4 cups chicken or vegetable broth", "2 tbsp butter", "1 onion", "2 cloves garlic", "1 1/2 cups Arborio rice", "1/2 cup white wine", "8 oz mushrooms", "1/2 cup grated Parmesan cheese", "2 tbsp chopped fresh parsley", "Salt and pepper"],
        steps: [
            "Heat chicken or vegetable broth in a saucepan over low heat, keeping it warm.",
            "In a separate large skillet, melt butter over medium heat.",
            "Add chopped onion and minced garlic to the skillet, sautéing until softened.",
            "Add Arborio rice to the skillet, stirring to coat in the butter, for about 2 minutes.",
            "Pour in white wine and cook until absorbed, stirring constantly.",
            "Add sliced mushrooms to the skillet and cook until they release their liquid and begin to brown.",
            "Start adding warm broth to the skillet, 1/2 cup at a time, stirring constantly and waiting until each addition is absorbed before adding more.",
            "Continue this process until the rice is creamy and cooked to al dente, about 20-25 minutes.",
            "Stir in grated Parmesan cheese and chopped fresh parsley.",
            "Season with salt and pepper to taste, then serve hot."
        ],
        cook_time: 89,
        cuisine_type: "Italian",
        rating: 4.2,
        ratings: [
            {
                id: 9,
                user: {
                    id: 1,
                    username: "Alice"
                }, rating: 4, comment: "Delicious and creamy!"
            },
            {
                id: 10,
                user: {
                    id: 3,
                    username: "Charlie"

                }, rating: 4, comment: "Great recipe, will make again."
            },
            {
                id: 11,
                user: {
                    id: 4,
                    username: "David"

                }, rating: 5, comment: "Best risotto I've ever had!"
            }
        ]
    },
    {
        id: 5,
        name: "Beef Tacos with Salsa Verde",
        ownerId: 3,
        description: "These beef tacos with salsa verde are a delicious and satisfying meal that is perfect for a casual dinner or a festive gathering. The combination of seasoned ground beef, tangy salsa verde, and fresh toppings creates a flavorful and satisfying dish that the whole family will love.",
        ingredients: ["1 lb ground beef", "1 packet taco seasoning", "1/2 cup water", "1 cup salsa verde", "8 small flour tortillas", "1 cup shredded cheese", "1 cup shredded lettuce", "1/2 cup diced tomatoes", "1/4 cup chopped cilantro", "1/4 cup sour cream"],
        steps: [
            "In a large skillet, cook ground beef over medium heat until browned and crumbled.",
            "Drain excess fat, then add taco seasoning and water to the skillet.",
            "Simmer beef mixture for 5-7 minutes until thickened.",
            "Warm flour tortillas in a dry skillet or microwave.",
            "Assemble tacos by spooning beef mixture onto tortillas, then topping with salsa verde, shredded cheese, lettuce, tomatoes, cilantro, and sour cream.",
            "Serve hot with additional toppings like guacamole, hot sauce, or lime wedges."
        ],
        cook_time: 45,
        cuisine_type: "Mexican",
        rating: 4.8,
        ratings: [
            {
                id: 12,
                user: {
                    id: 1,
                    username: "Alice"
                }, rating: 5, comment: "So delicious and easy to make!"
            },
            {
                id: 13,
                user: {
                    id: 2,
                    username: "Bob"

                }, rating: 5, comment: "Best tacos I've ever had."
            },
            {
                id: 14,
                user: {
                    id: 4,
                    username: "David"
                }, rating: 4, comment: "Great recipe, will make again."
            }
        ]
    },
    {
        id: 6,
        name: "Vegetarian Pad Thai",
        ownerId: 2,
        description: "This vegetarian pad Thai recipe is a delicious and satisfying meal that is perfect for a meatless dinner. The combination of rice noodles, tofu, vegetables, and a tangy sauce creates a flavorful and satisfying dish that the whole family will love.",
        ingredients: ["8 oz rice noodles", "1/4 cup soy sauce", "2 tbsp brown sugar", "1 tbsp rice vinegar", "1 tbsp lime juice", "1 tbsp fish sauce", "1/2 tsp red pepper flakes", "2 tbsp vegetable oil", "1 block firm tofu", "2 cloves garlic", "2 eggs", "1 cup bean sprouts", "1/4 cup chopped peanuts", "2 green onions", "1/4 cup chopped cilantro"],
        steps: [
            "Cook rice noodles according to package instructions, then rinse under cold water and set aside.",
            " In a small bowl, whisk together soy sauce, brown sugar, rice vinegar, lime juice, fish sauce, and red pepper flakes.",
            "In a large skillet or wok, heat vegetable oil over medium-high heat.",
            "Add cubed tofu to the skillet and cook until golden brown on all sides.",
            "Add minced garlic to the skillet and cook until fragrant.",
            "Push tofu and garlic to one side of the skillet, then crack eggs into the other side and scramble until cooked through.",
            "Add cooked rice noodles and sauce to the skillet, tossing to coat everything evenly.",
            "Add bean sprouts and chopped peanuts to the skillet, tossing to combine.",
            "Serve hot, garnished with sliced green onions and chopped cilantro."
        ],
        cook_time: 33,
        cuisine_type: "Thai",
        rating: 4.1,
        ratings: [
            {
                id: 15,
                user: {
                    id: 1,
                    username: "Alice"
                }, rating: 4, comment: "Delicious and easy to make!"
            },
            {
                id: 16,
                user: {
                    id: 4,
                    username: "David"
                }, rating: 3, comment: "Not bad, but could use more flavor."
            },
            {
                id: 17,
                user: {
                    id: 3,
                    username: "Charlie"
                }, rating: 4, comment: "Great recipe, will make again."
            }
        ]
    }
]

const users: IUser[] = [
    {id: -1, username: "Guest"},
    {id: 1, username: "Alice"},
    {id: 2, username: "Bob"},
    {id: 3, username: "Charlie"},
    {id: 4, username: "David"}
]

export function getRecipePreviews() {
    return new Promise<RecipePreview[]>((resolve) => {
        const recipesPreviews = recipes.map(previewFactory);
        resolve(recipesPreviews);
    });
}

export function getRecipes() {
    return new Promise<IRecipe[]>((resolve) => {
        resolve(recipes);
    });
}

export function getRecipe(id: number) {
    return new Promise<IRecipe>((resolve, reject) => {
        const recipe = recipes.find((recipe) => recipe.id === id);
        if (recipe) {
            resolve(recipe);
        } else {
            reject("Recipe not found");
        }
    });
}

export function createRecipe(recipe: Recipe) {
    return new Promise<Recipe>((resolve) => {
        recipes.push(recipe);
        resolve(recipe);
    });
}

export function updateRecipe(recipe: IRecipe) {
    return new Promise<IRecipe>((resolve, reject) => {
        const index = recipes.findIndex((r) => r.id === recipe.id);
        if (index !== -1) {
            recipes[index] = recipe;
            resolve(recipe);
        } else {
            reject("Recipe not found");
        }
    });
}

export function deleteRecipe(id: number) {
    return new Promise<void>((resolve, reject) => {
        const index = recipes.findIndex((recipe) => recipe.id === id);
        if (index !== -1) {
            recipes.splice(index, 1);
            resolve();
        } else {
            reject("Recipe not found");
        }
    });
}

//very computer intensive function for searching, will lower the requirements if it becomes too much
export function searchRecipes(query: string) {
    return new Promise<IRecipe[]>((resolve) => {
        const results = recipes.filter((recipe) => {
            //check if the query is empty, if it is return all recipes
            if (query === "") return true;
            //check if the query is contained either in the name, cuisine type or the ingredients
            return recipe.name.toLowerCase().includes(query.toLowerCase()) ||
                recipe.cuisine_type.toLowerCase().includes(query.toLowerCase()) ||
                recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query.toLowerCase()));
        });
        resolve(results);
    });
}

export async function searchRecipePreviews(query: string) {
    const recipes = await searchRecipes(query);
    const ids = recipes.map((recipe) => recipe.id);
    return recipes.map(previewFactory).filter((recipe) => ids.includes(recipe.recipeId));
}

export function getUser(id: number) {
    return new Promise<IUser>((resolve, reject) => {
        const user = users.find((user) => user.id === id);
        if (user) {
            resolve(user);
        } else {
            reject("User not found");
        }
    });
}

export function getUsers() {
    return new Promise<IUser[]>(resolve => {
        resolve(users);
    });
}