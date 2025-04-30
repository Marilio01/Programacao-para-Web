function carrosAposAno(carros, ano) {
    return carros.filter(carro => carro.ano > ano);
}

const carros = [
    { marca: 'Mercedes-Benz', modelo: 'AMG GT Black Series', ano: 2021 },
    { marca: 'Audi', modelo: 'R8 V10 Performance', ano: 2022 },
    { marca: 'McLaren', modelo: '765LT', ano: 2021 },
    { marca: 'Aston Martin', modelo: 'Vantage F1 Edition', ano: 2022 },
    { marca: 'Bugatti', modelo: 'Chiron Super Sport', ano: 2022 },
    { marca: 'Koenigsegg', modelo: 'Jesko', ano: 2022 },
    { marca: 'Pagani', modelo: 'Huayra R', ano: 2021 },
    { marca: 'Rimac', modelo: 'Nevera', ano: 2022 },
    { marca: 'Pininfarina', modelo: 'Battista', ano: 2022 },
];

console.log(carrosAposAno(carros, 2022)); 