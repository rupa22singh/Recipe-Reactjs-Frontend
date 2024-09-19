import React, { useEffect, useState } from "react";
import RecipeService from "../service/RecipeService";
import { useNavigate } from "react-router-dom";

let ViewRecipe = () => {
    let[state, setState] = useState({
        recipes: []
    });

    useEffect(()=>{
        RecipeService.getAllRecipes().then((response)=>{
            setState(()=>({
                recipes : response.data 
            }));
        
        },()=>{});

    },[]);
    console.log(JSON.stringify(state.recipes))

    let navigate = useNavigate();

    let handleAddRecipeBtnClick = () => {
        navigate({pathname:'/addrecipe'})

    }

    let handleUpdateRecipeBtnClick = (id) => {
        navigate({pathname:'/updaterecipe'})
    }

    let handleDeleteRecipeBtnClick = (id) => {
        navigate({pathname:'/deleterecipe'})
        
    }

    return(
        <>
        <table className="table table-striped text-center">
            <thead className="bg-success">
                <tr>
                    <th>Recipe ID</th>
                    <th>Recipe Name</th>
                    <th>Date Created</th>
                    <th>Last Updated At</th>
                    <th>Ingredients</th>
                    <th>Instructions</th>
                    <th>Action</th>
                </tr>    
            </thead>
            <tbody>
                {
                    state.recipes.map((recipe)=>{
                        return(
                            <tr key={recipe.id}>
                                <td>{recipe.id}</td>
                                <td>{recipe.name}</td>
                                <td>{recipe.creationDate}</td>
                                <td>{recipe.lastUpdatedAt}</td>
                                <td>{recipe.ingredients}</td>
                                <td>{recipe.instructions}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={handleUpdateRecipeBtnClick(recipe.id)}>Update</button>
                                    <button className="btn btn-info" onClick={handleDeleteRecipeBtnClick(recipe.id)}>Delete</button>
                                     
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <button className="btn btn-success" onClick={handleAddRecipeBtnClick}>Add Recipe</button>
        </>
    );
}

export default ViewRecipe;