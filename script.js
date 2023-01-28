// all test scripts
let totalTrains = 12;
let trainsOperational = 8;


console.log("There are " + trainsOperational + " running trains.");

let avgHeight = 145;
let numEruptions =4; 

console.log("Average eruption height today: " + avgHeight)

console.log("Number of eruptions today: " + numEruptions)

alert("I'd Never Walk Cornelia Street Again..... ")

confirm("Can I ask you a Question...? ")

prompt("Are you ready for it?")

let userName = prompt("Are you going to The ERAs Tour?")

let gotName = false;
while(gotName == false){
    let userName = prompt("Which ERAs Tour show do you have tickets to?");

    if ( prompt("Have you ever been to " + userName + "?")){
        alert("Prepare for the best night of your life in " + userName + "!");
        gotName = true;
    }
}



let userAge;
let ageIsCorrect = false;

while (ageIsCorrect == false) {
  userAge = prompt("What's your age, user?");
  ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");
}

alert("Great! Your age is logged as " + userAge + ".");