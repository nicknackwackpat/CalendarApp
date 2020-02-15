// Pseudo Code
// Use/research moment.js to display today's date.
$(document).ready();

    $("#currentDay").append(moment().format('MMMM Do YYYY, h:mm:ss a'));

    // User grabs value of text box and saves to localStorage.
    var newInput = $("day-input").val();
    var nineAmVal = $("#nineAm").val();
    var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

    // document.getElementbyId();
    var nineAmTextEl = document.querySelector("#nineAm").textContent;
    var tenAmTextEl = document.querySelector("#tenAm").textContent;
    var elevenAmTextEl = document.querySelector("#elevenAm".textContent);
    var twelvePmTextEl = document.querySelector("#twelvePm".textContent);
    var onePmTextEl = document.querySelector("#onePm".textContent);
    var twoPmTextEl = document.querySelector("#twoPm".textContent);
    var threePmTextEl = document.querySelector("#twelvePm".textContent);
    var fourPmTextEl = document.querySelector("#fourPm".textContent);
    var fivePmTextEl = document.querySelector("#fivePm".textContent);
    // jQuery .val(): grabs the value of an input element.

    // localStorage.setItem("");
    // onClick event for save button
    $("saveBtn").on("click", function () {
        newInput.appendChild(nineAmVal);
        localStorage.getItem(newInput, JSON.stringify(nineAm));
    });
    // onclick event saves value from text box to localStorage
    // use moment.js/conditional statements to compare current time now to timeblocks (research)
    if (nineAmTextEl !== moment(0900).format('09:00am', 'hh:mm A')) {
        $(this).addClass("past");
    }

    console.log(JSON.stringify(moment(0900).format('09:00am', 'hh:mm A')));
    console.log(nineAmTextEl);


    console.log(moment().format("HH:mm"));
    // dynamically add or remove classes based on time comparison (research)
    // on page refresh, localStorage.getItem("") for each timeblock. append localStorage to page.
    // when creating IDs, remember military time
    // remember to use JavaScript "this"
    // jQuery .addClass(), .removeClass()
    // border-right on bootstrap to create a border for columns
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));