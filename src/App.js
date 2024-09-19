import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ViewRecipe from './components/ViewRecipes';
import AddRecipe from './components/AddRecipe';
import UpdateRecipe from './components/UpdateRecipe';
import Header from './components/Header';
import DeleteRecipe from './components/DeleteRecipe';

function App() {
  return (
    <>
    <h1 color='red'>Recipes</h1>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<ViewRecipe/>} exact={true}/>
      <Route path={"/viewrecipes"} element={<ViewRecipe/>} exact={true}/>
      <Route path={"/addrecipe"} element={<AddRecipe/>} exact={true}/>
      <Route path={"/updaterecipe"} element={<UpdateRecipe/>} exact={true}/>
      <Route path={"/deleterecipe"} element={<DeleteRecipe/>} exact={true}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
