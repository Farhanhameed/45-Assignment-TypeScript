let current_users: string [] = ["ali", "usman", "hamza", "sana", "tariq"];
let new_users: string [] = ["Shafiq", "Sana", "Tariq", "Jamal", "Ahsan"];
let current_users_lower: string [] = current_users.map(user => user.toLowerCase())

for(let k = 0; k < new_users.length; k++){
    if(current_users_lower[k] === (new_users[k].toLowerCase())){
    console.log(`Sorry ${new_users[k]}, that name is taken`)
    } else {
        console.log(`Yes ${new_users[k]}, is still in available list`)
    }
}