/*
let prenoms= ["ali","sara","yassine","nadia","karim"];
let prenom = "nadia";
let position=-1;
for(i=0;i<prenoms.length;i++){
    if(prenom===prenoms[i]){
        position=i;
        break;
    }
};
if(position !== -1){
    console.log("Nadia se trouve à l'index ",i);
}

let notes=[5,8,2,89,13,0];
let max=notes[0];
let position=0;
for(i=0;i<notes.length;i++){
    if(max<notes[i]){
        max=notes[i];
        position=i;
    }
}
console.log("le nombre max : ",max);
console.log("la position de max nombre : ",position);
*/

let nombres= [9,18,40,42,38,25,42,31];
let max=nombres[0];
let positionmax=0;
let min=nombres[0];
let positionmin=0;
let search= 31;
for(i=0;i<nombres.length;i++){
    if(max<nombres[i]){
        max=nombres[i];
        positionmax=i;
    }
    if(min>nombres[i]){
        min=nombres[i];
        positionmin=i;
    }
    if(nombres[i]===search){
        positionsearch=i;
        console.log("Nombre search : ",search);
        console.log("Position de nombre : ",positionsearch);
    }
}
console.log("Nombre max : ",max);
console.log("Position de max nombre : ",positionmax);
console.log("Nombre min : ",min);
console.log("Position de min nombre : ",positionmin);