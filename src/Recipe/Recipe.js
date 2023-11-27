import React from "react";
import './Recipe.css';
import { NavLink } from "react-router-dom";

import IngredientList from "./IngredientList";



export default function Recipe({image, title, ingredients, description, link}) {

    
    return(
        

        <div className="recipe-page">
            <NavLink
            to="/"
            className="back-button"
            activeClassName="selected"
            exact
            >
            Back
            </NavLink>
            <div className="recipe-title">{title}</div>
            
            <div className="recipe-container">
                <div className="img_ing">
                    <img className="img" src={image} alt={title}></img>
                    
                    <IngredientList ingredients={ingredients}></IngredientList>
                    
                </div>

                

                <div className="description">
                   
                {description.map((d) => <div className="d-line">{d}</div>)}
                </div>
                {link !== "" ? <a href={link}>Link</a> : <div></div>}
            </div>
        </div>

    )
}