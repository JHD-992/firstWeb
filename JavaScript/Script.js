//initialise the array into which items marked for saving will be stored.
let savedItem = [];
//initialise a counter to keep track of how many items are stored per page.
let savedCount = 0;

/*function to be run item is marked to be saved. loads item into array that is then stored to localStorage to be retrieced at user convenience
while also incrementing count, setting saved status to true and displaying an appropriate notification*/
function saveItem () {
    let itemID = event.target.parentNode.id;
    let itemInfo = document.getElementById(itemID).innerHTML;
    savedItem.push(itemInfo);
    localStorage.setItem("savedItem", savedItem);
    savedCount = savedCount + 1;
    localStorage.setItem("hasSavedItem", true);
    alert("You have " + savedCount + " text item(s) stored");
}

//fetches all saved information when the button is clicked. If page is opened with no information stored, initialise the appropriate features
function fetchSaved() {
    if (localStorage.getItem("hasSavedItem") === null) {
        localStorage.setItem("savedItem", JSON.stringify(savedPara));
        localStorage.setItem("hasSavedItem", true);
    }
    else {                                                                                         
        let storedInfo = localStorage.getItem("savedItem");
        document.getElementById("savedContent").innerHTML = storedInfo + " <br>";
    }
    
}

//clear localstorage function implemented. For clean up and testing.
function clearStorage () {
    localStorage.clear();
    window.location.reload(true);
}

//function to only run next jquery items if page is ready/finished loading
$(document).ready(function (){

    //function that collects information for the comment input area and transscribes it to the appropriate paragraph
    $(document).ready(function () {
        $("#btnSub").click(function () {
            let userName = document.getElementById("comName").value;
            let userMsg = document.getElementById("comText").value;
            document.getElementById("ComSec").innerHTML =  userMsg + " - " + userName;
        });
    });

    //funtion that toggles the hide and show status of table on index page
    $("#tableHide").click(function () {
        $("#campTable").toggle();
    });

    //function to animate the elephant photo when the "charge" button is pressed
    $("#charge").click(function () {
        $("#ElephantPic").animate({
            width: '600'
        });
    });

    //function to apply chain of effects to quoteblock when button is pressed.
    $("#quoteBtn").click(function() {
        $("#quoteJSH").slideUp("slow").css("color", "red").css("background", "skyblue").slideDown("slow");
    });

    //function do apply drop down animation on the list of packing items and bookmark feature
    $(function () {
        $("#packList").accordion({
            event: "mouseover"
        });
    });
});

    
