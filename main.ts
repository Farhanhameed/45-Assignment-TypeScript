// Assignment 1
// console.log("Hello World!");

// Assignment 2
// let personNames:string = "Ali";
// console.log("Hello, " + personNames + ", would you like to learn some Python today");
// console.log(`Hello, ${personNames} , would you like to learn some Python today`);

// Assignment 3
// let personName1:string = "Farhan abdul hameed";
// console.log("Lower Case: " + personName1.toLowerCase())
// console.log("Upper Case" + personName1.toUpperCase())
// console.log("Title Case " + personName1.replace(/\b\w/g, c=> c.toUpperCase()))

// Assignment 4
let quotes: string = "A person who never made a mistake never tried anything new";
let author: string = "Albert Einstein";
console.log(`${author} once said, "${quotes}."`);

// Assignment 5
let famous_person: string = "Albert Einstein";
let quote: string = "A person who never made a mistake never tried anything new";
let message: string =  `${famous_person} once said, "${quote}"`;
console.log(message);

// Assignment 6
let personName: string = "\t\n Farhan Abdul Hameed \n\t";
console.log("Original message:", personName);
console.log("Stripped message:", personName.trim());

// Assignment 7
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Assignment 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Assignment 9
let favoriteNo: number = 5;
console.log(`My favoutite number is ${favoriteNo}`);

// Assignment 10
// My name is Farhan Abdul Hameed
// Today is March 16, 2024

// Print the favourite number
let favoriteNum: number = 5;
console.log(`My favoutite number is ${favoriteNum}`);

// Output is 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Assignment 11
let names: string [] = ["Ali", "Ahsan", "Usman"];
console.log(names[0])
console.log(names[1])
console.log(names[2])

// Assignment 12
let names: string [] = ["Ali", "Ahsan", "Usman"];
let messages: string = "Would like to eat Biryani?";
console.log(names[0] + " " + messages);
console.log(names[1] + " " + messages);
console.log(names[2] + " " + messages);

// Assignment 13
let transportation: string [] = ["BRV", "Aqwa", "Honda 150"];
transportation.map((items) => console.log(`I would like to own ${items}`))


// Assignment 14
let Guestnames: string [] = ["Ali", "Ahsan", "Usman"];
Guestnames.map((items) => console.log(`Dear ${items} you are invited for Dinner today at my home`))



// Assignment 15
let Guestname: string [] = ["Ali", "Ahsan", "Usman"];
let notAttend = "Ali";
console.log(notAttend + " " + "unable to attend Dinner");
let newGuest: string = "Fiza";
Guestname [Guestname.indexOf(notAttend)] = newGuest;
// console.log(Guestname);
Guestname.map((items) => console.log(`Dear ${items} you are invited for Dinner today at my home`))
// `` This is called as template litrats


// Assignment 16
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

// Assignment 17
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

// Assignment 18
let placetoVisit: string[] = ["Japan", "America", "Pakistan", "Malaysia", "Germany"];
// console.log(`Original order: ${placetoVisit}`);
console.log("Original order: ",placetoVisit);


// console.log("In sort order: ", placetoVisit.sort());
console.log("In sort order: ", [...placetoVisit].sort());
console.log("Already in Original order: ", placetoVisit);
// 2nd method for sorting
let copyofArray = [...placetoVisit];
// let copyofArray = placetoVisit.slice();
console.log(copyofArray.sort());


console.log("In reverse order: ", [...placetoVisit].reverse());
console.log("Already in Original order: ", placetoVisit);
// 2nd method for reverse
let copyofArray2 = [...placetoVisit];
// let copyofArray2 = placetoVisit.slice();
console.log(copyofArray2.reverse());


console.log("In reverse order: ", placetoVisit.reverse());
console.log("Change from Original order: ", placetoVisit.reverse());

console.log("In sort order: ", placetoVisit.sort());
console.log("Change from Original order: ", placetoVisit.reverse());

// Assignment 19
let guestFriend: string [] = ["Hussain", "Ali", "Ahsan"];
console.log(`I am invited ${guestFriend.length} number of friends to dinner which are:`);
for(let d = 0; d < guestFriend.length; d++){
    console.log(`${d + 1}: ${guestFriend[d]} `)
}


// Assignment 20
let listArray:string [] = ["Pakistan", "K2", "Nile", "Urdu"];
console.log(listArray);


// Assignment 21
let person: {name: string, fname: string, age: number} = {
    name: "Ahsan",
    fname: "Rehman",
    age: 25
}
console.log(person);


// Assignment 22
let days: string [] = ["sat", "sun"];
// console.log(days{2});
console.log(days[1]);


// Assignment 23
let car: string = "subaru";
// Test no 1
console.log("Is car == 'sabaru' ? I predict true");
console.log(car == 'subaru');

// Test no 2
console.log("Is car === 'sabaru' ? I predict true");
console.log(car === 'subaru');

// Test no 3
console.log("Is car != 'subaru' ? I predict true");
console.log(car != 'subaru');

// Test no 4
console.log("Is car !== 'subaru' ? I predict true");
console.log(car !== 'subaru');

// Test no 5
console.log("Is car < 'subaru' ? I predict true");
console.log(car < 'subaru');

// Test no 6
console.log("Is car > 'subaru' ? I predict true");
console.log(car > 'subaru');

// Test no 7
console.log("Is car <= 'subaru' ? I predict true");
console.log(car <= 'subaru');

// Test no 8
console.log("Is car >= 'subaru' ? I predict true");
console.log(car >= 'subaru');

// Test no 9
console.log("Is car ? I predict true");
console.log(car === car);

// Test no 10
console.log("Is !car < 'subaru' ? I predict true");
console.log(!car);

// Assignment 24
// equality & inequality
let myName: string = "Farhan";
console.log(myName == "Farhan");
console.log(myName !== "farhan");

// numeric
let myNumber = 10;
console.log(myNumber == 10);
console.log(myNumber !== 10);
console.log(myNumber > 10);
console.log(myNumber < 10);
console.log(myNumber >= 10);
console.log(myNumber <= 10);

// & or or
let num1 = 10;
let num2=5;
console.log(num1 > 9 && num2 < 5);
console.log(num1 > 9 || num2 < 5);

let myArray = ["ali", "ahsan"];
let myString = "Sana";
console.log(Array.isArray(myArray));
console.log(Array.isArray(myString));

// Assignment 25
let alienCar: string = "green";
if (alienCar == "green")
    console.log("You just earned 5 points");

if (alienCar == "red")
    console.log("no output");


// Assignment 26
// let alienColor: string = "green";
// if (alienColor == "green"){
//     console.log("You just earned 5 points");
// }
// else {
//     console.log("Player just earned 10 points");
// }
let alienColor: string = "red";
if (alienColor == "green"){
    console.log("You just earned 5 points");
}
else {
    console.log("Player just earned 10 points");
}

// Assignment 27
let alienColor1: string = "yellow";
if (alienColor1 == "green"){
    console.log("You just earned 5 points");
} else if (alienColor1 == "yellow") {
    console.log("Player just earned 10 points");
}
else if (alienColor1 == "red") {
    console.log("Player just earned 15 points");
}

// Assignment 28
let age: number = 50;
if (age < 2){
    console.log("The person is a baby");
} else if (age < 4) {
    console.log("The person is a toddler");
}
else if (age < 13) {
    console.log("The person is a kid");
}
else if (age < 20) {
    console.log("The person is a teenager");
} else if (age < 65) {
    console.log("The person is a adult");
} else {
    console.log("The person is an elder");
}

// Assignment 29
let favorite_fruits: string [] = ["Mango", "Pine Apple", "Banana"];
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mango")
}
if (favorite_fruits.includes("Orange")) {
    console.log("You really like Orange")
}
if (favorite_fruits.includes("Pine Apple")) {
    console.log("You really like Pine Apple")
}
if (favorite_fruits.includes("Peach")) {
    console.log("You really like Peach")
}
if (favorite_fruits.includes("Banana")) {
    console.log("You really like Banana")
}

// Assignment 30
let userNames: string [] = ["Sohail", "admin", "ali", "Uzair", "Ahsan"];
for(let j = 0; j < userNames.length; j++){
    if(userNames[j] == "admin"){
        console.log(`Hello ${userNames[j]}, would you like to see a status report`)
    }
    else {
        console.log(`Hello ${userNames[j]}, thank you for logging in again`);
    }
}

// Assignment 31
let userNames2: string [] = ["Sohail", "admin", "ali", "Uzair", "Ahsan"];
if(userNames2.length === 0){
    console.log("We need to find some users")  
} else{
for(let j = 0; j < userNames2.length; j++){
    if(userNames2[j] == "admin"){
        console.log(`Hello ${userNames2[j]}, would you like to see a status report`)
    }
    else {
        console.log(`Hello ${userNames2[j]}, thank you for logging in again`);
    }
}
}
// To remove all the elements in above array
userNames2 = [];
if(userNames2.length === 0){
    console.log("We need to find some users")  
} 


// Assignment 32
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

// Assignment 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var m = 0; m < numbers.length; m++) {
    if (numbers[m] == 1) {
        console.log("".concat(numbers[m], "st"));
    }
    else if (numbers[m] == 2) {
        console.log("".concat(numbers[m], "nd"));
    }
    else if (numbers[m] == 3) {
        console.log("".concat(numbers[m], "rd"));
    }
    else {
        console.log("".concat(numbers[m], "th"));
    }
}


// Assignment 34
let pizzas: string [] = ["Fajita", "CheezyLover", "AfghaniBeef"];
for(let n = 0; n < pizzas.length; n++){
    console.log(pizzas[n]);
}
for(let n = 0; n < pizzas.length; n++){
    console.log(`I like ${pizzas[n]}`);
}
console.log("I really love pizza! Pizza comes in different variety & allow users to add toppings as they like")

// Assignment 35
let animalNames: string [] = ["cow", "goat", "camel"];
for(let a = 0; a < animalNames.length; a++){
    console.log(animalNames[a])
}
 for(let b of animalNames){
    console.log(`${b} is a domestic animal`);
 }       
 console.log(`All these animals are pet`);

// Assignment 36
// function make_shirt(size: number, label: string){
//     return size + label
//     return `My shirt size is ${size} & label is ${label}`
// }
// let callFunc = make_shirt(35, " Happy Winter Day");

// console.log(callFunc);
let myFunc = (size: number, label: string) => {
    return size + label
}
console.log(myFunc(36, " Happy winter day"))


// Assignment 37
// Making large as default
// if u have 2 parameters have a default one
// then u place dafault parameters in last place

// function make_shirt(size: string, label: string){
//     return size + label
// }

// Making large as default
// let make_shirt = (label: string, size: string = "Large")  => {
//     return size + label
// }
// console.log(make_shirt(" I love typescript"))

// // Making medium as default
// let make_shirt = (label: string, size: string = "Medium")  => {
//     return size + label
// }
// console.log(make_shirt(" I love typescript"))

// Making shirt of any size
// Making large as default
let make_shirt = (label: string, size: string)  => {
    return size + label
}
console.log(make_shirt(" any size", "I love typescript"))


// Assignment 38
let describe_city = (city: string, country: string = "Pakistan")  => {
    return `${city} is in ${country}`
}
console.log(describe_city("Karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("Islamabad"));
console.log(describe_city("Dubai", "UAE"));

// Assignment 39
var city_country = function (city, country) {
    return `${city}, ${country}`;
};
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Dubai", "UAE"));
console.log(city_country("London", "UK"));
console.log(city_country("Beijing", "China"));

// Assignment 40
// let make_album = (artistName: string, albumTitle: string)  => {
//     return {artistName, albumTitle}
// }
// let album1 = make_album("Ali", "Mausam-e-Barsat")
// let album2 = make_album("Ahsan", "Mausam-e-Dil")
// let album3 = make_album("Fiza", "Mausam-e-Bahar")
// console.log(album1);
// console.log(album2);
// console.log(album3);

// Track has been added
let make_album = (artistName: string, albumTitle: string, noofTracks?: number)  => {
    return {artistName, albumTitle, noofTracks}
}
let album1 = make_album("Ali", "Mausam-e-Barsat", 30)
let album2 = make_album("Ahsan", "Mausam-e-Dil", 16)
let album3 = make_album("Fiza", "Mausam-e-Bahar")
console.log(album1);
console.log(album2);
console.log(album3);

// Assignment 41
let magicianNames: string [] = ["Ali", "Ahsan", "Usman"];
function show_megicians(){
    for(let magicianName of magicianNames){
        console.log(magicianName)
    }
}
show_megicians();

// Assignment 42
let magicianNames1: string [] = ["Ali", "Ahsan", "Usman"];
function show_megician(greet: string){
    for(let item of magicianNames1){
        console.log(greet, item)
    }
}
show_megician("Hello, Mr.");

// Assignment 43
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

// Assignment 44
function sandwiches(...item1: string[]){
    return `I want Sandwich of ${item1}`
}
let collection1 = sandwiches("Ham", "lettuce", "Cheese");
let collection2 = sandwiches("Ham", "lettuce");
let collection3 = sandwiches(); // without arguments
console.log(collection1);
console.log(collection2);
console.log(collection3);


// Assignment 45
function carDetails (manufacturer: string, modelName: string, ...additionalInfo) {
    const car = {manufacturer, modelName, ...Object.fromEntries(additionalInfo)};
    return car;    
}

const myCar = carDetails ("Toyata", "Corrola", ['color', 'Blue'], ['Year', 2024]);
console.log(myCar);