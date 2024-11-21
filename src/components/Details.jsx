import React, { useState, useEffect } from "react";
import axios from "axios";

function Details({ recipeTitle }) {
  const [recipeId, setRecipeId] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);

  // Fetch Recipe ID based on the Recipe Title
  const fetchRecipeId = async () => {
    try {
      const response = await axios.get("https://cosylab.iiitd.edu.in/recipe", {
        params: { Recipe_title: recipeTitle },
      });

      const recipe = response.data.payload.data.find(
        (item) => item.Recipe_title.toLowerCase() === recipeTitle.toLowerCase()
      );

      if (recipe) {
        setRecipeId(recipe.Recipe_id);
      } else {
        console.error("Recipe not found");
      }
    } catch (err) {
      console.error("Error fetching recipe ID:", err);
    }
  };

  // Fetch Recipe Details using Recipe ID
  const fetchRecipeDetails = async () => {
    if (!recipeId) return;
    try {
      const response = await axios.get(
        `https://cosylab.iiitd.edu.in/recipe/${recipeId}`
      );
      setRecipeDetails(response.data);
    } catch (err) {
      console.error("Error fetching recipe details:", err);
    }
  };

  // Trigger fetching recipe ID when the component mounts or `recipeTitle` changes
  useEffect(() => {
    if (recipeTitle) {
      fetchRecipeId();
    }
  }, [recipeTitle]);

  // Trigger fetching recipe details when `recipeId` is available
  useEffect(() => {
    if (recipeId) {
      fetchRecipeDetails();
    }
  }, [recipeId]);

  console.log(recipeDetails);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h3>Recipe Details</h3>
        </div>
        <div className="card-body">
          {recipeDetails ? (
            <>
              {/* Calories Section */}
              <div className="mb-4">
                <h4>Calories</h4>
                <p>{recipeDetails.payload.Calories} kcal</p>
              </div>

              {/* Total Time Section */}
              <div className="mb-4">
                <h4>Total Time</h4>
                <p>{recipeDetails.payload.total_time} minutes</p>
              </div>

              {/* Servings Section */}
              <div className="mb-4">
                <h4>Servings</h4>
                <p>{recipeDetails.payload.servings} servings</p>
              </div>

              {/* Ingredients Section */}
              <div className="mb-4">
                <h4>Ingredients</h4>
                <ul className="list-group">
                  {Array.isArray(recipeDetails.payload.ingredients) &&
                    recipeDetails.payload.ingredients.map(
                      (ingredient, index) => (
                        <li key={index} className="list-group-item">
                          {ingredient.quantity} {ingredient.unit} of{" "}
                          {ingredient.ingredient}
                        </li>
                      )
                    )}
                </ul>
              </div>

              {/* Instructions Section */}
              <div className="mb-4">
                <h4>Instructions</h4>
                <ul className="list-group">
                  {Array.isArray(recipeDetails.payload.instructions) &&
                    recipeDetails.payload.instructions.map((step, index) => (
                      <li key={index} className="list-group-item">
                        {step}
                      </li>
                    ))}
                </ul>
              </div>
            </>
          ) : (
            <p>Loading recipe details...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
