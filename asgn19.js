var guestFriend = ["Hussain", "Ali", "Ahsan"];
console.log("I am invited ".concat(guestFriend.length, " number of friends to dinner which are:"));
for (var d = 0; d < guestFriend.length; d++) {
    console.log("".concat(d + 1, ": ").concat(guestFriend[d], " "));
}
