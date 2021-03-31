// exo **************************** 1 
function inverce (a,b){
    c=0
    c=a 
    a=b
    b=c
    return "la valeur de a : " + a + " la valeur de b : " + b
}
console.log(inverce (2,3));
 
// exo **************************** 2
function affiche(){
       nom= "wajdi"
       age=25
       homme= true
       return "la nome : " + nom + " lage : " + age + " sex : " + homme
}
console.log(affiche());
// exo **************************** 3
function somme(a,b){
    return a+b
}
console.log("somme de a + b : ",somme(100,16))
// exo **************************** 3
function minSecand(minutes) {
    return  minutes * 60;
  }
  console.log("les minute en secande : ",minSecand(30))
// exo **************************** 4
function increment(n) {
  return 'le nombre apre est : ' + ++n;
}
console.log(increment(5))
// exo **************************** 5
function surface(base, hauteur) {
  return base * hauteur /2
}
console.log("la surface : ",surface(12,6))
// exo **************************** 7
console.log("le maximum : ",Math.max(6,8,9,74))
// exo **************************** 8
function first() {
var tab=[31,26,12,36,95]

    return tab[0];
  }
  console.log("le premier element du tableau : ",first())
// exo **************************** 10
  function resteDiv(a, b) {
    return a % b; 
  }
console.log("la reste : ",resteDiv(15,5))
// exo **************************** 11
function reteurn(a, b) {
  
    return a + b < 100;
  }
console.log("la resultat : ",reteurn(15,66))  
// exo **************************** 12
function heureSeconde(heure) {
    return heure * 3600;
  }
  console.log("l heure en secande egale : ",heureSeconde(5))
// exo **************************** 13
function checkNbr(n) {
    return n <= 0;
  }
  console.log("la resultat est : ",checkNbr(5))
 // exo **************************** 14
  function isEqual(nbr1, nbr2) {
    return nbr1 === nbr2
  }
  console.log("la fonction renvoi : ",isEqual(2.5))
  // exo **************************** 15
  function isDivisible(n) {
    return n % 5 === 0;
  }
  console.log("la fonction renvoi : ",isDivisible(54))
  // exo **************************** 16
  function hmTos(heure, minute) {
    return (heure*3600) + (minute*60);
  }
  console.log("l heur en minute est : ",hmTos(3,6))

  // exo **************************** 18
  function getLastElem() {
    tab=[5,5,6,9]
    return tab[tab.length - 1]
  }
  console.log("la dernier element du tableau : ",getLastElem())
  // exo **************************** 19
  function checkEq(a, b) {
    return a === b;
}
console.log("les duex nombre sont : ",checkEq(8,2))
// exo **************************** 20
function isEmpty(str) {
  return str.length == 0;
}
console.log("la chaine : ",isEmpty('was'))