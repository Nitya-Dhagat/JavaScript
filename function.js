const username = "Nitya Dhagat";    //const keyword doesn't allow the variable to be changed further in the code
let age = 15;                       //let is as same as using var or new keyword for declaring variables
let hasHobbies = "Coding";

age = 19;

function summarizeUser(userName,userAge,userHobbies){
    return (
        "User Summary" + "\n" +
        "Name is " + userName + "\n" +
        "Age is " + userAge + "\n" + 
        "Hobby is " + userHobbies + "\n"
    );
}

console.log(summarizeUser(username,age,hasHobbies));