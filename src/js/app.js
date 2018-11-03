const quotes = [
	[
		"Le voyage est une fuite contre la routine, la monotonie, la familiarité, la soumission à la régulation du gouvernement collectif.",
		"Sylvain Tesson",
		"Artiste, Aventurier, écrivain (1972 - )",
		"src/img/sylvain-tesson.jpg"
	],
	[
		"Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.",
		"Coluche",
		"Artiste, Comique (1944 - 1986)",
		"src/img/coluche.jpg"
	],
	[
		"Le seul moyen de se délivrer d'une tentation, c'est d'y céder. Résistez et votre âme se rend malade à force de languir ce qu'elle s'interdit.",
		"Oscar Wilde",
		"Artiste, écrivain (1854 - 1900)",
		"src/img/oscar-wilde.jpg"
	],
	[
		"La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
		"Gandhi",
		"Homme politique, Philosophe, Révolutionnaire (1869 - 1948)",
		"src/img/ghandi.jpg"
	],
	[
		"La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
		"Albert Einstein",
		"Mathématicien, Physicien, Scientifique (1879 - 1955)",
		"src/img/albert-einstein.jpg"
	],
	[
		"Un sourire coûte moins cher que l'électricité, mais donne autant de lumière.",
		"Abbé Pierre",
		"Abbé, Prêtre, Religieux (1912 - 2007)",
		"src/img/abbe-pierre.jpg"
	]
];

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const infos = document.querySelector('.infos');
const face = document.querySelector('.face');

let random = null;

random = Math.floor(Math.random() * quotes.length);

quote.innerHTML = quotes[random][0];
author.innerHTML = quotes[random][1];
infos.innerHTML = '- ' + quotes[random][2];
face.setAttribute('src', quotes[random][3]);
face.setAttribute('alt', quotes[random][1]);


// On génère une nouvelle citation au clic du bouton "nouvelle citation"
const btnQuote = document.querySelector('.new-citation');

function newQuote() {
	random = Math.floor(Math.random() * quotes.length);
	quote.innerHTML = quotes[random][0];
	author.innerHTML = quotes[random][1];
	infos.innerHTML = '- ' + quotes[random][2];
	face.setAttribute('src', quotes[random][3]);
}

btnQuote.addEventListener('click', newQuote);


// Partage tweeter de la citation 
const btnTwitter = document.querySelector('.share-twitter');

function shareQuote() {
	const hashtag = quotes[random][1].replace(/ /g, '');
	const citation = twitter(quotes[random][0], 70 - 3 - 2 - hashtag.length); 
	// 3 correspond aux '...' et 2 correspond à ' #'
	// https://dev.twitter.com/web/tweet-button/web-intent
	window.open(`https://twitter.com/intent/tweet?text= ${citation} &hashtags=${hashtag}`);
}

btnTwitter.addEventListener('click', shareQuote);


// Limiter la citation 
function twitter(quote, chars) {
	if (quote.length < chars) {
		return quote.slice(0, chars);
	} else if (quote.length > chars) {
		return quote.slice(0, chars).concat('...');
	} else {
		return quote;
	}
}