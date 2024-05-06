import React, {useEffect, useState} from 'react';
import styles from './RecipeIndex.module.scss';
import RecipeTile from "../../components/RecipeTile/RecipeTile";
import {getRecipePreviews, searchRecipePreviews} from "../../mockApi/MockApi";
import {RecipePreview} from "../../Interfaces/RecipePreview";
import {Link} from "react-router-dom";

function RecipeIndex() {
    const [searchQuery, setSearchQuery] = useState('');
    const [tiles, setTiles] = useState<RecipePreview[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                //const response = await fetch('http://localhost:3001/recipes');
                //const data = await response.json();
                const data = await getRecipePreviews();
                setTiles(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchRecipes();
    }, []);

    const handleSearch = async (e: any) => {
        setSearchQuery(e)
        try {
            //const response = await fetch(`http://localhost:3001/recipes?name=${searchQuery}`);
            //const data = await response.json();
            const data = await searchRecipePreviews(searchQuery);
            setTiles(data);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className={styles.RecipeIndex}>
            <div className={styles.searchContainer}>
                <input className={styles.searchBar} type="text" placeholder="Search..." value={searchQuery} onChange={(e) => handleSearch(e.target.value)}/>
                <button className={styles.searchButton}>Search</button>
            </div>
            <div className={styles.recipeGrid}>
                {loading ? <div>Loading...</div> : tiles.map((tile: any) => {
                    return (
                        <Link to={`/recipes/${tile.recipeId}`} key={tile.id} className={styles.recipeTile}>
                            <RecipeTile recipe={tile}></RecipeTile>
                        </Link>
                    )
                })}
            </div>
        </div>
    );


}

export default RecipeIndex;