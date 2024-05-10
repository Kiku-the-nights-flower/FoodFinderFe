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
        console.log("fetching data")
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
    },[])

    const handleChange = (value: any, key: string) => {
        const newRecipe = {...recipe, [key]: value};
        setRecipe(newRecipe)
    }

    useEffect(() => {
        console.log(recipe);
    }, [recipe]);

    return (
        <div className={styles.RecipeEdit}>
            <Container>
                <div className={styles.recipeFieldContainer}>
                    <h2>Recipe name:</h2>
                    <input value={recipe.name} onChange={e=> handleChange(e.target.value, "name")} type={"text"}/>
                    <h2>Recipe cuisine</h2>
                    <select onChange={(e) => handleChange(e.target.value, "cuisine_type")}>
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
                    <textarea key={recipe.id} value={recipe.description} cols={30} rows={10} draggable={"false"}></textarea>
                </div>
                <div className={styles.recipeFieldContainer}>
                    <h2>Ingredients</h2>
                    <ListCreator key={recipe.id} dtoIn={recipe.ingredients} elementUpdatedFn={e=> handleChange(e, "ingredients")}/>
                </div>
                <div className={styles.recipeFieldContainer}>
                    <h2>Steps</h2>
                    <ListCreator key={recipe.id} dtoIn={recipe.steps} elementUpdatedFn={e=> handleChange(e, "steps")}/>
                </div>
                <div className={styles.recipeFieldContainer}>
                    <h2>Cook time</h2>
                    <input value={recipe.cook_time} onChange={e=> handleChange(e.target.value, "cook_time")} type={"number"}/>
                </div>


                <button onClick={() => console.log(recipe)}>Log button</button>
            </Container>
        </div>
    )
}

export default RecipeEdit;