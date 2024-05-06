import React, {useEffect, useState} from 'react';
import styles from './RecipeIndex.module.scss';
import RecipeTile from "../../components/RecipeTile/RecipeTile";
import {getRecipePreviews} from "../../mockApi/MockApi";
import {RecipePreview} from "../../Interfaces/RecipePreview";

function RecipeIndex() {
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState<RecipePreview[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                //const response = await fetch('http://localhost:3001/recipes');
                //const data = await response.json();
                const data = await getRecipePreviews();
                setRecipes(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchRecipes();
    }, []);


    return (
        <div className={styles.RecipeIndex}>
            <div className={styles.searchContainer}>
                <input className={styles.searchBar} type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button className={styles.searchButton}>Search</button>
            </div>
            <div className={styles.recipeGrid}>
                {loading ? <div>Loading...</div> : recipes.map((recipe: any) => {
                    return (
                        <RecipeTile recipe={recipe}></RecipeTile>
                    )
                })}
            </div>
        </div>
    );


}

export default RecipeIndex;