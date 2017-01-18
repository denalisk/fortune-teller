var deckArray = [["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/0.jpg", "the-fool"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/1.jpg","the-magician"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/2.jpg","the-high-priestess"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/3.jpg","the-empress"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/4.jpg","the-emperor"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/5.jpg","the-hierophant"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/6.jpg","the-lovers"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/7.jpg","the-chariot"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/8.jpg","strength"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/9.jpg","the-hermit"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/10.jpg","wheel-of-fortune"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/11.jpg","justice"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/12.jpg","the-hanged-man"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/13.jpg","death"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/14.jpg","temperance"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/15.jpg","the-devil"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/16.jpg","the-tower"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/17.jpg","the-star"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/18.jpg","the-moon"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/19.jpg","the-sun"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/20.jpg","judgement"],["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/21.jpg","the-world"]];
var readingArray = [];

var insertParagraph = function(targetID) {
  var cardName = readingArray[globalIndex2][1];
  console.log("targetID " + targetID);
  var descriptionText = document.getElementById(cardName);
  document.getElementById(targetID).appendChild(descriptionText);

  console.log("Inserted description? " + cardName);
};

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

var globalIndex2 = 0;
var insertImage = function(focusID, imageLink) {
  // inserts an image into the clicked div
  var divInsert = document.createElement('div');
  divInsert.className = 'card-image-holder';
  divInsert.innerHTML = imageLink;
  console.log(divInsert);
  console.log("Card container is" + focusID);
  document.getElementById(focusID).appendChild(divInsert);
  insertParagraph(focusID);
  globalIndex2++;
  console.log(globalIndex2);
};

var deal = function(readingArray, deckArray) {
  // links the cards dealt to positions on the page
  var cardLocationID = 1;
  readingArray.forEach(function(cards){1
    var image = cards[0];
    cards[0] = '<img src="' + image + '" />';
    console.log(cards[0]);
    console.log("card ID is " + cardLocationID);
    cardLocationID++;
  })
};

$(document).ready(function() {
  generateReading(readingArray);
  console.log(readingArray);
  deal(readingArray, deckArray);

  // deal(readingArray, deckArray);
  $(".backs").one("click", function() {
    // if(globalIndex2 < 5)
    // {
    $(this).find('img').hide();
    var focusID = $(this).attr('id');
    console.log(focusID);
    console.log("focus is" + focusID);
    insertImage(focusID, readingArray[globalIndex2][0]);
    // }

  });

  $("#tarot-deck-main").click(function(){
    location.reload();
  });

});


// $("#test").parseHTML(imageLink);
