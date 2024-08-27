import React from 'react';
import AsyncSelect from 'react-select/async';
import { useState } from "react";
import { fetchIngredients, fetchRecipeDetails, fetchRecipeIDs } from '@/apiStore';
import Button from './button';
import RecipeDetails from './RecipeDetails';
import Accordion from './Accordion';


const customStyles = {
    control: (provided: any) => ({
        ...provided,
        width: '400px', // Fixed width for the search box
        backgroundColor: '#f9fafb', // bg-gray-50
        borderColor: '#d1d5db', // border-gray-300
        padding: '0.5rem', // p-2
        color: '#374151', // text-gray-700
        boxShadow: 'none',
        '&:hover': {
          borderColor: '#6b7280', // hover:border-gray-500
        },
      }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#005f73' : '#f9fafb', // Background of selected options
        color: state.isSelected ? '#000000' : '#000000', // Text color of selected options
        ':hover': {
          backgroundColor: '#bbaef2', // Background color when hovering over options
          color: '#0a0000', // Text color when hovering over options
        },
      }),
      multiValue: (provided: any) => ({
        ...provided,
        backgroundColor: '#ead4fa', // bg-green-500
        padding: '0 0.5rem'
        
      }),
      multiValueLabel: (provided: any) => ({
        ...provided,
        color: '#000000', // text-white
      }),
      multiValueRemove: (prvided: any) => ({
        color: '#a070db'
      }),

}

const sampleIngredients = [
    { label: 'Tomato', value: 'Tomato' },
    { label: 'Onion', value: 'Onion' },
    { label: 'Garlic', value: 'Garlic' },
    { label: 'Chicken', value: 'Chicken' },
    { label: 'Pasta', value: 'Pasta' },
  ];

export default function SearchIngredients() {
    
    //useState accepts an initial state: <any[]>([])
    // <any[]> means that it will be an array of elements of any type, and [] means it starts as an empty array
    //useState returns the current state value, and the function used to update the state
    const [selectedIngredients, setSelectedIngredients] = useState<any[]>([]);
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const [recipeIds, setRecipeIds] = useState<number[]>([]); // State to store recipe IDs
    const [recipeDetails, setRecipeDetails] = useState<any[]>([]);


    const handleChange = (selectedOptions: any) => {
        const ingredients = selectedOptions.map((option: any) => option.value);
        const ingredientSeperated = ingredients.join(',')
        
        setSelectedIngredients(selectedOptions || []);
        console.log('Selected Ingredients:', selectedOptions);
      };
    
      const fetchAndStoreRecipeIDs = async () => {
        const ingredients = selectedIngredients.map((option: any) => option.value);
    
        try {
          const ids = await fetchRecipeIDs(ingredients); // Fetch recipe IDs based on ingredients
          console.log(' Recipe IDs', ids);
          if (ids.length > 0) {
            const details = await fetchRecipeDetails(ids); // Fetch details using the informationBulk endpoint
            console.log('Recipe Details:', details);
            setRecipeDetails(details); // Store the fetched details
          } else {
            console.log('No recipe IDs found.');
            setRecipeDetails([]);
          }
        } catch (error) {
          console.error('Error fetching recipe details:', error);
        }
      };

      const noOptionsMessage = ({ inputValue }: { inputValue: string }) => {
        return !!inputValue ? `No ingredients starting with "${inputValue}" are available` : `Type to load ingredients!`;
      };

      return (
        <div className="flex justify-center items-start space-x-8">
          <div className="flex flex-col items-center space-y-6">
            <AsyncSelect
              isMulti
              cacheOptions
              loadOptions={fetchIngredients}
              placeholder="Type an ingredient..."
              noOptionsMessage={noOptionsMessage}
              styles={customStyles}
              onChange={handleChange}
              value={selectedIngredients}
              onMenuOpen={() => setMenuIsOpen(true)}
              onMenuClose={() => setMenuIsOpen(false)}
            />
            <Button onClick={fetchAndStoreRecipeIDs}>Fetch Recipe Ideas</Button>
          </div>
          <div className="flex-1">
          <Accordion 
            items={recipeDetails.map((recipe: any) => ({
              title: recipe.title,
              content: {
                imageUrl: recipe.image, // Assuming `recipe.image` contains the image URL
                sourceUrl: recipe.sourceUrl, // The source URL for the recipe
              },
            }))}
            isCompact={true}
            selectionMode='single'
          />
          </div>
        </div>
      );
    }
