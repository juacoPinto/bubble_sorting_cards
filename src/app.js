/* eslint-disable */
let cardArray = [];
let theDeck = () => {
  let cards = [];
  let suits = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
  let ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  for (let s of suits) {
    for (let r of ranks) {
      cards.push({ r, s });
    }
  }
  return cards;
};
let cartaContainer = document.getElementById("cartaContainer");
let cardContainer = document.getElementById("cardContainer");
let randomCard = cards => {
  const random = Math.floor(Math.random() * 51);
  cardRank = cards[random].r;
  cardSuit = cards[random].s;
  let suit;
  if (cardSuit === "&spades;") {
    suit = "spades";
  } else if (cardSuit === "&hearts;") {
    suit = "hearts";
  } else if (cardSuit === "&diams;") {
    suit = "diamonds";
  } else {
    suit = "clubs";
  }
  if (cardRank === 11) {
    cardRank = "J";
  } else if (cardRank === 12) {
    cardRank = "Q";
  } else if (cardRank === 13) {
    cardRank = "K";
  } else if (cardRank === 1) {
    cardRank = "A";
  }
  card = document.createElement("div");
  card.classList.add("card", cardSuit, suit);
  card.innerHTML =
    '<span class="card-suit top">' +
    cardSuit +
    "</span>" +
    '<span class="card-value">' +
    cardRank +
    "</span>" +
    '<span class="card-suit bot">' +
    cardSuit +
    "</span>";
  cardContainer.appendChild(card);
  cardArray.push(cards[random]);
  return cardRank;
};
let cards = theDeck();

// randomCard(cards);
let input = document.getElementById("input");
let draw = document.getElementById("draw");
let sort = document.getElementById("sort");

draw.addEventListener("click", () => {
  cardArray = [];
  cardContainer.innerHTML = "";
  for (let i = 0; i < input.value; i++) {
    randomCard(cards);
    console.log(cardArray);
    console.log(cardRank);
  }
});

const bubbleSort = (arr, val) => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index].r > arr[index + 1].r) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  return arr;
};
sort.addEventListener("click", () => {
  cartaContainer.innerHTML = "";
  let sorted = bubbleSort(cardArray, "r");

  console.log(sorted);
});
