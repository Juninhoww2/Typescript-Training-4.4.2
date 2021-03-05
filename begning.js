;
;
;
function printAll(str) {
    if (typeof str === "object") {
        for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
            var s = str_1[_i];
            console.log(s);
        }
    }
    else if (typeof str === "string") {
        console.log(str);
    }
    else {
        // fazer nada
    }
}
function printOi(op) {
    console.log(op.id);
    console.log(op.api);
}
function printMundo(md) {
    console.log(md.ola);
    console.log("Meu app " + md.title);
    console.log("Version " + md.version);
    console.log("inc " + md.inc);
}
function printOla(ol) {
    console.log("Meu nome é " + ol.nome);
    console.log("Minha idade é " + ol.idade);
    console.log("Minha casa é " + ol.casa);
}
function printCordenadas(pt) {
    console.log("A cordenada do x é " + pt.x);
    console.log("A cordenada do y é " + pt.y);
    console.log("A cordenada do z é " + pt.z);
}
printMundo({
    ola: "Hello Wordl!!!", title: 'Hot-Chicken', version: 1.4, inc: 'Hot-Chicken Industries'
});
printOla({ nome: 'Jose Alexandre', idade: 18, casa: 180 });
printCordenadas({
    x: 500, y: 500, z: 30
});
printOi({
    id: 'api', api: 'apicom'
});
