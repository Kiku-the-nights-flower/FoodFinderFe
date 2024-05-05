import React from 'react';
import styles from './RatingDisplay.module.scss';

interface RatingDisplayProps {
    starAverage: number;
}
//credit: https://blog.petefowler.dev/how-to-make-a-star-rating-display-in-react-thats-better-than-the-one-on-yelpcom
export default function RatingDisplay(props: RatingDisplayProps) {
    const fullStars = Math.floor(props.starAverage);
    const starArr = [];
    for(let i = 1; i <= fullStars; i++) {
        starArr.push(1);
    }

    if(props.starAverage < 5) {
        const partialStar = props.starAverage - fullStars;
        starArr.push(partialStar);
        const emptyStars = 5 - starArr.length;
        for(let i=1; i<=emptyStars; i++) {
            starArr.push(0);
        }
    }
    return (
        <div className={styles.RatingDisplay}>
            {starArr.map((val, i) => {
            return <div key={i}
            style={{background: `linear-gradient(90deg, #ff643d 
    ${val * 100}%, #bbbac0 ${val * 100}%)`}}>★</div>
})}
        </div>
    )
}
