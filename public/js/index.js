"use strict"

const elements = {
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

setTimeout(loopThroughQuotes, 3000);