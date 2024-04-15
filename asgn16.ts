let Guestname: string [] = ["Ali", "Ahsan", "Usman"];
Guestname.map((items) => console.log(`Dear ${items}, i found a bigger table so I can invited more people`))
let Guestbeg: string = "Hussain";
Guestname.unshift(Guestbeg);
console.log(Guestname);

// Add middle of an array
let middleGuset: string = "Haseeb";
Guestname.splice(2,0,middleGuset)
console.log(Guestname)

// Add last in an array
Guestname.push("Hamza");
console.log(Guestname);

Guestname.map((items) =>
console.log(`Dear ${items} You all are invited to dinner party at my home tonight`)
)