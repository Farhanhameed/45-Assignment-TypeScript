var userNames2 = ["Sohail", "admin", "ali", "Uzair", "Ahsan"];
if (userNames2.length === 0) {
    console.log("We need to find some users");
}
else {
    for (var j = 0; j < userNames2.length; j++) {
        if (userNames2[j] == "admin") {
            console.log("Hello ".concat(userNames2[j], ", would you like to see a status report"));
        }
        else {
            console.log("Hello ".concat(userNames2[j], ", thank you for logging in again"));
        }
    }
}
// To remove all the elements in above array
userNames2 = [];
if (userNames2.length === 0) {
    console.log("We need to find some users");
}
