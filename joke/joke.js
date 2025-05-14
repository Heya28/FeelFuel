
// Function to fetch a random food joke
async function getRandomFoodJoke(apiKey) {
    const url = "https://api.spoonacular.com/food/jokes/random";
    const jokeContainer = document.getElementById("joke-container");
    const button = document.getElementById("fetch-joke");

    try {
        // Disable the button to prevent multiple clicks
        button.disabled = true;
        button.textContent = "Loading...";
        // Make the API request
        const response = await fetch(`${url}?apiKey=${apiKey}`);
        
        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();
        // Display the joke on the webpage
        jokeContainer.textContent = data.text;
    } catch (error) {
        console.error("Error fetching the joke:", error);
        jokeContainer.textContent = "Failed to load a joke. Please try again.";
    } finally {
        // Re-enable the button
        button.disabled = false;
        button.textContent = "Get a Food Joke";
    }
}

// Replace 'YOUR_API_KEY' with your actual Spoonacular API key
const apiKey = "6cf8e100f07646fabd04233f70fc140f";

// Add an event listener to the button (only once)
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fetch-joke").addEventListener("click", () => {
        getRandomFoodJoke(apiKey);
    });
});
document.getElementById("fetch-joke").addEventListener("click", function() {
    this.classList.add("hidden"); // Adds the hidden class
});
