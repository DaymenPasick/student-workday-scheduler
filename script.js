// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
// test push flow comment


// 1) functionality to display date in real time, soon as page opens +++++++++++++++++++++++++++++++++++++++++
// q) need a function that will  set up a live date
// b) need to set it up in func init() so it displays soon as page opens
// c) if time permits, maybe allow functionality for time-zone selection for this

// 2) need to set up hourly event blocks, enough to span length from 9~5pm (9 blocks)
// a) need to ensure this page height will allow for scrolling
// b) give proper sizing to each event block so it looks neat and easily readable +++++++++++++++++++++++++++++

// 3) need to make sure each block is color coded depending on corelation to the hour of the day
// a) need color for past, present, and future
// b) needs functionality to register user's timezone
// c) needs functionality that will interact with user's timezone
// d) need boolean variables that will toggle based off of user's timezone (past present future)
// e) need functionality that will highlight current hour block
// f) need functionality that will use these toggle variables to set block colors

// 4) clicking on any hour block allows for entering and saving of new events +++++++++++++++++++++++++++++++++
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