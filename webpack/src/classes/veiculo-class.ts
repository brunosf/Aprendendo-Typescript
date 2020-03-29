import { IVeiculo } from "../interfaces/veiculo-interface";

class Veiculo implements IVeiculo {
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

export default Veiculo