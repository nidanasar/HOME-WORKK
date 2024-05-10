// //home work TITLE CASE
// let fullName:string='nida nasar';
// //console.log(fullName.toLowerCase());
// //console.log(fullName.toUpperCase());
// let fullNametoLower=fullName.toLowerCase()
// console.log(fullNametoLower)
// //title case
// //console.log(fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase());
var sentence = 'i like kiwi';
var sentencesplitted = sentence.split(' ');
for (var x = 0; x < sentencesplitted.length; x++) {
    var character = sentencesplitted[x];
    sentencesplitted[x] = character.charAt(0).toUpperCase() + character.slice(1).toLowerCase();
}
var sentenceTiltlCase = sentencesplitted.join(" ");
//console.log(sentenceTiltlCase)
function titleCase(msg) {
    var msgsplitted = msg.split(' ');
    for (var x = 0; x < msgsplitted.length; x++) {
        var character = msgsplitted[x];
        msgsplitted[x] = character.charAt(0).toUpperCase() + character.slice(1).toLowerCase();
    }
    return msgsplitted.join(' ');
}
var makeTitlecase = titleCase('my name is nida');
//console.log(makeTitlecase)
console.log(titleCase('broadwing impex'));
var companyName = 'oceanworld private limited';
function convTitleCase(text) {
    var companyNamesplitted = companyName.split(" ");
    for (var i = 0; i < companyNamesplitted.length; i++) {
        var character = companyNamesplitted[i];
        companyNamesplitted[i] = character.charAt(0).toUpperCase() + character.slice(1).toLowerCase();
    }
    return companyNamesplitted.join(" ");
}
console.log(convTitleCase(companyName));
