const carList  = [];

let ferrari = {};
ferrari.nome = "SF-24";
ferrari.pilota = "Charles Leclerc"
ferrari.peso = 798
carList.push(ferrari);

let redbull = {};
redbull.nome = "RB-20";
redbull.pilota = "Max Verstappen"
redbull.peso = 798
carList.push(redbull)

let williams = {};
williams.nome = "FW46";
williams.pilota = "Alex Albon"
williams.peso = 801
carList.push(williams);

let mclaren = {};
mclaren.nome = "MCL38";
mclaren.pilota = "Lando Norris"
mclaren.peso = 800
carList.push(mclaren);

let mercedes = {};
mercedes.nome = "W15";
mercedes.pilota = "Developer"
mercedes.peso = 799
carList.push(mercedes);

let astonMartin = {};
astonMartin.nome = "AMR24";
astonMartin.pilota = "Fernando Alonso"
astonMartin.peso = 801
carList.push(astonMartin);

let kickSauber = {};
kickSauber.nome = "C44";
kickSauber.pilota = "Valteri Bottas"
kickSauber.peso = 805
carList.push(kickSauber);

let rb = {};
rb.nome = "VCARB-01";
rb.pilota = "Daniel Ricciardo"
rb.peso = 803
carList.push(rb);

let haas = {};
haas.nome = "VF-24";
haas.pilota = "Niko Hulkemberg"
haas.peso = 804
carList.push(haas);

let alpine = {};
alpine.nome = "A524";
alpine.pilota = "Pierre Gasly"
alpine.peso = 805
carList.push(alpine);

let pesoTotale = 0;

for(const car of carList){
    pesoTotale += car.peso;
}
console.log(pesoTotale);