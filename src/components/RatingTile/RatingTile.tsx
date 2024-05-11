import React from 'react';
import styles from './RatingTile.module.scss';
import {IRating} from "../../Interfaces/Rating";
import RatingDisplay from "../RatingDisplay/RatingDisplay";

interface RatingTileProps {
    rating: IRating;
}

function RatingTile(props: RatingTileProps) {
    return (
        <div className={styles.RatingTile}>
            <h3 className={styles.ratingValue}>{props.rating.user.username}</h3>
            <p className={styles.ratingValue}>{props.rating.comment}</p>
            <div className={styles.ratingValueContainer + " " + styles.ratingValue}>
                <RatingDisplay starAverage={props.rating.rating}/>
                <div className={styles.ratingStarsValue}>{props.rating.rating}</div>
            </div>
        </div>
    )
}

export default RatingTile;