
# Aprendendo Typescript

Curso: [Iniciando com Typescript](https://www.udemy.com/course/iniciando-com-typescript/)
Plataforma: Udemy

## O que aprendi

- [Tipagem](#tipagem)
- [Módulos](#modulos)
- [Utilizando com webpack](#utilizando-com-webpack)

### Tipagem

#### Básico

String
`const texto:string = "Tipo string"`

Number
`const numero:number = 13`

Boolean
`let verdadeiroOuFalso:boolean`

Array de string
`let lista:string[] = ["verde", "azul"]`

Array pode ser declarado de outra forma
`let lista:Array<string> = ["verde", "azul"]`

Array de números
`let listaNumeros:Array<number> = [75,55,14]`

Tipo de dado **enum** semelhante ao objeto
```js
enum  Cor {vermelho, azul, laranja}

let c:Cor = Cor.azul
console.log(c);
```
*saída: 1*

```js
console.log(Cor[2]);
```
*saída: laranja*

Tipo de dado **any** aceita qualquer outro valor
```js
let valor:any
valor =  "texto"
valor =  13

let arrayAny:any[] = [40, "texto", {}]
```

#### Função

Em funções é preciso passar a tipagem dos argumentos e também o retorno da função
```js
function listaNomes(lista:string[]):void {
	console.log(lista);
}
```

#### Classes

Para classes pode-se declarar os atributos antes ou diretamente no método construtor
```js
class Veiculo {
	public modelo:string
	
	constructor(modelo:string) {
		this.modelo = modelo
	}
}

class Veiculo {
	constructor(public modelo:string, public rodas:number) {
		this.modelo = modelo
	}
	
	getModelo():string {
		return  this.modelo;
	}
	
	getRodas():number {
		return  this.rodas;
	}
}

const vectra:Veiculo  =  new Veiculo('Vectra', 4)
```

#### Interfaces

Atributos presentes na interface são públicos, atributos do tipo privado não são passados na interface
```js
interface IVeiculo {
	modelo:string
	rodas:number
	getModelo()
	getRodas()
}
```

### Módulos

Com typescript é possível utilizar módulos para organizar o código
`import Veiculo from  "./veiculo-class";`

### Utilizando com webpack

Para utilizar webpack é preciso instalar o loader de Typescript via terminal:
`npm install typescript webpack webpack-cli ts-loader`

e configurar o loader no arquivo de configuração **webpack.config.js**
```js
module.exports  = {
	entry:  './src/app.ts',
	output: {
		filename:  './app.js'
	},

	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: [".ts", ".tsx", ".js"]
	},

	module: {
		rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test:  /\.tsx?$/, loader:  "ts-loader" }
		]
	}
}
```

para executar execute: `npm webpack -w`