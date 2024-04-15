// let make_album = (artistName: string, albumTitle: string)  => {
//     return {artistName, albumTitle}
// }
// let album1 = make_album("Ali", "Mausam-e-Barsat")
// let album2 = make_album("Ahsan", "Mausam-e-Dil")
// let album3 = make_album("Fiza", "Mausam-e-Bahar")
// console.log(album1);
// console.log(album2);
// console.log(album3);
// Track has been added
var make_album = function (artistName, albumTitle, noofTracks) {
    return { artistName: artistName, albumTitle: albumTitle, noofTracks: noofTracks };
};
var album1 = make_album("Ali", "Mausam-e-Barsat", 30);
var album2 = make_album("Ahsan", "Mausam-e-Dil", 16);
var album3 = make_album("Fiza", "Mausam-e-Bahar");
console.log(album1);
console.log(album2);
console.log(album3);
