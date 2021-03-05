function BemVindo(x) {
    if (Array.isArray(x)) {
        console.log("Ola, " + x.join(" and "));
    }
    else {
        console.log("Bem vindo " + x);
    }
}
function BemVindoo(y) {
    if (Array.isArray(y)) {
        console.log("Olam, " + y.join(" and "));
    }
    else {
        console.log("Bem vindo " + y);
    }
}
function getPrimeiro(x) {
    return x.slice(0, 3);
}
function getSecond(y) {
    return y.slice(0, 4);
}
var mudarString = "Ola mundo!!!";
mudarString = "ola mundo!!";
mudarString;
var constantString = "Hello World!!!";
constantString;
console.log(mudarString);
