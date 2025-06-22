const quoteHeading = document.querySelector('h1');
const quoteAuthor = document.querySelector('p');

fetch('https://api.animechan.io/v1/quotes/random')
    .then(response => response.json())
    .then(quote => {
        quoteHeading.innerHTML = quote.data.content
        quoteAuthor.innerHTML = `${quote.data.character.name} from ${quote.data.anime.name}`;
        }
        );



