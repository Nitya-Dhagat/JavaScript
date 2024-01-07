var username = "Nitya Dhagat";
var age = 19;
var hasHobbies = "Coding";

function summarizeUser(userName,userAge,userHobbies){
    return (
        "User Summary" + "\n" +
        "Name is " + userName + "\n" +
        "Age is " + userAge + "\n" + 
        "Hobby is " + userHobbies + "\n"
    );
}

console.log(summarizeUser(username,age,hasHobbies));