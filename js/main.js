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






// let risultato = addition(carList);
// console.log(risultato);

// let moreThan800 = moreThan800TotalWeight(carList);
// console.log(moreThan800);






// // Snack I
// function addition(list){
// let pesoTotale = 0;

// for(const car of list){
//     pesoTotale += car.peso;
// }
// return pesoTotale;
// }


// // SNACK II
// function moreThan800TotalWeight(list){
// const pesoMaggiore = [];
// const pesoMinore = [];
// let pesoTotale = 0;
// let pesoTotale2 = 0;

// for(const car of list){
//     if(car.peso>800){
//         pesoMaggiore.push(car.peso);
//     }
//     else{
//        pesoMinore.push(car.peso);
//     }
// }

// for(const pesoSingolo of pesoMaggiore){
//     pesoTotale += pesoSingolo;
// }
// for(const pesoSingolo2 of pesoMinore){
//     pesoTotale2 += pesoSingolo2;
// }
// console.log("Dentro funzione " + pesoTotale);
// console.log("Dentro funzione " + pesoTotale2);
// return pesoTotale ;
// }


// SNACK III
let pickedWord = "parola";
let reverseWord = reverseString(pickedWord);
console.log(reverseWord);

function reverseString(string){
    let stringaInversa = "";
    for(let i=string.length-1; i>=0; i--){
        stringaInversa += string[i];
    }
    return stringaInversa;
}

// SNACK IV
const first = ["a", "b", "c", "d"];
const second = [1,2,3,4];
let result = arrayFusion(first, second);
console.log(result);

function arrayFusion(array1, array2){
    const definitiveArray = [];

    for(let x = 0; x<array1.length; x++){
        definitiveArray.push(array1[x]);
        definitiveArray.push(array2[x]);
    }

        return definitiveArray;
}