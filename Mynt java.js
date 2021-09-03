let a = 0;
let value1 = 0;
let value2 = 0;

let myntkast = null;
let antKast = process.argv[2];
for (let i = 0; i < antKast; i++){
    myntkast = Math.random()*1

    if(myntkast < 0.5){
        myntkast = "M"
        value1 += 1;
    }else {
        myntkast = "K"
        value2 += 1;
    }
    
};
let M = value1 / (value1 + value2) * 100
let K = value2 / (value1 + value2) * 100
console.log("Antall ganger landet på mynt: " + M.toFixed() + "%");
console.log("Antall ganger landet på kron: " + K.toFixed() + "%");



