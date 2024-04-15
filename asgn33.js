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
