let animalNames: string [] = ["cow", "goat", "camel"];
for(let a = 0; a < animalNames.length; a++){
    console.log(animalNames[a])
}
 for(let b of animalNames){
    console.log(`${b} is a domestic animal`);
 }       
 console.log(`All these animals are pet`);