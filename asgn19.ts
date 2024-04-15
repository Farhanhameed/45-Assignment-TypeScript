let guestFriend: string [] = ["Hussain", "Ali", "Ahsan"];
console.log(`I am invited ${guestFriend.length} number of friends to dinner which are:`);
for(let d = 0; d < guestFriend.length; d++){
    console.log(`${d + 1}: ${guestFriend[d]} `)
}
