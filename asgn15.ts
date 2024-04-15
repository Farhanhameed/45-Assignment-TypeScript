let Guestname: string [] = ["Ali", "Ahsan", "Usman"];
let notAttend = "Ali";
console.log(notAttend + " " + "unable to attend Dinner");
let newGuest: string = "Fiza";
Guestname [Guestname.indexOf(notAttend)] = newGuest;
// console.log(Guestname);
Guestname.map((items) => console.log(`Dear ${items} you are invited for Dinner today at my home`))
// `` This is called as template litrats
