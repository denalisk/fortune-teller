var deckArray = [["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/0.jpg", "The Fool"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/1.jpg","The Magician"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/2.jpg","The High Priestess"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/3.jpg","The Empress"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/4.jpg","The Emperor"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/5.jpg","The Hierophant"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/6.jpg","The Lovers"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/7.jpg","The Chariot"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/8.jpg","Strength"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/9.jpg","The Hermit"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/10.jpg","Wheel of Fortune"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/11.jpg","Justice"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/12.jpg","The Hanged Man"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/13.jpg","Death"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/14.jpg","Temperance"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/15.jpg","The Devil"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/16.jpg","The Tower"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/17.jpg","The Star"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/18.jpg","The Moon"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/19.jpg","The Sun"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/20.jpg","Judgement"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/21.jpg","The World"]];
var readingArray = [];

var showCard = function(cardBack, cardFront) {

}


var generateReading = function(readingArray) {
  // randomly selects cards from the deck and assigns them to an array
  deckArrayDuplicate = deckArray.slice();
  for (var index = 0; index < 5; index++) {
    var cardID = Math.floor(Math.random()*deckArrayDuplicate.length)
    readingArray[index] = deckArrayDuplicate[cardID];
    deckArrayDuplicate.splice(cardID, 1);
    console.log(deckArrayDuplicate);
  }
};
var globalIndex = 0;
var addImg = function(imageLink) {
  // inserts the images of the randomly selected cards into the card front divs
  var divInsert = document.createElement('div');
  divInsert.className = 'card-image-holder';

  divInsert.innerHTML = imageLink;

  document.getElementById('card' + globalIndex).appendChild(divInsert);
  globalIndex++;
  console.log(globalIndex);
}

var deal = function(readingArray, deckArray) {
  // links the cards dealt to positions on the page
  var cardLocationID = 1;
  readingArray.forEach(function(cards){1
    var image = cards[0];
    var imageLink = '<img src="' + image + '" />';
    addImg(imageLink);
    console.log(imageLink);
    console.log("card ID is " + cardLocationID);
    cardLocationID++;
  })
};

$(document).ready(function() {
  generateReading(readingArray);
  console.log(readingArray);
  deal(readingArray, deckArray);
  // deal(readingArray, deckArray);
  $(".backs").click(function() {
    $(this).hide();

  });
});


// $("#test").parseHTML(imageLink);
