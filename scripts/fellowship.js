console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;

// Part 1
var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
   var middleEarth = $('<section id="middle-earth"></section>');
   for (var i = 0; i < lands.length; i++) {
     $(middleEarth).append('<article><h1>' + lands[i] + '</article></h1>')
   };
   $('body').append(middleEarth)
};

// Part 2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   var ulHobbits = $('<ul></ul>');
   for (var i = 0; i < hobbits.length; i++) {
     $(ulHobbits).append('<li class=hobbit>' + hobbits[i] + '</li>')
   };
   $('article').first().append(ulHobbits);
};

// Part 3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   var theRing = $('<div id="the-ring" class="magic-imbued-jewelry"></div>');
   $('.hobbit').first().append(theRing)
};

// Part 4
var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   var asideTag = $('<aside></aside>');
   for (var i = 0; i < buddies.length; i++) {
     $(asideTag).append('<li class="buds">' + buddies[i] + '</li>')
   }
   $('article').eq(1).append(asideTag);
};

// Part 5
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $('.buds').eq(3).text('Aragorn');
};

// Part 6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   var detachedHob = $('.hobbit').detach()
   $('article').eq(1).append(detachedHob)
};

// Part 7
var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   var theFellowship = $('<div class="the-fellowship"></div>');
   var detachHob = $('.hobbit').detach();
   var detachbud = $('.buds').detach();
   $(theFellowship).each(function() {
     alert('Hobbits have joined the fellowship')
   }).append(detachHob);
   $(theFellowship).each(function() {
     alert('Buddies have joined the fellowship')
   }).append(detachbud);
   $('article').eq(1).append(theFellowship);
};

// Part 8
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   $('.buds').first().text('Gandalf the White').css({backgroundColor: 'white', border: '3px solid grey'});
};

// Part 9
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert('Horn of Gondor has been blown');
   $('.buds').eq(4).remove();
};

// Part 10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   var frodo = $('.hobbit').first().detach();
   var sam = $('.hobbit').eq(0).detach();
   $('article').eq(2).append(frodo, sam);
   $('article').eq(2).append('<div id="mount-doom"></div>')
};

// Part 11
var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  var gollum = $('<div id="gollum"><li>gollum</li></div>');
  $('article').eq(2).append(gollum)
  var ring = $('#the-ring').detach();
  $('#gollum').append(ring);
  $('#mount-doom').append(gollum);
};

// Part 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#gollum').remove();
   var hobbit = $('.hobbit').detach();
   $('article').first().append(hobbit);

};

$(document).ready(function() {
makeMiddleEarth();
makeHobbits();
keepItSecretKeepItSafe();
makeBuddies();
beautifulStranger();
leaveTheShire();
forgeTheFellowShip();
theBalrog();
hornOfGondor();
itsDangerousToGoAlone();
weWantsIt();
thereAndBackAgain();
})





























//
