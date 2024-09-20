# Recipe Management UI

## Overview

This React.js application serves as the frontend for a recipe management system. It allows users to view, add, update, and delete recipes through a clean and intuitive user interface. The frontend interacts with a Spring Boot backend via RESTful APIs.

## Features

- **View Recipes**: Displays a list of all recipes with their details.
- **Add a Recipe**: Allows users to create and submit new recipes.
- **Update a Recipe**: Edit the details of an existing recipe.
- **Delete a Recipe**: Remove a recipe from the list.
- **Responsive Design**: Works on both desktop and mobile devices.

## Technology Stack

- **Frontend**: React.js, Axios, Bootstrap
- **State Management**: React hooks (`useState`, `useEffect`)
- **HTTP Client**: Axios for API communication
- **Styling**: Bootstrap for responsive design

## Prerequisites

- **Node.js**: Ensure Node.js and npm are installed. You can download Node.js from [here](https://nodejs.org/).
- **React.js**: The project uses React.js, which can be set up using `create-react-app`.

## Getting Started

### 1. Clone the Repository
git clone https://github.com/rupa22singh/Recipe-Reactjs-Frontend.git
cd Recipe-Reactjs-Frontend

### 2. Install Dependencies
    npm install
### 3. Start the Applicaiton
    npm start


The React app will start on http://localhost:3000.

API Integration

The React application integrates with the backend Spring Boot API. Ensure the backend is running on http://localhost:8080 or adjust the API base URL accordingly.

API Endpoints
GET /v1/recipes/allrecipes: Fetch all recipes.
GET /v1/recipes: Fetch all recipes page wise
POST /v1/recipes: Add a new recipe.
PUT /v1/recipes/{id}: Update a recipe.
DELETE /v1/recipes/{id}: Delete a recipe.

The project's structure follows the typical React.js file layout:

src/
├── components/      # React components
│   ├── ViewRecipe.js    # Component to view all recipes
│   ├── AddRecipe.js     # Component to add a new recipe
│   └── UpdateRecipe.js  # Component to update existing recipe
├── service/         # Axios service for API requests
│   └── RecipeService.js
├── App.js           # Main application file
└── index.js         # Entry point for the application


To add a new recipe, the form requires fields for:

Recipe Name
Ingredients (as a list of strings)
Instructions
Servings
Type (Vegetarian/Non-Vegetarian)
Example POST request using Axios:

RecipeService.addRecipe(recipe).then(() => {
    alert("The recipe has been added successfully.");
}, () => {
    alert("Oh, Snap! Recipe was not updated, something went wrong!")
});

References:
https://react.dev/

https://github.com/axios/axios

https://axios-http.com/docs/intro

https://getbootstrap.com/docs/4.1/getting-started/introduction/

https://nodejs.org/

https://www.youtube.com/watch?v=eVZcI7m8cKc

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

