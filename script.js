//Script


//Household variables
var currentHour = dayjs().format('H');
var currentDate = dayjs().format('MM/DD/YYYY');
var currentDay = dayjs().format('dddd');
$('#currentDate').text(currentDate);
$('#currentDay').text(currentDay);


// $(window).on('load', matchTimeBlockToHour());
//may need this functionality to ensure html loads before jquery executes


//function will loop through current time blocks and return their id's
findTimeBlockIds();


function findTimeBlockIds() {
 var timeBlockArray =  $('.time-block-container').children();

for (i = 3; i < timeBlockArray.length; i++) {
  // started interval from 3 to account for the 3 undefined value children returns
  //eventully would like to be able to do this w/o hardcoding the value
  var timeBlockChildren = timeBlockArray[i-3]; //-3 to cutt out the script elements in html
  var childrenLocations = timeBlockArray.eq(i-3);  //-3 to cutt out the script elements in html
  var timeBlockIds = childrenLocations.attr('id');
  var timeBlockIdArray = timeBlockIds.split("-");
  var timeBlockIdHour = timeBlockIdArray[1];

   //for viewing current hour
  // console.log(currentHour);
  //for viewing the hour value within html timeblock ID's
  // console.log(timeBlockIdHour);


  //will set past/present/future classes and styling to each timebox relative
  //to the current time. Will console log accordingly.
  if (timeBlockIdHour === currentHour) {
    console.log("Time-block: " + timeBlockIds + " Set to present");
    childrenLocations.addClass('present');

  } else if (timeBlockIdHour < currentHour) {
    childrenLocations.addClass('past');
    console.log("Time-block: " + timeBlockIds + " Set to past")

  } else if (timeBlockIdHour > currentHour) {
    childrenLocations.addClass('future');
    console.log("Time-block: " + timeBlockIds + " Set to future")
  };

};



};


// function to save user input into local
var timeBlockContainer = $('.time-block-container')

timeBlockContainer.on('click', '.saveBtn', function(event){
  event.preventDefault();
  var clickTarget = $(this).parent();
  var clickTargetId = clickTarget.attr("id");
  //will show in console which timeblock was clicked 
  console.log("TimeBlock " + clickTargetId + " clicked");

  //function to save user input
  function saveUserInput(event) {
    var newEventInput = clickTargetId;
    var textAreaLocation = clickTarget.children();
    var newEvent = clickTarget.children();

    console.log("location: +++++++++ " + textAreaLocation)

    if (newEvent === undefined || newEvent === null) {
      console.log("No event data entered")
    } else {
      console.log("New Event Saved: " + newEvent);
    }
    
    
    
    //console logging save location
    console.log(newEventInput)
  }  

    saveUserInput();
});


  


    //1)need code that will save written value into the timeblocks

    //a) need to take in input value from user and set to variables
    //=====Might be able to use form functionality from Mod5 to facilitate some of this
    //b) need to have that saved input variables saved onto local storage

    //c) need to create object that will take in these local storage values
    // ===========key for the object should be the timeblock id from local
    // ===========value for object will be user input from local
    //d) need to 2 push local storage data into object

    //e) need to set this object as a value to local storage(MUST PERSIST IN LOCAL)

    //d) need code that will take in these object local storage values and set to variables

    //f) need code that will write these object value variables onto the timeblocks in html


