const Cartel = require('./Cartel');
const Luz = require('./Luz');

var cartel;
beforeEach(function () {
    cartel = new Cartel(2,2);
});

test("crear cartel", () => {
    expect (cartel.cantidadLucesEncendidas()).toBe(0);
    expect (cartel.cantidadLuces()).toBe(4);
    expect (cartel.cantidadFilas).toBe(2);
    expect (cartel.cantidadColumnas).toBe(2);
    expect (Luz.prototype.isPrototypeOf(cartel.matriz[0][0])).toBe(true);
    expect (Luz.prototype.isPrototypeOf(cartel.matriz[0][1])).toBe(true);
    expect (Luz.prototype.isPrototypeOf(cartel.matriz[1][0])).toBe(true);
    expect (Luz.prototype.isPrototypeOf(cartel.matriz[1][1])).toBe(true);
});

// test("encender luces del rectangulo con vertice superior izquierdo (0,0) e inferior derecho (2,2)", () => {
//     cartel.encenderLuces([0,0],[2,2]);
//     expect (cartel.estadoRectangulo([0,0],[2,2])).toBe("encendido");
// });


