let userNames: string [] = ["Sohail", "admin", "ali", "Uzair", "Ahsan"];
for(let j = 0; j < userNames.length; j++){
    if(userNames[j] == "admin"){
        console.log(`Hello ${userNames[j]}, would you like to see a status report`)
    }
    else {
        console.log(`Hello ${userNames[j]}, thank you for logging in again`);
    }
}