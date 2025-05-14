
    const apiKey = '6cf8e100f07646fabd04233f70fc140f'; // Replace with your actual API key

    // Fetch a spicy recipe from Spoonacular API
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=spicy&apiKey=${apiKey}&number=1`)
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        const recipeContainer = document.getElementById('recipeContainer');

        if (data.results && data.results.length > 0) {
          const recipe = data.results[0]; // Get the first spicy recipe
          const recipeTitle = recipe.title;
          const recipeUrl = `https://spoonacular.com/recipes/${recipeTitle.replace(/\s+/g, '-').toLowerCase()}-${recipe.id}`;

          // Create the HTML content for the recipe without the image
          const recipeHTML = `
            <h2 class="recipe-title">${recipeTitle}</h2>
            <a href="${recipeUrl}" class="recipe-link" target="_blank">Click here to view the full recipe</a>
          `;

          // Inject the recipe content into the page
          recipeContainer.innerHTML = recipeHTML;
        } else {
          recipeContainer.innerHTML = "<p>No spicy recipes found.</p>";
        }
      })
  .catch(error => {
        console.error("Error fetching recipe data:", error);
        document.getElementById('recipeContainer').innerHTML = "<p>Failed to load recipe. Please try again later.</p>";
      });


function gonext(){
  setTimeout(function() {
    window.location.href = '../allergenmeal/allergen.html'; // Replace with the actual URL of the next page
}, 0);

}