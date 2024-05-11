import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {IRecipe} from "../../Interfaces/Recipe";
import {getRecipe} from "../../mockApi/MockApi";
import styles from './RecipeDetail.module.scss';
import Container from "../../components/Container/Container";
import {CurrentUserContext} from "../../providers/CurrentUserContext";


function RecipeDetail() {
    const recipeId = useParams().id;
    const usercontext = useContext(CurrentUserContext).user;
    const [recipe, setRecipe] = useState<IRecipe>();

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
                    {recipe.ownerId === usercontext.id ? (<Link className={styles.editButton} to={"edit"}>Edit recipe</Link> ) : null}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>

    );
}

export default RecipeDetail;