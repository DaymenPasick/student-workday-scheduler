//Script


//Household variables
var currentHour = dayjs().format('H');
var currentDate = dayjs().format('MM/DD/YYYY');
var currentDay = dayjs().format('dddd');
$('#currentDate').text(currentDate);
$('#currentDay').text(currentDay);



manipulateTimeBoxes();

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
  var clickTargetId = clickTarget.attr("id"); //will be used for timeBlockKey local storage var

  //function to set userInputKey vgriable for local storage
  function getUserInput(event) {
    var textAreaLocation = clickTarget.children('textarea.description').val();
    var userInput = textAreaLocation;
    
    //if statement will varify user input into the timeblock text-areas
    if (userInput === undefined || userInput === null || userInput === " " || userInput === "") {
      console.log("No Input Entered")
      console.log("Clicked Timeblock ID: " + clickTargetId)
    } else {
      console.log("User Input: " + userInput);
      console.log("Clicked Timeblock ID: " + clickTargetId)
    }

    //puts clicked timeblock and userinput into variables for saveNewItem()
    timeBlockKey = clickTargetId;
    userInputValue = userInput;
    eventPrintLocation = clickTarget.children('textarea.description');
  }  



  function writeToTextArea() {
    eventPrintLocation.val('Hello')
    
  }
 
    getUserInput();
    saveNewEvent();
    writeToTextArea();
    siftLocalStorage()
    // getFromLocal() 
});
   


  //will write data into text area
 




  //will save to local storage w/ Key:timeblock IDs value:user event input
 function saveNewEvent() {
  localStorage.setItem(timeBlockKey, userInputValue);
  }


  //object to be used for local storage(persisting)
  localStorageEventManager = [];
  var managerObjectKey;
  var managerObjectValue;

  //will set local user input key and values into variables
  function getFromLocal() {
    managerObjectKey = localStorage.getItem("Timeblock: hour-09");
    console.log(managerObjectKey)
    managerObjectValue = localStorage.getItem("userInputValue")
    console.log(managerObjectValue)
  }

  //will push local variables items to the event manager
  function localToManager() {

  }
  



  //will iterate through items in local
  function siftLocalStorage() {
    for (i=0; i < localStorage.length; i++){
      var storageEventValue = localStorage.getItem(localStorage.key(i))
      console.log("value : " + storageEventValue)
      
    }

  }

  for (var key in localStorage) {
    console.log(localStorage.key);
  }

 
    //1)need code that will save written value into the timeblocks

    //c) need to create object that will take in these local storage values
    // ===========key for the object should be the timeblock id from local
    // ===========value for object will be user input from local
    //d) need to 2 push local storage data into object

    //e) need to set this object as a value to local storage(MUST PERSIST IN LOCAL)

    //d) need code that will take in these object local storage values and set to variables

    //f) need code that will write these object value variables onto the timeblocks in html



//may need this functionality to ensure html loads before jquery executes