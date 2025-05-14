
        const apiKey = "6cf8e100f07646fabd04233f70fc140f";  // Replace with your own API key

        // Function to fetch substitutes for an ingredient
        async function getSubstitutes(ingredient) {
            const url = `https://api.spoonacular.com/food/ingredients/substitutes?apiKey=${apiKey}&ingredientName=${encodeURIComponent(ingredient)}`;
            
            try {
                const response = await fetch(url);
                
                // Check if the response is okay
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const data = await response.json();
                return data.substitutes || [];  // Return the substitutes or an empty array if none
            } catch (error) {
                console.error("Error fetching substitutes:", error);
                return [];
            }
        }

        // Function to fetch recipes with excluded ingredients
        async function getRecipes(excludedIngredients) {
            const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&excludeIngredients=${encodeURIComponent(excludedIngredients)}`;
            
            try {
                const response = await fetch(url);

                // Check if the response is okay
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                return data.results || [];  // Return recipes or an empty array if none
            } catch (error) {
                console.error("Error fetching recipes:", error);
                return [];
            }
        }

        // Function to display substitutes
        function displaySubstitutes(substitutes) {
            const container = document.getElementById("substitute-container");
            container.innerHTML = "";  // Clear previous results

            if (substitutes.length === 0) {
                container.innerHTML = "<p>No substitutes found.</p>";
                return;
            }

            const list = document.createElement("ul");
            substitutes.forEach(substitute => {
                const listItem = document.createElement("li");
                listItem.textContent = substitute;
                list.appendChild(listItem);
            });

            container.appendChild(list);
        }

        // Function to display recipe results
        function displayRecipes(recipes) {
            const container = document.getElementById("recipe-container");
            container.innerHTML = "";  // Clear previous results

            if (recipes.length === 0) {
                container.innerHTML = "<p>No recipes found.</p>";
                return;
            }

            const list = document.createElement("ul");
            recipes.forEach(recipe => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <strong>${recipe.title}</strong><br>
                    <a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank">View Recipe</a>
                `;
                list.appendChild(listItem);
            });

            container.appendChild(list);
        }

        // Main function to handle form submission
        document.getElementById("get-recipes").addEventListener("click", async () => {
            const ingredient = document.getElementById("ingredient").value.trim();

            if (!ingredient) {
                alert("Please enter an ingredient to exclude.");
                return;
            }

            // Fetch substitutes for the excluded ingredient
            const substitutes = await getSubstitutes(ingredient);

            // Display the substitutes
            displaySubstitutes(substitutes);

            // Fetch recipes, excluding the input ingredient and its substitutes
            const allExclusions = [ingredient, ...substitutes].join(",");
            const recipes = await getRecipes(allExclusions);

            // Display the recipes
            displayRecipes(recipes);
        });
    
function natres(){
    setTimeout(function() {
      window.location.href = '../natural/natu.html'; // Replace with the actual URL of the next page
  }, 0);
  
  }