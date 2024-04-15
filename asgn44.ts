function sandwiches(...item1: string[]){
    return `I want Sandwich of ${item1}`
}
let collection1 = sandwiches("Ham", "lettuce", "Cheese");
let collection2 = sandwiches("Ham", "lettuce");
let collection3 = sandwiches(); // without arguments
console.log(collection1);
console.log(collection2);
console.log(collection3);