import axios from 'axios';

const RECIPES_API_BASE_URL = 'http://localhost:8080/api/v1/recipes';

export const getRecipes = async () => {
    return await axios.get(RECIPES_API_BASE_URL);
}

export const getRecipe = async (id) => {
    return await axios.get(RECIPES_API_BASE_URL + "/" + id);
}