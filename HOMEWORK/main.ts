// //home work TITLE CASE

// let fullName:string='nida nasar';

// //console.log(fullName.toLowerCase());
// //console.log(fullName.toUpperCase());

// let fullNametoLower=fullName.toLowerCase()
// console.log(fullNametoLower)

// //title case

// //console.log(fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase());


let sentence:string='i like kiwi';

let sentencesplitted:string[]=sentence.split(' ')
for(let x=0;x<sentencesplitted.length;x++){
let character =sentencesplitted[x]
sentencesplitted[x]=character.charAt(0).toUpperCase() + character.slice(1).toLowerCase()
}

let sentenceTiltlCase:string=sentencesplitted.join(" ");
//console.log(sentenceTiltlCase)

function titleCase(msg:string):string{
    let msgsplitted:string[]=msg.split(' ')
for(let x=0;x<msgsplitted.length;x++){
const character =msgsplitted[x]
msgsplitted[x]=character.charAt(0).toUpperCase() + character.slice(1).toLowerCase()
}
return msgsplitted.join(' ');
}
let makeTitlecase=titleCase('my name is nida');
//console.log(makeTitlecase)

console.log(titleCase('broadwing impex'))





//practice
//title case

let companyName:string='oceanworld private limited';

function convTitleCase(text:string):string{
let companyNamesplitted=companyName.split(" ")
for(let i=0;i<companyNamesplitted.length;i++){
let character=companyNamesplitted[i]

companyNamesplitted[i]=character.charAt(0).toUpperCase() + character.slice(1).toLowerCase();
}
return companyNamesplitted.join(" ")
}
console.log(convTitleCase(companyName))