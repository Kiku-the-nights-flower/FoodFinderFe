import React, {useState} from "react";
import ListElement from "./ListElement";

export interface ListCreatorProps {
    dtoIn?: string[];
    elementUpdatedFn: (elements: string[]) => void;
}

function ListCreator({dtoIn, elementUpdatedFn}: ListCreatorProps) {
    const [elements, setElements] = useState<string[]>(dtoIn ? [...dtoIn, ""] : [""]);

    const filterCosmeticElement = (elements: string[]) => {
        return elements.slice(0, elements.length - 1);
    }

    const handleDelete = (index: number) => {
        const newElements = elements.filter((_, i) => i !== index);
        setElements(newElements);
        elementUpdatedFn(filterCosmeticElement(newElements));
    };

    const handleChange = (value: string, index: number) => {
        const newElements = elements.map((element, i) => (i === index ? value : element));
        console.log(newElements);
        if (index === elements.length - 1) {
            newElements.push("");
        }
        setElements(newElements);
        elementUpdatedFn(filterCosmeticElement(newElements));
    };

    return (
        <div>
            {elements.map((element, index) => (
                index !== elements.length - 1 ?
                    <ListElement key={index} input={element} onDelete={() => handleDelete(index)}
                                 onChange={(value) => handleChange(value, index)}/>
                    : <ListElement key={index} input={element} onDelete={() => {
                    }} onChange={(value) => handleChange(value, index)}/>
            ))}
        </div>
    );
}

export default ListCreator;