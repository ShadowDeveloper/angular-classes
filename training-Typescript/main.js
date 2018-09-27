/* ----------- Javascript puro ------------ */
var minhaVariabvel = "minha variabvel";
function minhaFunc(x, y) {
    return x + y;
}
/* ----------- End Javascript puro ------------ */
/* ----------- EcmaScript 2015 ------------ */
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3, 4];
numeros.map(function (value) {
    return value * 2;
});
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
/* ----------- End EcmaScript 2015 ------------ */
/* ----------- TypeScript ------------ */
var n1 = "Rodrigo";
n1 = "Souza";
var n2 = 10;
n2 = "Teste";
/* ----------- End TypeScript ------------ */
