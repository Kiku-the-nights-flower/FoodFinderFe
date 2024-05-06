import {RecipePreview} from "../Interfaces/RecipePreview";
import {Recipe} from "../Interfaces/Recipe";

const recipesPreviews: RecipePreview[] = [
    {
    name: "Lamb Rack Frenched Australian",
    rating: 5,
    ratingAmount: 77,
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    image: "http://dummyimage.com/105x128.png/ff4444/ffffff"
},
    {
        name: "Salmon Steak - Cohoe 6 Oz",
        rating: 5,
        ratingAmount: 25,
        description: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        image: "http://dummyimage.com/144x390.png/dddddd/000000"
    },
    {
        name: "Squid - Tubes / Tenticles 10/20",
        rating: 5,
        ratingAmount: 39,
        description: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        image: "http://dummyimage.com/186x483.png/dddddd/000000"
    },
    {
        name: "Cookies Almond Hazelnut",
        rating: 1,
        ratingAmount: 21,
        description: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        image: "http://dummyimage.com/158x287.png/dddddd/000000"
    },
    {
        name: "Island Oasis - Peach Daiquiri",
        rating: 3,
        ratingAmount: 87,
        description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        image: "http://dummyimage.com/221x281.png/cc0000/ffffff"
    },
    {
        name: "Scallops 60/80 Iqf",
        rating: 2,
        ratingAmount: 0,
        description: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        image: "http://dummyimage.com/106x118.png/dddddd/000000"
    },
    {
        name: "Cheese - Grana Padano",
        rating: 0,
        ratingAmount: 54,
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        image: "http://dummyimage.com/148x447.png/ff4444/ffffff"
    },
    {
        name: "Carroway Seed",
        rating: 4,
        ratingAmount: 22,
        description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        image: "http://dummyimage.com/147x336.png/5fa2dd/ffffff"
    },
    {
        name: "Red Snapper - Fillet, Skin On",
        rating: 4,
        ratingAmount: 79,
        description: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        image: "http://dummyimage.com/112x279.png/ff4444/ffffff"
    },
    {
        name: "Wine - Black Tower Qr",
        rating: 3,
        ratingAmount: 46,
        description: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        image: "http://dummyimage.com/244x290.png/cc0000/ffffff"
    },
    {
        name: "Bread - Mini Hamburger Bun",
        rating: 5,
        ratingAmount: 5,
        description: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        image: "http://dummyimage.com/238x330.png/5fa2dd/ffffff"
    },
    {
        name: "Chocolate - White",
        rating: 5,
        ratingAmount: 11,
        description: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        image: "http://dummyimage.com/207x183.png/dddddd/000000"
    },
    {
        name: "Cheese Cheddar Processed",
        rating: 4,
        ratingAmount: 41,
        description: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        image: "http://dummyimage.com/140x341.png/cc0000/ffffff"
    },
    {
        name: "Tea - Herbal I Love Lemon",
        rating: 5,
        ratingAmount: 88,
        description: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        image: "http://dummyimage.com/149x330.png/ff4444/ffffff"
    },
    {
        name: "Sprite, Diet - 355ml",
        rating: 2,
        ratingAmount: 40,
        description: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        image: "http://dummyimage.com/239x128.png/cc0000/ffffff"
    },
    {
        name: "Beef - Tenderlion, Center Cut",
        rating: 5,
        ratingAmount: 45,
        description: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        image: "http://dummyimage.com/223x456.png/cc0000/ffffff"
    },
    {
        name: "Cilantro / Coriander - Fresh",
        rating: 1,
        ratingAmount: 67,
        description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        image: "http://dummyimage.com/138x494.png/5fa2dd/ffffff"
    },
    {
        name: "Bread - Rye",
        rating: 2,
        ratingAmount: 73,
        description: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        image: "http://dummyimage.com/215x106.png/5fa2dd/ffffff"
    },
    {
        name: "Jam - Apricot",
        rating: 5,
        ratingAmount: 97,
        description: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        image: "http://dummyimage.com/236x489.png/cc0000/ffffff"
    },
    {
        name: "Tomatoes - Vine Ripe, Red",
        rating: 1,
        ratingAmount: 54,
        description: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        image: "http://dummyimage.com/104x267.png/ff4444/ffffff"
    }]

const recipes: Recipe[] = [
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
        cuisine_type: "Italian"
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
        cuisine_type: "French"
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
        cuisine_type: "Chinese"
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
        cuisine_type: "Chinese"
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
        cuisine_type: "Mexican"
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
        cuisine_type: "Thai"
    },

]

export function getRecipePreviews() {
    return new Promise<RecipePreview[]>((resolve, reject) => {
        resolve(recipesPreviews);
    });
}

export function getRecipes() {
    return new Promise<Recipe[]>((resolve, reject) => {
        resolve(recipes);
    });
}

export function getRecipe(id: number) {
    return new Promise<Recipe>((resolve, reject) => {
        const recipe = recipes.find((recipe) => recipe.id === id);
        if (recipe) {
            resolve(recipe);
        } else {
            reject("Recipe not found");
        }
    });
}

export function createRecipe(recipe: Recipe) {
    return new Promise<Recipe>((resolve, reject) => {
        recipes.push(recipe);
        resolve(recipe);
    });
}

export function updateRecipe(recipe: Recipe) {
    return new Promise<Recipe>((resolve, reject) => {
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
    return new Promise<Recipe[]>((resolve, reject) => {
        const results = recipes.filter((recipe) => {
           //check if the query is empty, if it is return all recipes
            if(query === "") return true;
            //check if the query is contained either in the name, cuisine type or the ingredients
            return recipe.name.toLowerCase().includes(query.toLowerCase()) ||
                recipe.cuisine_type.toLowerCase().includes(query.toLowerCase()) ||
                recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query.toLowerCase()));
        } );
        resolve(results);
    });
}