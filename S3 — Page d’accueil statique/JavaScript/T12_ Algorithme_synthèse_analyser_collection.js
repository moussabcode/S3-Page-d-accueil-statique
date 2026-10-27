let ventes= [110,75,150,180,90,130,100,160];
let totalventes=0;
let totaleaffaires=0;
let maxvente=ventes[0];
let max=ventes[0];
let min=ventes[0];
let exceptionnelles=0;
let totaleexc=0;
for(i=0;i<ventes.length;i++){
    totalventes= totalventes + ventes[i];
    totaleaffaires= totaleaffaires + 1;
    if(max<ventes[i]){
        max=ventes[i]
    }
    if(min>ventes[i]){
        min=ventes[i]
    }
    if(ventes[i]>=130){
        exceptionnelles= exceptionnelles + 1;
        totaleexc= totaleexc + ventes[i];
    }
}
console.log("Le nombre total de ventes réalisées :", totalventes);
console.log("Le chiffre d’affaires total (la somme) :", totaleaffaires);
console.log("Le montant de la vente la plus élevée (Maximum) :", max);
console.log("Le montant de la vente la plus faible (Minimum) :", min);
console.log("Le nombre de ventes “Exceptionnelles” :", exceptionnelles);
console.log("Le chiffre d’affaires généré uniquement par ces ventes exceptionnelles :",totaleexc);