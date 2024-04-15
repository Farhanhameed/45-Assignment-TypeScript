var Guestname = ["Ali", "Ahsan", "Usman"];
var notAttend = "Ali";
console.log(notAttend + " " + "unable to attend Dinner");
var newGuest = "Fiza";
Guestname[Guestname.indexOf(notAttend)] = newGuest;
// console.log(Guestname);
Guestname.map(function (items) { return console.log("Dear ".concat(items, " you are invited for Dinner today at my home")); });
// `` This is called as template litrats
