const terminal = require("prompt-sync")();

let numero = parseFloat(terminal("Digite um numero:"));

if(numero % 2 === 0){
    console.log("O numero", numero, "é par");
} else{
        console.log("O numero", numero, "é impar");
}

