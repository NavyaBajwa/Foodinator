# Foodinator

Foodinator is a full-stack application designed to help users find recipes based on the ingredients they have on hand. The app provides a user-friendly interface to search for ingredients, fetch recipe ideas, and explore recipe information, including images and source links. My goal for this project was to explore different languages and frameworks. 

## Features
- __Sleek UI__: Intuitive and modern user interface using Tailwind CSS.
    - used Tailwind CSS with react to create a text reveal animation for the title.
  

https://github.com/user-attachments/assets/f612a5f3-f53f-4c8d-aa89-ee5473b8bf2e






- __Ingredient Search:__ Type and select ingredients to find related recipes.
    - ingredients are organized in a react-select component.
    - the search function has autocomplete.
      
<img width="1318" alt="foodinator search bar autocomplete" src="https://github.com/user-attachments/assets/05bf3b9d-4a77-42c7-bd0f-18b393e7364f"> <br/>

- __Recipe Ideas and Details__: Fetch recipe suggestions based on selected ingredients.
    - recipe ideas are organized in an accordion component where the contents are an image of the dish that is linked to the recipe source.
      
<img width="1369" alt="foodinator recipe details accordion" src="https://github.com/user-attachments/assets/e62c7132-48cb-49b3-b919-fa95000f3a4d"> <br/>


## Tech Stack
- __Frontend:__
    - React
    - typescript
    - Next.js
    - Tailwind CSS
    - React select
    - React accordion
- __Backend:__
    - Node.js
    - Axios for handling API requests
 
- __API:__
    - [Spoonacular API](https://spoonacular.com/food-api/docs) for fetching ingredient list, recipe IDs, and recipe details











