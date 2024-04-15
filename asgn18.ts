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