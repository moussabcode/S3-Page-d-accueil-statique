let panier=[ 15 , 42, 5, 89, 12, 50];
let somme=0;
let nombrecher=0;
let sommecher=0;
for(i=0; i<panier.length;i++){
    somme=somme + panier[i];
    if(panier[i]>=20){
        nombrecher=nombrecher + 1;
        sommecher=sommecher + panier[i];
    }
}
console.log(somme);
console.log(sommecher);
console.log(nombrecher);