import React from 'react';
import styles from './Container.module.scss';
export interface ContainerProps {
    children: React.ReactElement | React.ReactElement[];
}


export default function Container(props: ContainerProps) {
    return (
        <div className={styles.Container}>
            {props.children}
        </div>
    )
}
