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
    saveNewEvent();
    getLocalStorageData();
    // sendEventManagerToLocal()
    writeToTextArea();  
    // getFromLocal() 
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


  //=====Start functionality to build and manipulate a persisting local storage array =====================================

  //will iterate through items in local and set its key and value pairs to variables
  function getLocalStorageData() {
    for (i=0; i < localStorage.length; i++){
      
      //will set variables based off local storage input data
      var storageEventValue = localStorage.getItem(localStorage.key(i))
      var storageEventKey = localStorage.key(i)

    }
  }

  //variables for persist data function
  var newEventInfo;
  

  // console.log(timeBlockLocation.eq(i).attr("id"))
  // console.log(timeBlockLocation)
  
  

  //will iterate through local storage and create variables accordingly
  function persistLocalCheck() {
    
  
    for (i=0; i < localStorage.length; i++){
      var timeBlockLocation = $('#time-block-container').find("textarea.description");
      persistEventKey = localStorage.key(i);
      persistEventValue = localStorage.getItem(localStorage.key(i));
      
      
      console.log(persistEventKey)
      // console.log(persistEventValue)
      newEventInfo = persistEventValue
      // console.log(newEventInfo)
      // console.log(timeBlockLocation.eq(i).parent().attr("id"))
      $('#' + persistEventKey).find('textarea.description').text(persistEventValue)
      // $('#time-block-container').find(persistEventKey).find('textarea.description').text('hi')
      console.log($('#' + persistEventKey).find('textarea.description'))
      // console.log($('#time-block-container').find('#hour-' + i).find('textarea.description'))
      

      //only matches in a certain order via iteration x.x
    //   if (timeBlockLocation.eq(i).parent().attr("id") === persistEventKey){
    //     timeBlockLocation.eq(i).text('hello')
    //   }
    }

  }


  
  // console.log($('#time-block-container').find('#hour-09').find('textarea.description'))




  // function persistLocalCheck() {
  //  var timeBlockLocation = $('#time-block-container').children()
  //  var textPrintLocation = $('#time-block-container').find("textarea.description")
  
  //  //will iterate based off number of timeblocks in html
  //   for (i=0; i < timeBlockLocation.length; i++){
  //     persistEventKey = localStorage.key(i);
  //     persistEventValue = localStorage.getItem(localStorage.key(i));

  //         if (persistEventKey === timeBlockLocation.eq(i).attr("id")){
  //           textPrintLocation.eq(i).text('placeholder')
  //         }
          
  //   }

  // }

// textPrintLocation.eq(i-3).text(persistEventValue)











  function init() {
    persistLocalCheck()
  }
