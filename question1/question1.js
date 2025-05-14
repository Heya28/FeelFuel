
function selectMood(userInput) {
    const mood=userInput;      //userInput
        // Optionally, you can add a visual indication of mood selection
        console.log("Mood selected: " + mood);
        
        // Add animation to the image or any other elements if needed
        document.body.classList.add('fade-out'); // Optionally fade out the page elements
    
        // After 1.5 seconds (wait for animation to complete), transition to the next page
        setTimeout(function() {
            window.location.href = '../question2/question2.html'; // Replace with the actual URL of the next page
        }, 1000); // 1.5 second delay
    }
    
function goBack(){
    setTimeout(function() {
        window.location.href = '../mainpage/index.html'; // Replace with the actual URL of the next page
    }, 0);

}
