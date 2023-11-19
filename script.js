// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Household variables
var timeBlockContainer = $('.time-block-container')

timeBlockContainer.on('click', '.saveBtn', function(event){
  event.preventDefault();


  var timeBlockID; // will be used to take in the selected time-block container
                    // and use it as a key for user-input in local storage

  var clickTarget = $(this).parent();
  var clickTargetId = clickTarget.attr("id");
  var hourIdMatch = clickTargetId.includes('12')

  console.log(clickTargetId);
  console.log(hourIdMatch);


  var future = true;
  var preset = true;
  var past = true;


  if (clickTargetId) {
    //will match id to real time date 
  }

  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function saveEvent(event) {
  
  };

});
var currentHour = dayjs().format('h')
console.log(currentHour);

// test push flow comment


// 1) functionality to display date in real time, soon as page opens +++++++++++++++++++++++++++++++++++++++++
// q) need a function that will  set up a live date
// b) need to set it up in func init() so it displays soon as page opens
// c) if time permits, maybe allow functionality for time-zone selection for this

// 2) need to set up hourly event blocks, enough to span length from 9~5pm (9 blocks)
// a) need to ensure this page height will allow for scrolling
// b) give proper sizing to each event block so it looks neat and easily readable +++++++++++++++++++++++++++++

// 3) need to make sure each block is color coded depending on corelation to the hour of the day  (do the color portion last)
// piece of code that might help with color adoptation   $('element').css('style', 'value/attribute')
// a) need color for past, present, and future
// b) needs functionality to register user's timezone
// c) needs functionality that will interact with user's timezone
// d) need boolean variables that will toggle based off of user's timezone (past present future)
// e) need functionality that will highlight current hour block
// f) need functionality that will use these toggle variables to set block colors

// 4) clicking on any hour block allows for entering and saving of new events +++++++++++++++++++++++++++++++++
//!!!Might be able to use form functionality from Mod5 to facilitate some of this
//!!!Might be able to use .eq(i) to single out some child elements in DOM
// a) need functionality that will set these blocks as buttons
// b) need to style/html a prompt or form to fill out for new events
// c) need buttons to take in user inputs for new events
// d) need to set these inputs to variables
// e) need to create object array for packaging of these input variables
// f) need functionality that will allow for pushing of these variables into the object


// 5) need save button in this form for entering events
// a) save button needs to initiate everything in 4)
// b) need function that will allow for JSON.string of the object made from  4)
// c) need functionality that will set this object into local strorage

// 6) events persist when page is refreshed
// a) need function that will cause local storage mem to persist
 var currentDate = dayjs().format('MM/DD/YYYY');
 var currentDay = dayjs().format('dddd');
 $('#currentDate').text(currentDate);
$('#currentDay').text(currentDay);
 


//  may be able to use this to manipulate the respective time blocks???
//  var timeBlockArray = [];

//  for (i = 0; i < length.timeBlockArray; i++) {
//    var timeBlock =  $('<li>');

//    timeBlock.text(timeBlockArray[i]);
//  }