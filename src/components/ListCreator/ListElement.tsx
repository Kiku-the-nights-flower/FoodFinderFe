import React, {useEffect, useState} from "react";
import styles from "./ListElement.module.scss";

interface ListElementProps {
    input: string;
    onDelete: () => void;
    onChange: (value: string) => void;
}

function ListElement({input, onDelete, onChange}: ListElementProps) {
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        setValue(input);
    }, [input]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className={styles.ListElement}>
            <input className={styles.input} type="text" value={value} onChange={handleInputChange}/>
            <button className={styles.deleteButton} onClick={onDelete}>Delete</button>
        </div>
    );
}

export default ListElement;