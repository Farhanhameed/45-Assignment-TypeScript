var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
