//Script


//Household variables
var currentHour = dayjs().format('H');
var currentDate = dayjs().format('MM/DD/YYYY');
var currentDay = dayjs().format('dddd');
$('#currentDate').text(currentDate);
$('#currentDay').text(currentDay);


// writeToTextArea();
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
      console.log("No Input Entered")
      // console.log("Clicked Timeblock ID: " + clickTargetId)
    } else {
      console.log("User Input: " + userInput);
      // console.log("Clicked Timeblock ID: " + clickTargetId)
    }

    //puts clicked timeblock and userinput into variables for saveNewItem()
    timeBlockKey = clickTargetId;
    userInputValue = userInput;
    eventPrintLocation = clickTarget.children('textarea.description');
  }  

 
    getUserInput();
    saveNewEvent();
    manipulateLocalStorage();
    sendEventManagerToLocal()
    writeToTextArea();  
    // getFromLocal() 
});
      //will save to local storage w/ Key:timeblock IDs value:user event input
 function saveNewEvent() {
  localStorage.setItem(timeBlockKey, userInputValue);
  }
  //====End functionality to handle user input data/events===============================================================




  //=====Start functionality to build and manipulate a persisting local storage array =====================================

 //array to be used for local storage(persisting)
 var localStorageEventManager = [];

 //object that will contain passed key/value pairs
 //made from local storage user-input
 var keyAndValueObject = {}


  //will iterate through items in local and set its key and value pairs to variables
  function manipulateLocalStorage() {
    for (i=0; i < localStorage.length; i++){
      

      //will set variables based off local storage input data
      var storageEventValue = localStorage.getItem(localStorage.key(i))
      var storageEventKey = localStorage.key(i)

      //this will populate keyAndValueObject using local storage input data
      keyAndValueObject.key = storageEventKey
      keyAndValueObject.value = storageEventValue
      // console.log(keyAndValueObject.value)
      console.log("key" + storageEventKey)
      console.log(storageEventValue)
      

      
    }
    // pushLocalToEventManager()
    //test for updated content of event manager array
    console.log("updated Event Manager Array: " + localStorageEventManager)
  }


  //will push keyAndValueObject to the localStorageEventManager
  function pushLocalToEventManager() {
    localStorageEventManager.push(keyAndValueObject)  
  }

  function sendEventManagerToLocal() {
    localStorage.setItem("eventManager", JSON.stringify(localStorageEventManager))
  }

  //=====End functionality to build and manipulate a persisting local storage array =====================================


  //=====Start functionality to take eventManager object data and print onto timeblocks =================================

    //need to be able to iterate successfully through eventManager
  function parseEventManager() {
    var retrievedEventManager = JSON.parse(localStorage.getItem("eventManager"));
    // var retrievedEventManagerObject = retrievedEventManager
    console.log(retrievedEventManager)
  }

  parseEventManager()

    //in this iteration, need to be able to single out key/pair values within eventManager

    //need to be able to somehow match these keys up with the timeblock ids

    //when they match, need to print the value of the matching keys onto the textareas
    //of the matching time blocks












  //will write data into text area
  function writeToTextArea() {
    eventPrintLocation.val('Placeholder Event')
  }
  //=====End functionality to take eventManager object data and print onto timeblocks =================================

