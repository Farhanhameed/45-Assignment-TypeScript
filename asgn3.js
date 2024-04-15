var personName1 = "Farhan abdul hameed";
console.log("Lower Case: " + personName1.toLowerCase());
console.log("Upper Case" + personName1.toUpperCase());
console.log("Title Case " + personName1.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
