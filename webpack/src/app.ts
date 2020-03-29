import Veiculo from "./classes/veiculo-class";
import Moto from "./classes/moto-class";

const vectra:Veiculo = new Veiculo('Vectra', 4)

console.log(vectra);

const biz:Moto = new Moto('Biz', 2)

console.log(biz);
document.getElementById('app').innerHTML = biz.getModelo()