// Get quotes from API

let apiQuotes = [];

// show new quote
function newQuote(){
  // Pick a random quote from API Quotes
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
} 

async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';

  try{
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();

  } catch (error) {
    // handle error here
  }
}

// On Load
getQuotes();