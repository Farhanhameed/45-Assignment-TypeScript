let magicianNames2: string [] = ["Ali", "Ahsan", "Usman"];
// Making a copy of array
let magicianNamescopy = [...magicianNames2];

function show_magicians(greet: string) {
    let withGreetings = " ";
    for(let items of magicianNamescopy){
        withGreetings += `${greet} ${items} \n`
    } 
    return withGreetings
}

let myGreetings = show_magicians("Hello");
let makeArray = myGreetings.split('\n');
console.log(makeArray);

// Original Array
console.log(magicianNames2)