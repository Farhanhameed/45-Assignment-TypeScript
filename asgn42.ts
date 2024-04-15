let magicianNames1: string [] = ["Ali", "Ahsan", "Usman"];
function show_megician(greet: string){
    for(let item of magicianNames1){
        console.log(greet, item)
    }
}
show_megician("Hello, Mr.");