var deckArray = [1,2,3,4,5,6];
var readingArray = [];

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

var deal = function(readingArray, deckArray) {
  // links the cards dealt to positions on the page
};

$(document).ready(function() {
  generateReading(readingArray);
  console.log(readingArray);
  generateReading(readingArray);
  console.log(readingArray);
});
