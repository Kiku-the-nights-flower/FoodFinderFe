import React, {useContext, useEffect, useState} from "react";
import {getRecipe} from "../../mockApi/MockApi";
import {Recipe} from "../../Interfaces/Recipe";
import {useParams} from "react-router-dom";
import styles from './RecipeEdit.module.scss';
import Container from "../../components/Container/Container";
import ListCreator from "../../components/ListCreator/ListCreator";
import {CurrentUserContext} from "../../providers/CurrentUserContext";

function RecipeEdit() {
    const recipeId = useParams().id;
    const userContext = useContext(CurrentUserContext);
    const [recipe, setRecipe] = useState<Recipe>({
        id: -1,
        name: "",
        ownerId: userContext.user.id,
        ingredients: [],
        steps: [],
        description: "",
        cook_time: 0,
        cuisine_type: ""
    });

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

    const ingredientsChanged = (ingredients: string[]) => {
        setRecipe({...recipe, ingredients: ingredients})
    }

    return (
        <div className={styles.RecipeEdit}>
            <Container>
                <div className={styles.recipeFieldContainer}>
                    <h2>Recipe name:</h2>
                    <input type={"text"}/>
                    <h2>Recipe cuisine</h2>
                    <select>
                        <option value={"American"}>American</option>
                        <option value={"Chinese"}>Chinese</option>
                        <option value={"French"}>French</option>
                        <option value={"Indian"}>Indian</option>
                        <option value={"Italian"}>Italian</option>
                        <option value={"Japanese"}>Japanese</option>
                        <option value={"Mexican"}>Mexican</option>
                        <option value={"Thai"}>Thai</option>
                    </select>
                </div>
                <div className={styles.recipeFieldContainer}>
                    <h2>Description:</h2>
                    <input type={"text"}/>
                </div>
                <div className={styles.recipeFieldContainer}>
                    <h2>Ingredients</h2>
                    <ListCreator key={recipe.id} dtoIn={recipe.ingredients} elementUpdatedFn={ingredientsChanged}/>
                </div>
                <div className={styles.recipeFieldContainer}>
                    <h2>Recipe name:</h2>
                    <input type={"text"}/>
                </div>
                <button onClick={() => console.log(recipe)}>Log button</button>
            </Container>
        </div>
    )
}

export default RecipeEdit;