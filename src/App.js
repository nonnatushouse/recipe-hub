import React, { useState, Component } from "react";
import { Route, Routes, BrowserRouter as Router, NavLink } from "react-router-dom";
import Recipe from "./Recipe/Recipe"
import logo from './logo.svg';
import './App.css';
import Home from "./Home.js"
import { getRecipes } from "./Recipe/Recipes"

const initialState = {
  recipes: getRecipes()
}

function App() {
  const [state, setState] = useState(initialState)


  return (
    <div className="App">
<Router>
<Routes>
<Route path="/" exact element={<Home recipes={state.recipes}/>}/>
{/* <Route path="/a" element={<Recipe image="" title="Mmm" ingredients="" description=""  />} /> */}

{Routes}
{state.recipes.map((r) => {
  return <Route path={r.path} element={<Recipe image={r.image} title={r.title} ingredients={r.ingredients} description={r.description} link={r.link}  />} />
})}

</Routes>
</Router>
    </div>
  );
}

export default App;
