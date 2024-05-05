import React from 'react';
import styles from './Image.module.scss';
export interface ImageProps {
    src: string;
    alt?: string;
}

function Image(props : ImageProps) {
    return (
        <img className={styles.Image} src={props.src} alt={props.alt}/>
    );
}

export default Image;