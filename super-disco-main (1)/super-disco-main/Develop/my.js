// Work Day Scheduler
// When the website opens the user can see the date
var currentDate = $("#currentDay");
m = moment().format("MM DD YYYY");

currentDate.text(m)
// The button saves the inputted text to local storage

var timeBlocks = document.querySelectorAll(".time-frame");
console.log(timeBlocks);

var militaryTime = moment().format("HH");
console.log(militaryTime);

for (var i=0; i< timeBlocks.length; i++) {
    if (timeBlocks[i].classList[2] < militaryTime) {
        timeBlocks[i].children[1].classList.add("past")
    } else if
    (timeBlocks[i].classList[2] === militaryTime) {
        timeBlocks[i].children[1].classList.add("present")
    } else if
    (timeBlocks[i].classList[2] > militaryTime) {
        timeBlocks[i].children[1].classList.add("future")
}
}
//local storage api
if(localStorage.getItem("9amItem") !="") {
    $("#9amEntry").val(localStorage.getItem("9amItem"));
}

$("#btn1").click(function () {
    if(window.localStorage) {
        localStorage.setItem("9amItem", $("#9amEntry").val());
        setTimeout(function() {
            window.location.replace("index.html");
        });
    }
});

if(localStorage.getItem("10amItem") !="") {
    $("#10amEntry").val(localStorage.getItem("10amItem"));
}

$("#btn2").click(function () {
    if(window.localStorage) {
        localStorage.setItem("10amItem", $("#10amEntry").val());
        setTimeout(function() {
            window.location.replace("index.html");
        });
    }
});

if(localStorage.getItem("11amItem") !="") {
    $("#11amEntry").val(localStorage.getItem("11amItem"));
}

$("#btn3").click(function () {
    if(window.localStorage) {
        localStorage.setItem("11amItem", $("#11amEntry").val());
        setTimeout(function() {
            window.location.replace("index.html");
        });
    }
});

if(localStorage.getItem("12pmItem") !="") {
    $("#12pmEntry").val(localStorage.getItem("12pmItem"));
}

$("#btn4").click(function () {
    if(window.localStorage) {
        localStorage.setItem("1pmItem", $("#1pmEntry").val());
        setTimeout(function() {
            window.location.replace("index.html");
        });
    }
});

if(localStorage.getItem("1pmItem") !="") {
    $("#1pmEntry").val(localStorage.getItem("1pmItem"));
}

$("#btn5").click(function () {
    if(window.localStorage) {
        localStorage.setItem("1pmItem", $("#1pmEntry").val());
        setTimeout(function() {
            window.location.replace("index.html");
        });
    }
});

if(localStorage.getItem("2pmItem") !="") {
    $("#2pmEntry").val(localStorage.getItem("2pmItem"));
}

$("#btn6").click(function () {
    if(window.localStorage) {
        localStorage.setItem("2pmItem", $("#2pmEntry").val());
        setTimeout(function() {
            window.location.replace("index.html");
        });
    }
});

if(localStorage.getItem("3pmItem") !="") {
    $("#3pmEntry").val(localStorage.getItem("3pmItem"));
}

$("#btn7").click(function () {
    if(window.localStorage) {
        localStorage.setItem("3pmItem", $("#3pmEntry").val());
        setTimeout(function() {
            window.location.replace("index.html");
        });
    }
});

if(localStorage.getItem("4pmItem") !="") {
    $("#4pmEntry").val(localStorage.getItem("4pmItem"));
}

$("#btn8").click(function () {
    if(window.localStorage) {
        localStorage.setItem("4pmItem", $("#4pmEntry").val());
        setTimeout(function() {
            window.location.replace("index.html");
        });
    }
});

if(localStorage.getItem("5pmItem") !="") {
    $("#5pmEntry").val(localStorage.getItem("5pmItem"));
}

$("#btn9").click(function () {
    if(window.localStorage) {
        localStorage.setItem("5pmItem", $("#5pmEntry").val());
        setTimeout(function() {
            window.location.replace("index.html");
        });
    }
});
