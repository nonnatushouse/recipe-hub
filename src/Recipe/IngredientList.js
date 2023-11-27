import React from "react";
import './Recipe.css';
import { NavLink } from "react-router-dom";





export default function IngredientList({ingredients}) {


    return (
        <div className="ingredient-list">
            {ingredients.map((i) => <div>{i}</div>)}
        </div>
    )
}


