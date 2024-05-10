import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {Recipe} from "../../Interfaces/Recipe";
import {getRecipe} from "../../mockApi/MockApi";
import styles from './RecipeDetail.module.scss';
import Container from "../../components/Container/Container";


function RecipeDetail() {
    const recipeId = useParams().id;

    const [recipe, setRecipe] = useState<Recipe>();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                if (!recipeId) return;
                //const response = await fetch(`http://localhost:3001/recipes/${recipeId}`);
                //const data = await response.json();
                const data = await getRecipe(parseInt(recipeId));
                setRecipe(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchRecipe();
    })


    return (
        <div className={styles.RecipeDetail}>
            {recipe ? (
                <div>
                    <div className={styles.IntroContainers}>
                        <Container>
                            <h1>{recipe.name}</h1>
                            <p>{recipe.description}</p>
                            <h2>Cook Time</h2>
                            <p>{recipe.cook_time} minutes</p>
                        </Container>
                        <Container>
                            <h2>Ingredients</h2>
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => {
                                    return <li key={index}>{ingredient}</li>
                                })}
                            </ul>
                        </Container>
                    </div>
                    <Container>
                        <h2>Steps:</h2>
                        <ol>
                            {recipe.steps.map((step, index) => {
                                return <li key={index}>{step}</li>
                            })}
                        </ol>
                    </Container>
                    <Link to={"edit"}>Edit recipe</Link>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>

    );
}

export default RecipeDetail;