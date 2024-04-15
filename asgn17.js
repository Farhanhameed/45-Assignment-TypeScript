var Guestname = ["Hussain", "Ali", "Ahsan", "Haseeb", "Usman", "Hamza"];
console.log("Due to limited space, only two people can be invited for dinner");
while (Guestname.length > 2) {
    var removeGuest = Guestname.pop();
    console.log("Sorry ".concat(removeGuest, " you are no longer invited for dinner today"));
}
Guestname.forEach(function (Guestname) {
    console.log("Dear ".concat(Guestname, " you are still invited for dinner"));
});
// remove the last two names from the list
// Guestname.pop();
// Guestname.pop();
// Guestname.pop();
// Guestname.pop();
console.log("Final guest list ".concat(Guestname));
