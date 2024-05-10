import React, {useEffect, useState} from "react";

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
        <div>
            <input type="text" value={value} onChange={handleInputChange}/>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default ListElement;