let nome:string = 'Bruno'
let texto:string = `Hello ${nome}`

console.log(texto);

const greeting = (nome:string):string => {
  return `Hello ${nome}`
}

console.log(greeting(nome));

// Define tipos dos argumentos e o retorno da função (para funcções sem retorno -> void)
const getPerfil = function(nome:string, idade:number, email:string):void {
  console.log(nome, idade, email);
}

function getIdade(idade:number):string {
  return idade + ' anos';
}

console.log(getIdade(28));

// Vantagem Typescript: acusa erro em tempo de desenvolvimento 
// quando passado variaveis de tipos diferentes dos definidos
// getPerfil(50, 13, 'cobain.bruno@gmail.com')

// Tipos
const nomeCompleto:string = "Bruno Ferreira"
const idade:number = 28
let eMaior:boolean

if (idade > 17) {
  eMaior = true
} else {
  eMaior = false
}

let lista:string[] = ["verde", "azul"]
let listaNumeros:Array<number> = [75,55,14]

enum Cor {vermelho, azul, laranja}

let c:Cor = Cor.azul

console.log(c);
console.log(Cor[2]);

// o tipo any define que a variavel pode receber qualquer tipo
let valor:any
valor = "texto"
valor = 13

let arrayAny:any[] = [40, "texto", {}]

function listaNomes(lista:string[]):void {
  console.log(lista);
}

interface IVeiculo {
  // Atributos presentes na interface são publicos, 
  // Atributos do tipo private não são passados na interface
  modelo:string
  rodas:number
  getModelo()
  getRodas()
}

// Classes
// class Veiculo {
//   public modelo:string

//   constructor(modelo:string) {
//     this.modelo = modelo
//   }
// }

class Veiculo implements IVeiculo {
  // pode-se declarar os atributos ou criar eles diretamente no constructor
  // public modelo:string
  // public rodas:number
  
  // ou declara-los diretamente no constructor
  constructor(public modelo:string, public rodas:number) {
    this.modelo = modelo
  }

  getModelo():string {
    return this.modelo;
  }

  getRodas():number {
    return this.rodas;
  }
}

const vectra:Veiculo = new Veiculo('Vectra', 4)

console.log(vectra);

class Moto extends Veiculo{}

const biz:Moto = new Moto('Biz', 2)

console.log(biz.getModelo());




