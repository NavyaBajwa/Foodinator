import axios from 'axios';

const API_KEY = '83e8df585c20455abcce2344c68e37ab'; // Replace with your actual API key

// Function to fetch ingredient list for the select component (search ingredients with autocomplete)
export const fetchIngredients = async (inputValue: string) => {
  const url = `https://api.spoonacular.com/food/ingredients/autocomplete?query=${inputValue}&number=10&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('API Response:', data);
    return data.map((ingredient: { name: string }) => ({
      label: ingredient.name,
      value: ingredient.name,
    }));
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    return [];
  }
};

// Function to fetch recipes by ingredients, returns recipe IDs
export const fetchRecipeIDs = async (ingredients: string[]) => {
    const ingredientsQuery = ingredients.join(',');
    const encodedIngredients = encodeURIComponent(ingredientsQuery);
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodedIngredients}&number=5&apiKey=${API_KEY}`;
  
    try {
      const response = await axios.get(url);
      const data = response.data;
      return data.map((recipe: { id: number }) => recipe.id);
    } catch (error) {
      console.error('Error fetching recipe IDs:', error);
      return [];
    }
  };

// Fetch recipe details using informationBulk endpoint
    export const fetchRecipeDetails = async (ids: number[]) => {
    const idsQuery = ids.join(',');
    const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${idsQuery}&apiKey=${API_KEY}`;
    
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching recipe details:', error);
      return [];
    }
  };


