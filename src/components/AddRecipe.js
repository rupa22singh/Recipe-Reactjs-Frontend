import React, { useState } from "react";
import RecipeService from "../service/RecipeService";
import { useNavigate } from "react-router-dom";

let AddRecipe = () => {

    let navigate = useNavigate();
    let[type,setType] = useState('');
    let[name,setName] = useState('');
    let[ingredients,setIngredients] = useState('');
    let[instructions,setInstructions] = useState('');

    let handleRecipeType = (e) => { setType(e.target.value)}
    let handleRecipeName = (e) => { setName(e.target.value)}
    let handleRecipeIngredients = (e) => { setIngredients(e.target.value.split(',').map(item => item.trim()))}
    let handleRecipeInstructions = (e) => { setInstructions(e.target.value)}

    let handleSubmit = (e) => {
        e.preventDefault();
        let recipe = {name:name, type:type, ingredients:ingredients,instructions:instructions}
    
        // alert(JSON.stringify(recipe))
        RecipeService.addRecipe(recipe).then(()=> {
            alert("The recipe has been added successfully.")
            navigate({pathname: '/viewrecipes'})
        },() => {
            alert("Oh, Snap! Recipe was not updated, something went wrong!")
        })
    }
    

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    {/* ID: <input type="text" value={id} className="form-control"/> */}
                    Recipe Type: <input type="text" onChange={handleRecipeType} value={type} className="form-control"/>
                    Recipe Name: <input type="text" onChange={handleRecipeName} value={name} className="form-control"/>
                    Recipe Ingredients: <input type="text" onChange={handleRecipeIngredients} value={ingredients} className="form-control"/>
                    Recipe Instructions: <input type="text" onChange={handleRecipeInstructions} value={instructions} className="form-control"/>

                    <input type="submit" value="Add Recipe" className="form-control bg-success"/>
                </label>
            </form>
        </>
    );
}

export default AddRecipe;