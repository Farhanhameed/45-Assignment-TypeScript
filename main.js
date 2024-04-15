// Assignment 1
// console.log("Hello World!");
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var quotes = "A person who never made a mistake never tried anything new";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quotes, ".\""));
// Assignment 5
var famous_person = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
// Assignment 6
var personName = "\t\n Farhan Abdul Hameed \n\t";
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
var favoriteNo = 5;
console.log("My favoutite number is ".concat(favoriteNo));
// Assignment 10
// My name is Farhan Abdul Hameed
// Today is March 16, 2024
// Print the favourite number
var favoriteNum = 5;
console.log("My favoutite number is ".concat(favoriteNum));
// Output is 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Assignment 11
var names = ["Ali", "Ahsan", "Usman"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// Assignment 12
var names = ["Ali", "Ahsan", "Usman"];
var messages = "Would like to eat Biryani?";
console.log(names[0] + " " + messages);
console.log(names[1] + " " + messages);
console.log(names[2] + " " + messages);
// Assignment 13
var transportation = ["BRV", "Aqwa", "Honda 150"];
transportation.map(function (items) { return console.log("I would like to own ".concat(items)); });
// Assignment 14
var Guestnames = ["Ali", "Ahsan", "Usman"];
Guestnames.map(function (items) { return console.log("Dear ".concat(items, " you are invited for Dinner today at my home")); });
// Assignment 15
var Guestname = ["Ali", "Ahsan", "Usman"];
var notAttend = "Ali";
console.log(notAttend + " " + "unable to attend Dinner");
var newGuest = "Fiza";
Guestname[Guestname.indexOf(notAttend)] = newGuest;
// console.log(Guestname);
Guestname.map(function (items) { return console.log("Dear ".concat(items, " you are invited for Dinner today at my home")); });
// `` This is called as template litrats
// Assignment 16
var Guestname = ["Ali", "Ahsan", "Usman"];
Guestname.map(function (items) { return console.log("Dear ".concat(items, ", i found a bigger table so I can invited more people")); });
var Guestbeg = "Hussain";
Guestname.unshift(Guestbeg);
console.log(Guestname);
// Add middle of an array
var middleGuset = "Haseeb";
Guestname.splice(2, 0, middleGuset);
console.log(Guestname);
// Add last in an array
Guestname.push("Hamza");
console.log(Guestname);
Guestname.map(function (items) {
    return console.log("Dear ".concat(items, " You all are invited to dinner party at my home tonight"));
});
// Assignment 17
var Guestname = ["Hussain", "Ali", "Ahsan", "Haseeb", "Usman", "Hamza"];
console.log("Due to limited space, only two people can be invited for dinner");
while (Guestname.length > 2) {
    var removeGuest = Guestname.pop();
    console.log("Sorry ".concat(removeGuest, " you are no longer invited for dinner today"));
}
Guestname.forEach(function (Guestname) {
    console.log("Dear ".concat(Guestname, " you are still invited for dinner"));
});
// remove the last two names from the list
// Guestname.pop();
// Guestname.pop();
// Guestname.pop();
// Guestname.pop();
console.log("Final guest list ".concat(Guestname));
// Assignment 18
var placetoVisit = ["Japan", "America", "Pakistan", "Malaysia", "Germany"];
// console.log(`Original order: ${placetoVisit}`);
console.log("Original order: ", placetoVisit);
// console.log("In sort order: ", placetoVisit.sort());
console.log("In sort order: ", __spreadArray([], placetoVisit, true).sort());
console.log("Already in Original order: ", placetoVisit);
// 2nd method for sorting
var copyofArray = __spreadArray([], placetoVisit, true);
// let copyofArray = placetoVisit.slice();
console.log(copyofArray.sort());
console.log("In reverse order: ", __spreadArray([], placetoVisit, true).reverse());
console.log("Already in Original order: ", placetoVisit);
// 2nd method for reverse
var copyofArray2 = __spreadArray([], placetoVisit, true);
// let copyofArray2 = placetoVisit.slice();
console.log(copyofArray2.reverse());
console.log("In reverse order: ", placetoVisit.reverse());
console.log("Change from Original order: ", placetoVisit.reverse());
console.log("In sort order: ", placetoVisit.sort());
console.log("Change from Original order: ", placetoVisit.reverse());
// Assignment 19
var guestFriend = ["Hussain", "Ali", "Ahsan"];
console.log("I am invited ".concat(guestFriend.length, " number of friends to dinner which are:"));
for (var d = 0; d < guestFriend.length; d++) {
    console.log("".concat(d + 1, ": ").concat(guestFriend[d], " "));
}
// Assignment 20
var listArray = ["Pakistan", "K2", "Nile", "Urdu"];
console.log(listArray);
// Assignment 21
var person = {
    name: "Ahsan",
    fname: "Rehman",
    age: 25
};
console.log(person);
// Assignment 22
var days = ["sat", "sun"];
// console.log(days{2});
console.log(days[1]);
// Assignment 23
var car = "subaru";
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
var myName = "Farhan";
console.log(myName == "Farhan");
console.log(myName !== "farhan");
// numeric
var myNumber = 10;
console.log(myNumber == 10);
console.log(myNumber !== 10);
console.log(myNumber > 10);
console.log(myNumber < 10);
console.log(myNumber >= 10);
console.log(myNumber <= 10);
// & or or
var num1 = 10;
var num2 = 5;
console.log(num1 > 9 && num2 < 5);
console.log(num1 > 9 || num2 < 5);
var myArray = ["ali", "ahsan"];
var myString = "Sana";
console.log(Array.isArray(myArray));
console.log(Array.isArray(myString));
// Assignment 25
var alienCar = "green";
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
var alienColor = "red";
if (alienColor == "green") {
    console.log("You just earned 5 points");
}
else {
    console.log("Player just earned 10 points");
}
// Assignment 27
var alienColor1 = "yellow";
if (alienColor1 == "green") {
    console.log("You just earned 5 points");
}
else if (alienColor1 == "yellow") {
    console.log("Player just earned 10 points");
}
else if (alienColor1 == "red") {
    console.log("Player just earned 15 points");
}
// Assignment 28
var age = 50;
if (age < 2) {
    console.log("The person is a baby");
}
else if (age < 4) {
    console.log("The person is a toddler");
}
else if (age < 13) {
    console.log("The person is a kid");
}
else if (age < 20) {
    console.log("The person is a teenager");
}
else if (age < 65) {
    console.log("The person is a adult");
}
else {
    console.log("The person is an elder");
}
// Assignment 29
var favorite_fruits = ["Mango", "Pine Apple", "Banana"];
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mango");
}
if (favorite_fruits.includes("Orange")) {
    console.log("You really like Orange");
}
if (favorite_fruits.includes("Pine Apple")) {
    console.log("You really like Pine Apple");
}
if (favorite_fruits.includes("Peach")) {
    console.log("You really like Peach");
}
if (favorite_fruits.includes("Banana")) {
    console.log("You really like Banana");
}
// Assignment 30
var userNames = ["Sohail", "admin", "ali", "Uzair", "Ahsan"];
for (var j = 0; j < userNames.length; j++) {
    if (userNames[j] == "admin") {
        console.log("Hello ".concat(userNames[j], ", would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(userNames[j], ", thank you for logging in again"));
    }
}
// Assignment 31
var userNames2 = ["Sohail", "admin", "ali", "Uzair", "Ahsan"];
if (userNames2.length === 0) {
    console.log("We need to find some users");
}
else {
    for (var j = 0; j < userNames2.length; j++) {
        if (userNames2[j] == "admin") {
            console.log("Hello ".concat(userNames2[j], ", would you like to see a status report"));
        }
        else {
            console.log("Hello ".concat(userNames2[j], ", thank you for logging in again"));
        }
    }
}
// To remove all the elements in above array
userNames2 = [];
if (userNames2.length === 0) {
    console.log("We need to find some users");
}
// Assignment 32
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
var pizzas = ["Fajita", "CheezyLover", "AfghaniBeef"];
for (var n = 0; n < pizzas.length; n++) {
    console.log(pizzas[n]);
}
for (var n = 0; n < pizzas.length; n++) {
    console.log("I like ".concat(pizzas[n]));
}
console.log("I really love pizza! Pizza comes in different variety & allow users to add toppings as they like");
// Assignment 35
var animalNames = ["cow", "goat", "camel"];
for (var a = 0; a < animalNames.length; a++) {
    console.log(animalNames[a]);
}
for (var _i = 0, animalNames_1 = animalNames; _i < animalNames_1.length; _i++) {
    var b = animalNames_1[_i];
    console.log("".concat(b, " is a domestic animal"));
}
console.log("All these animals are pet");
// Assignment 36
// function make_shirt(size: number, label: string){
//     return size + label
//     return `My shirt size is ${size} & label is ${label}`
// }
// let callFunc = make_shirt(35, " Happy Winter Day");
// console.log(callFunc);
var myFunc = function (size, label) {
    return size + label;
};
console.log(myFunc(36, " Happy winter day"));
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
var make_shirt = function (label, size) {
    return size + label;
};
console.log(make_shirt(" any size", "I love typescript"));
// Assignment 38
var describe_city = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(city, " is in ").concat(country);
};
console.log(describe_city("Karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("Islamabad"));
console.log(describe_city("Dubai", "UAE"));
// Assignment 39
var city_country = function (city, country) {
    return "".concat(city, ", ").concat(country);
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
var make_album = function (artistName, albumTitle, noofTracks) {
    return { artistName: artistName, albumTitle: albumTitle, noofTracks: noofTracks };
};
var album1 = make_album("Ali", "Mausam-e-Barsat", 30);
var album2 = make_album("Ahsan", "Mausam-e-Dil", 16);
var album3 = make_album("Fiza", "Mausam-e-Bahar");
console.log(album1);
console.log(album2);
console.log(album3);
// Assignment 41
var magicianNames = ["Ali", "Ahsan", "Usman"];
function show_megicians() {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magicianName = magicianNames_1[_i];
        console.log(magicianName);
    }
}
show_megicians();
// Assignment 42
var magicianNames1 = ["Ali", "Ahsan", "Usman"];
function show_megician(greet) {
    for (var _i = 0, magicianNames1_1 = magicianNames1; _i < magicianNames1_1.length; _i++) {
        var item = magicianNames1_1[_i];
        console.log(greet, item);
    }
}
show_megician("Hello, Mr.");
// Assignment 43
var magicianNames2 = ["Ali", "Ahsan", "Usman"];
// Making a copy of array
var magicianNamescopy = __spreadArray([], magicianNames2, true);
function show_magicians(greet) {
    var withGreetings = " ";
    for (var _i = 0, magicianNamescopy_1 = magicianNamescopy; _i < magicianNamescopy_1.length; _i++) {
        var items = magicianNamescopy_1[_i];
        withGreetings += "".concat(greet, " ").concat(items, " \n");
    }
    return withGreetings;
}
var myGreetings = show_magicians("Hello");
var makeArray = myGreetings.split('\n');
console.log(makeArray);
// Original Array
console.log(magicianNames2);
// Assignment 44
function sandwiches() {
    var item1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item1[_i] = arguments[_i];
    }
    return "I want Sandwich of ".concat(item1);
}
var collection1 = sandwiches("Ham", "lettuce", "Cheese");
var collection2 = sandwiches("Ham", "lettuce");
var collection3 = sandwiches(); // without arguments
console.log(collection1);
console.log(collection2);
console.log(collection3);
// Assignment 45
function carDetails(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, modelName: modelName }, Object.fromEntries(additionalInfo));
    return car;
}
var myCar = carDetails("Toyata", "Corrola", ['color', 'Blue'], ['Year', 2024]);
console.log(myCar);
