var userNames = ["Sohail", "admin", "ali", "Uzair", "Ahsan"];
for (var j = 0; j < userNames.length; j++) {
    if (userNames[j] == "admin") {
        console.log("Hello ".concat(userNames[j], ", would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(userNames[j], ", thank you for logging in again"));
    }
}
