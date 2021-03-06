

function exemplo() {

}

function BemVindo(x: string[] | string) {
   if (Array.isArray(x)) {
         console.log("Ola, " + x.join(" and "));
   }  else {
          console.log("Bem vindo " + x);
   }
}


function BemVindoo(y: number[] | string) {
   if (Array.isArray(y)) {
         console.log("Olam, " + y.join(" and "));
   } else {
         console.log("Bem vindo " + y); 
   }
} 

function getPrimeiro(x: number[] | string) {
   return x.slice(0, 3); 
}

function getSecond(y: number[] | string) {
  return y.slice(0, 4); 
}

let nameString = "Dog"; 
nameString = "cachorro";
nameString;


let mudarString = "Ola mundo!!!";
mudarString = "ola mundo!!";
mudarString;


const constantString = "Hello World!!!";
constantString;

console.log(mudarString);
console.log(nameString);