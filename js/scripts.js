var deckArray = [[1, 2],[2,3],[3,4],[4,5],[5,6],[6,7]];
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

var addImg = function(imageLink) {
  var divInsert = document.createElement('div');
  divInsert.className = 'card-image-holder';

  divInsert.innerHTML = imageLink;

  document.getElementById('test').appendChild(divInsert);
}

var deal = function(readingArray, deckArray) {
  // links the cards dealt to positions on the page
  var cardLocationID = 1;
  readingArray.forEach(function(cards){1
    var image = cards[0];
    var imageLink = '<img src="img/' + image + '.png" />';
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
});


// $("#test").parseHTML(imageLink);
