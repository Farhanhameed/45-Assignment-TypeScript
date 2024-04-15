let personName1:string = "Farhan abdul hameed";
console.log("Lower Case: " + personName1.toLowerCase())
console.log("Upper Case" + personName1.toUpperCase())
console.log("Title Case " + personName1.replace(/\b\w/g, c=> c.toUpperCase()))