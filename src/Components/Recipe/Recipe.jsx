import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../../Services/RecipeService';
import styles from './Recipe.module.scss'

const Recipe = () => {

    const recipeId = useParams().id;

    console.log('recipeid', recipeId)

    const[recipe, setRecipe] = useState({});

    useEffect(() => {
        const populateRecipe = async () => {
            const data = await getRecipe(recipeId);
            setRecipe(data.data)
        }

        populateRecipe();
        
    }, [])

    console.log(recipe, "recipe")



  return <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
  </div>;
};

export default Recipe;
