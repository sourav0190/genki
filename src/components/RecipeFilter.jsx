import React, { useState, useEffect } from "react";
import axios from "axios";
import Details from "./Details";
// import Details from "./Details";

const RecipeComponent = () => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeId, setRecipeId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  // Handle input change for Recipe Title
  const handleInputChange = (event) => {
    setRecipeTitle(event.target.value);
  };

  // Fetch Recipe ID based on the Recipe Title
  const fetchRecipeId = async () => {
    setShow(true);
    setLoading(true);
    setShow(true);
    setError("");
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
        setError("Recipe not found");
      }
    } catch (err) {
      setError("Error fetching recipe ID");
    } finally {
      setLoading(false);
    }
  };

  // Fetch Recipe Details using Recipe ID
  const fetchRecipeDetails = async () => {
    if (!recipeId) return;
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://cosylab.iiitd.edu.in/recipe/${recipeId}`
      );
      if (response.data) {
      } else {
        setError("Error fetching recipe details");
      }
    } catch (err) {
      setError("Error fetching recipe details");
    } finally {
      setLoading(false);
    }
  };

  // Trigger fetching recipe details when Recipe ID is available
  useEffect(() => {
    if (recipeId) {
      fetchRecipeDetails();
    }
  }, [recipeId]);

  return (
    <div className="container mt-5">
      <div className="card p-3">
        <h2>Search Recipe</h2>
        <div className="mb-3">
          <label htmlFor="recipeTitle" className="form-label">
            Enter Recipe Title
          </label>
          <input
            type="text"
            className="form-control"
            id="recipeTitle"
            value={recipeTitle}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={fetchRecipeId}
          disabled={loading}
        >
          {loading ? "Loading..." : "Search Recipe"}
        </button>

        {error && <div className="alert alert-danger mt-3">{error}</div>}

        {show && <Details recipeTitle = {recipeTitle} />}
      </div>
      {/* <div>{show && <Details recipeDetails={recipeDetails} />}</div> */}
    </div>
  );
};

export default RecipeComponent;
