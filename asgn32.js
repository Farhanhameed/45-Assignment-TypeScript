var current_users = ["ali", "usman", "hamza", "sana", "tariq"];
var new_users = ["Shafiq", "Sana", "Tariq", "Jamal", "Ahsan"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var k = 0; k < new_users.length; k++) {
    if (current_users_lower[k] === (new_users[k].toLowerCase())) {
        console.log("Sorry ".concat(new_users[k], ", that name is taken"));
    }
    else {
        console.log("Yes ".concat(new_users[k], ", is still in available list"));
    }
}
