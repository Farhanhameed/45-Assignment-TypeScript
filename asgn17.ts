let Guestname: string [] = ["Hussain", "Ali", "Ahsan", "Haseeb", "Usman", "Hamza"];
console.log("Due to limited space, only two people can be invited for dinner");

while (Guestname.length > 2){
let removeGuest = Guestname.pop();
console.log(`Sorry ${removeGuest} you are no longer invited for dinner today`)
}

Guestname.forEach((Guestname) =>{
    console.log(`Dear ${Guestname} you are still invited for dinner`)
})

// remove the last two names from the list
// Guestname.pop();
// Guestname.pop();
// Guestname.pop();
// Guestname.pop();
console.log(`Final guest list ${Guestname}`)