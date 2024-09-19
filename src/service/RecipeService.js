import React from "react";
import axios from "axios";


const getAllRecipesUrl = "http://localhost:8080/v1/recipes/allrecipes";
const findRecipeUrl = "localhost:8080/v1/recipes/";
const addRecipeUrl = "http://localhost:8080/v1/recipes";
const updateRecipeUrl = "localhost:8080/v1/recipes/";
const deleteRecipeUrl = "localhost:8080/v1/recipes/";

class RecipeService{

    getAllRecipes(){
        return axios.get(getAllRecipesUrl);
    }

    findRecipe(){

    }

    addRecipe(recipe){
       return axios.post(addRecipeUrl,recipe)

    }

    updateRecipe(){

    }

    deleteRecipe(){

    }
}
export default new RecipeService()