import React from 'react';
import styles from './Container.module.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import RecipeTile from "../RecipeTile/RecipeTile";
import RatingDisplay from "../RatingDisplay/RatingDisplay";
import {Recipe} from "../../Interfaces/Recipe";
import RecipeIndex from "../../sites/RecipeIndex/RecipeIndex";

interface ContainerProps {
}

export function Container(props: ContainerProps) {
    const temp: Recipe = {
        image: "https://placehold.co/600x400",
        rating: 4,
        ratingAmount: 10,
        name: "Recipe Name",
        description: "Recipe Description"
    }


    return (
        <div className={styles.Container}>
            <div className={styles.Header}>

            </div>
            <Router>
                <Routes>
                    <Route path={"/"} Component={RecipeIndex}>Home</Route>
                    <Route path={"/"}>Home</Route>
                </Routes>
            </Router>
        </div>
    )
}