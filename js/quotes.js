const quotes=[
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "If everything isn't black and white, I say, 'Why the hell not?'",
        author: "John Wayne",
    },
    {
        quote: "There is not any memory with less satisfaction than the memory of some temptation we resisted.",
        author: "James Branch Cabell",
    },
    {
        quote: "Of those who say nothing, few are silent.",
        author: "Thomas Neill",
    },
    {
        quote: "No man is happy who does not think himself so.",
        author: "Publilius Syrus",
    },
    {
        quote: "There is nothing either good or bad, but thinking makes it so.",
        author: "William Shakespeare",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;