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
