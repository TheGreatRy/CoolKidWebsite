const imageDisplay = document.getElementById("slideshowImage")
const displayQuote = document.getElementById("quoteOfTheDay")


function displaySlideshow(){

}

setInterval(displaySlideshow, 5000);
    fetch(`https://api.api-ninjas.com/v1/quotes?category=computers`)
    .then(resp => resp.json())
    .then(data =>{
        console.log(data)})