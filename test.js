var mes = 3, ano = 2021;
var dia = 02;
var filmePreferido = "badBoys";
var comidaPreferida = "pizza";
var comidaPreferidas;
comidaPreferidas = {
    sucoFirst: 'Manga',
    pratoSecond: 'Arroz com feijao'
};
switch (filmePreferido) {
    case 'badThor':
        console.log('Thor');
        break;
    case 'badBoys':
        console.log('Boys');
        break;
    case 'badIron':
        console.log('Iron');
        break;
}
switch (comidaPreferida) {
    case 'hamburguer':
        console.log('hamburguer');
        break;
    case 'pizza':
        console.log('pizza');
        break;
    case 'tapioca':
        console.log('tapioca');
        break;
}
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dia = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dia = 30;
        break;
    case 2:
        if (((ano % 4 == 0) &&
            !(ano % 100 == 0))
            || (ano % 400 == 0))
            dia = 29;
        else
            dia = 28;
        break;
    default:
        throw Error('Mes invalido');
}
console.log("O mes " + mes + " em " + ano + " tem " + dia + " dias.");
console.log(comidaPreferidas);
