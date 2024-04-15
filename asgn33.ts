let numbers: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for(let m = 0; m < numbers.length; m++){
    if(numbers[m] == 1){
        console.log(`${numbers[m]}st`)
    }
    else if(numbers[m] == 2){
        console.log(`${numbers[m]}nd`)
    }
    else if(numbers[m] == 3){
        console.log(`${numbers[m]}rd`)
    }
    else{
        console.log(`${numbers[m]}th`)
    }
}