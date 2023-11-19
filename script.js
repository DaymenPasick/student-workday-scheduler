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

  console.log(currentHour); //for viewing current hour
  console.log(timeBlockIdHour);//for viewing the hour value within html timeblock ID's


  //will set past/present/future classes and styling to each timebox relative
  //to the current time.
  if (timeBlockIdHour === currentHour) {
    console.log('yes!');
    childrenLocations.addClass('present');

  } else if (timeBlockIdHour < currentHour) {
    childrenLocations.addClass('past');

  } else if (timeBlockIdHour > currentHour) {
    childrenLocations.addClass('future');

  };

};



};



var timeBlockContainer = $('.time-block-container')

timeBlockContainer.on('click', '.saveBtn', function(event){
  event.preventDefault();
  var clickTarget = $(this).parent();
  var clickTargetId = clickTarget.attr("id");

//for clicking on timeblocks ~~~~needs to be moved eventually
  //if loop will test time-block click target to see if it
  //matches the current military hour. 

  

  if (clickTargetId.includes(currentHour)) {
    console.log("Selected Timecard is the current hour");
    console.log(clickTargetId);
  } else {
    console.log("Selected Timecard is NOT the current hour");
    console.log(clickTargetId);
  }


    //1)need code that will save written value into the timeblocks

    //a) need to take in input value from user and set to variables

    //b) need to have that saved input variables saved onto local storage

    //c) need to create object that will take in these local storage values
    // ===========key for the object should be the timeblock id from local
    // ===========value for object will be user input from local
    //d) need to 2 push local storage data into object

    //e) need to set this object as a value to local storage(MUST PERSIST IN LOCAL)

    //d) need code that will take in these object local storage values and set to variables

    //f) need code that will write these object value variables onto the timeblocks in html
  function saveEvent(event) {
  
  };

});



  // var timeBlockID; // will be used to take in the selected time-block container
                    // and use it as a key for user-input in local storage

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

// test push flow comment

// 4) clicking on any hour block allows for entering and saving of new events +++++++++++++++++++++++++++++++++
//!!!Might be able to use form functionality from Mod5 to facilitate some of this





// 5) need save button in this form for entering events
// a) save button needs to initiate everything in 4)
// b) need function that will allow for JSON.string of the object made from  4)
// c) need functionality that will set this object into local strorage

// 6) events persist when page is refreshed
// a) need function that will cause local storage mem to persist

 


//  may be able to use this to manipulate the respective time blocks???
//  var timeBlockArray = [];

//  for (i = 0; i < length.timeBlockArray; i++) {
//    var timeBlock =  $('<li>');

//    timeBlock.text(timeBlockArray[i]);
//  }