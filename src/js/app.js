const quotes = [
    [
        "Le voyage est une fuite contre la routine, la monotonie, la familiarité, la soumission à la régulation du gouvernement collectif.",
        "Sylvain Tesson",
        "Artiste, Aventurier, écrivain (1972 - )"
    ],
    [
        "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
        "Confucius",
        "Philosophe"
    ],
    [
        "Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.",
        "Coluche",
        "Artiste, Comique (1944 - 1986)"
    ],
    [
        "Le seul moyen de se délivrer d'une tentation, c'est d'y céder. Résistez et votre âme se rend malade à force de languir ce qu'elle s'interdit.",
        "Oscar Wilde",
        "Artiste, écrivain (1854 - 1900)"
    ],
    [
        "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
        "Gandhi",
        "Homme politique, Philosophe, Révolutionnaire (1869 - 1948)"
    ],
    [
        "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
        "Albert Einstein",
        "Mathématicien, Physicien, Scientifique (1879 - 1955)"
    ]
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const infos = document.querySelector(".infos");

let random = null;

random = Math.floor(Math.random() * quotes.length);

quote.innerHTML = quotes[random][0];
author.innerHTML = quotes[random][1];
infos.innerHTML = ' - ' + quotes[random][2];

// Nouvelle citation au click du bouton "Nouvelle citation"
const btnQuote = document.querySelector(".new-citation");

function newQuote() {
    random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random][0];
    author.innerHTML = quotes[random][1];
    infos.innerHTML = ' - ' + quotes[random][2];
    
}
btnQuote.addEventListener('click', newQuote);

// Partage Twitter
const btnTwitter = document.querySelector(".share-twitter");
const hashtag = quotes[random][1].replace(/ /g, '');
const tweet = twitter(quotes[random][0], 280);


// On crée une fonction qui coupe la citation pour ne pas dépasser la limite autorisée par Twitter
function twitter(quote, chars) {
    if(chars <= 5 + hashtag.length) {
        return quote.slice(0, chars).concat("...");
    }
    else if(quote.length > chars) {
        return quote.slice(0, chars - 3 - hashtag.length - 2).concat("..."); // 3 = "..." et 2 = _#
    } else {
        return quote;
    }
}

function shareQuote() {
    // https://dev.twitter.com/web/tweet-button/web-intent
    window.open("https://twitter.com/intent/tweet?text=" + tweet + "&hashtags=" + hashtag);
}

btnTwitter.addEventListener('click', shareQuote);