"use strict"

async function getRandomImage(){
    const endpoint = "http://localhost:8080/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const recievedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${recievedPhotoUrl})`;
} catch (error) {
    console.error(error)
}
}

getRandomImage();

/* const elements = {
     quote: document.getElementById("quote"),
     author: document.getElementById("author"),
 };
 const quotes = [
 {
     quote: "All Hands, Abandon ship!",
     author: "Captain Picard",
 },
 {
     quote: "Doh!",
     author: "Homer Simpson",
 },
 {   quote: "The internet is the first thing that humaniity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
     author: "Eric Schmidt",
 },
 {
     quote: "The only way to do great work is to love what you do.",
     author: "Steve Jobs",
 }
 ]

 function loopThroughQuotes() {
     let quoteIndex = 0;
     setInterval(() => {
         if (quoteIndex < quotes.length) {
             elements.quote.textContent = quotes[quoteIndex].quote;
             elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
             quoteIndex = 0;
         }
 }, 3000);
 }

setTimeout(loopThroughQuotes, 3000); */