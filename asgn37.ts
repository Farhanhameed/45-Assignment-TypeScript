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
let make_shirt = (label: string, size: string)  => {
    return size + label
}
console.log(make_shirt(" any size", "I love typescript"))
