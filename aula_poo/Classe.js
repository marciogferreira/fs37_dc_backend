class Carro {
    cor;
    marca;
    modelo;
    km;

    constructor(cor, m, mo, k) {
        this.cor = cor;
        this.marca = m;
        this.modelo = mo;
        this.km = k;
    }

    apresentarDados() {
        console.log(`Cor: ${this.cor}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Quilometragem: ${this.km} km`);
    }

    acelerar() {}
    frear() {}
}
const c1 = new Carro("Vermelho", "Fiat", "Uno", 0);
console.log(c1.apresentarDados());

const c2 = new Carro();
const c3 = new Carro();
const c4 = new Carro();


const carro1 = {
    cor: "vermelho",
    marca: "Fiat",
    modelo: "Uno",
    km: 0,
    acelerar(){

    },
    frear() {

    }
}

const carro2 = {
    cor: "branco",
    marca: "Fiat",
    modelo: "Uno",
    km: 0,
    acelerar(){

    },
    frear() {
        
    }
}


const carro3 = {
    cor: "branco",
    marca: "Fiat",
    modelo: "Uno",
    km: 0,
    acelerar(){

    },
    frear() {
        
    }
}