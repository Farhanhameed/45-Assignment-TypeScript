var Guestname = ["Ali", "Ahsan", "Usman"];
Guestname.map(function (items) { return console.log("Dear ".concat(items, ", i found a bigger table so I can invited more people")); });
var Guestbeg = "Hussain";
Guestname.unshift(Guestbeg);
console.log(Guestname);
// Add middle of an array
var middleGuset = "Haseeb";
Guestname.splice(2, 0, middleGuset);
console.log(Guestname);
// Add last in an array
Guestname.push("Hamza");
console.log(Guestname);
Guestname.map(function (items) {
    return console.log("Dear ".concat(items, " You all are invited to dinner party at my home tonight"));
});
