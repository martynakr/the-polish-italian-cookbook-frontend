import React, {useState, useEffect} from 'react';
import RecipeCard from '../../Components/RecipeCard';
import { getRecipes } from '../../Services/RecipeService';
import styles from "./RecipesList.module.scss";

const RecipesList = () => {

    const [recipes, setRecipes] = useState();

    useEffect(() => {
        const populateRecipes = async () => {
            const data = await getRecipes();
            console.log(data.data);
            setRecipes(data.data);
        }

        populateRecipes();
        
    }, [])

    console.log(recipes, "recipes")

  return (
    <div>
        <h1>Recipes</h1>
        <div className={styles.recipeList}>
            {recipes && recipes.map((recipe, index) => {      
                return (
                  <RecipeCard key={index} id={recipe.id} name={recipe.name} img={recipe.image} country={recipe.country.country_name} createdBy={recipe.recipeCreator.recipe_creator_name}/> )
            })}
        </div>
    </div>
  );
};

export default RecipesList;
