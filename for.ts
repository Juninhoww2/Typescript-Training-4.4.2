interface trabalho {
   header: string;
   nome: string;
   credito: number;
}

interface Identidade { 
   id: number;
   nome: string;
}

interface Contato {
   email: string;
   telefone: string;
}

type Employee = Identidade & Contato; 

let e: Employee = {
   id: 100,
   nome: 'Jose Alexandre', 
   email: 'jose2163082@gmail.com',
   telefone: '(81)98832-0534'
};

type Customer = trabalho & Contato;

let c: Customer = {
   header: '========================',
   nome: 'dcf', 
   credito: 100000,
   email: 'jose2163082@gmail.com',
   telefone: '(81)98832-0534'
};

console.log(c.header);
console.log(c.header);
console.log(c.nome);
console.log(c.credito);