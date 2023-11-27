import React from "react";
import './Home.css';
import { NavLink } from "react-router-dom";

<NavLink
to="/"
className="back-button"
activeClassName="selected"
exact
>
Back
</NavLink>


export default function Home({recipes}) {

    return(
        <div className="home-container">
            <div className="title">Find ingredients</div>

            <div className="recipe-list">
                {recipes.map((r) => {
                    return <NavLink
                    to={r.path}
                    className="img-link"
                    activeClassName="selected"
                    >
                    <img className="img" src={r.image} alt={r.title}></img>
                    </NavLink>
                })}


            </div>
        </div>
    )
}
