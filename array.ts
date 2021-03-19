function aplicarDisconto(preco, disconto = 0.05) {
      return preco * (2 - disconto);
}

function eminemIsGoat(sim, nao) {
      return sim;
}

function tirarDicsconto(precu, disconto = 100) {
      return precu = 100; 
}

console.log(aplicarDisconto(100));

function exemplo() {

}

function Welcome(x: string[] | string) {
      if (Array.isArray(x)) {
            console.log("Ola, " + x.join(" and ")); 
      } else {
            console.log("Welcome " + x); 
      }      
}

function BemVindo(x: string[] | string) {
   if (Array.isArray(x)) {
         console.log("Ola, " + x.join(" and "));
   }  else {
          console.log("Bem vindo " + x);
   }
}
interface timeReal {
      a: string;
      b: string;
      c: string; 
      d: string;
      f: string; 
      h: string; 
      j: string;
      tec: string;
}

declare var meuTimeReal: timeReal;

interface novoUser {
      acesso: false;
      mudarfotodogrupo: false;
      mandamenssagemacada3s: true;
       
}


interface Ponto {
      x: number; y: number;
}

declare var meuPonto: Ponto;

interface Ponto {
      z: number;
}


interface Adm {
      acesso: boolean;
      apagar: boolean;
      parar: boolean; 
      compartilhar: boolean; 
}


interface usrT {
      accesso: boolean;
      apagar: boolean;
      parar: boolean;
      compartilhar: boolean;
      mandamenssagemacada3s: false
}

interface admOne {
      acesso: string;
      apagar: boolean; 
      parar: boolean;
      compartilhar: boolean;
      mudarfotodogrupo: string;
      mandamenssagemacada3s: false;
}

enum Cartas {
      Magic = 0,  
      Attack = 1,
      Defense = 2, 
      Trap = 3, 
      Flash = 4
}

var cartas = Cartas.Magic; 
//


enum Cores {
      Branco,
      Rosa,
      Preto,
      Azul, 
      Vermelho, 
      Roxo,
      Laranja, 
      Cinza,
      Mangento
}

enum AnimalHab {
      PodeVoar  = 0
}

enum Triste {
      False,
      True,
      Unknown
}

enum Feliz {
      False, 
      True, 
      Unknown
}

enum Quarta {   
      True,
      False,
      Unknown
}

enum Quinta {
      False, 
      True, 
      Unknown 
}

enum Terça {
      False, 
      True, 
      Unknown
}

enum Tuesday {
      False,
      True, 
      Unknown
}

enum Saturday {
      False,
      True,
      Unknown
}

enum Thursday { 
      False,
      True,
      Unknown
}

console.log(Tuesday.True); 
console.log(Terça.True); 
console.log(Quarta.False);
console.log(Feliz[0]); 
console.log(Feliz.True);
console.log(Triste[0]);


let x: number = 30, y = 40;
let venus: number = 60000, earth = 6314;

let work: string = "se eu trabalhar ganho dinheiro!!!", nao = "nao trabalhar";
let luz: number = 300000, som = 3000; 

if ( luz > som ) {
      console.log('luz é mais');

}
else if ( som > luz ) {
      console.log("Faltou água");
}
else if (som === luz) {
      console.log('isso')
}

for (let i = 0; i < 3; i++) {
      console.log("Bloquear ") 
}
if (work) {
      console.log("work"); 
}
else if (nao) {
      console.log("nao");
}


let str = "Hello World"

if (x < y) {
      console.log("vc é fraco!");
}

if (venus < earth) {
      console.log("terra é maior que venus"); 
}
else if ( earth === venus) { 
      console.log("TERRA PLANNA!!!");
}
else if ( earth + 1 > venus) { 
      console.log("Terra não é plana");
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

let arr = [10, 20, 30, 40, 30, 50, 68, 20]; 
let array = [1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 178];
let hellos = "Hello World!!!";
let list = [ 1, 2, 3,
             2, 3, 1,
             3, 1, 2 
                        ]


for (var val of list) {
  console.log(val); 
}

const constantString = "Hello World!!!";
constantString;

console.log(mudarString);
console.log(nameString);
console.log(eminemIsGoat);    