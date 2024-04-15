var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
