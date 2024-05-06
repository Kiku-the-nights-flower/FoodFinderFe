import React from 'react';
import Image from "./Image";
import styles from './RecipeTile.module.scss';
import RatingDisplay from "../RatingDisplay/RatingDisplay";
import {IRecipePreview} from "../../Interfaces/RecipePreview";

export interface RecipeTileProps {
    recipe: IRecipePreview;
}

function RecipeTile(props: RecipeTileProps) {
    return (
        /*a tile component having an image, rating under the image, with heading to the right and description under the heading*/
        <div className={styles.RecipeTile}>
            <div className={styles.eyecandy}>
                <Image src="https://placehold.co/600x400" alt="Recipe Image"/>
                <div className={styles.ratings}>
                    <div>
                        <RatingDisplay starAverage={props.recipe.rating}></RatingDisplay>
                    </div>
                    <div>{props.recipe.ratingAmount}</div>
                </div>
            </div>
            <div className={styles.info}>
                <h3>{props.recipe.name}</h3>
                <p>{props.recipe.description}</p>
            </div>
        </div>
    );

}

export default RecipeTile;