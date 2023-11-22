//Script


//Household variables
var currentHour = dayjs().format('H');
var currentDate = dayjs().format('MM/DD/YYYY');
var currentDay = dayjs().format('dddd');
$('#currentDate').text(currentDate);
$('#currentDay').text(currentDay);






// writeToTextArea();
init();
manipulateTimeBoxes();





  //====Start functionality to handle user input data/events===============================================================


  //function will manipulate display of timeblocks, 
  //as well as set variables according to their html ID's
function manipulateTimeBoxes() {
 var timeBlockArray =  $('.time-block-container').children();

 
  //will set variables via jquery to select html timeblock ID
for (i = 3; i < timeBlockArray.length; i++) {
  // started interval from 3 to account for the 3 undefined value children returns
  var childrenLocations = timeBlockArray.eq(i-3);  //-3 to cutt out the script elements in html
  var timeBlockIds = childrenLocations.attr('id');
  var timeBlockIdArray = timeBlockIds.split("-");
  var timeBlockIdHour = timeBlockIdArray[1];

    //will set past/present/future classes and styling to each timebox relative
    //to the current time. Will console log accordingly.
    if (timeBlockIdHour === currentHour) {
      // console.log("Time-block: " + timeBlockIds + " Set to present");
      childrenLocations.addClass('present');

    } else if (timeBlockIdHour < currentHour) {
      childrenLocations.addClass('past');
      // console.log("Time-block: " + timeBlockIds + " Set to past")

    } else if (timeBlockIdHour > currentHour) {
      childrenLocations.addClass('future');
      // console.log("Time-block: " + timeBlockIds + " Set to future")
    };

  };
};


  // function to save user input into local
var timeBlockContainer = $('.time-block-container')

timeBlockContainer.on('click', '.saveBtn', function(event){
  event.preventDefault();
  var clickTarget = $(this).parent();
  var clickTargetId = clickTarget.attr("id"); //will be used for timeBlockKey local storage var

  //function to set userInputKey vgriable for local storage
  function getUserInput(event) {
    var textAreaLocation = clickTarget.children('textarea.description').val();
    var userInput = textAreaLocation;
    
    //if statement will varify user input into the timeblock text-areas
    if (userInput === undefined || userInput === null || userInput === " " || userInput === "") {
      // console.log("No Input Entered")
      // console.log("Clicked Timeblock ID: " + clickTargetId)
    } else {
      // console.log("User Input: " + userInput);
      // console.log("Clicked Timeblock ID: " + clickTargetId)
    }

    //puts clicked timeblock and userinput into variables for saveNewItem()
    timeBlockKey = clickTargetId;
    userInputValue = userInput;
    eventPrintLocation = clickTarget.children('textarea.description');
    
  }  

    getUserInput();
    saveNewEvent();         //series of functions involes in save buttons sending
    getLocalStorageData();  //info to local 
    writeToTextArea();  
});
      //will save to local storage w/ Key:timeblock IDs value:user event input
 function saveNewEvent() {
  localStorage.setItem(timeBlockKey, userInputValue);
  }

  function writeToTextArea() {
    eventPrintLocation.val("hello")
    // eventPrintLocation.val('Placeholder Event')
  }
  //====End functionality to handle user input data/events===============================================================


  //=====Start functionality to write persisting events in timeblocks ============================================

  //will iterate through items in local and set its key and value pairs to variables
  function getLocalStorageData() {
    for (i=0; i < localStorage.length; i++){
      
      //will set variables based off local storage input data
      var storageEventValue = localStorage.getItem(localStorage.key(i))
      var storageEventKey = localStorage.key(i)

    }
  }


  //will iterate through local storage and create variables accordingly
  function persistLocalCheck() {
    
  
    for (i=0; i < localStorage.length; i++){
      var timeBlockLocation = $('#time-block-container').find("textarea.description");
      persistEventKey = localStorage.key(i);
      persistEventValue = localStorage.getItem(localStorage.key(i));

      //this call will use the loop iterations to put events onto their correct timeblocks!
      $('#' + persistEventKey).find('textarea.description').text(persistEventValue)
  
    }
  }
  //=====Start functionality to write persisting events in timeblocks ============================================

  function init() {
    persistLocalCheck()
  }
