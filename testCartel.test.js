const Cartel = require('./Cartel');
const Luz = require('./Luz');

var cartel;
beforeEach(function () {
    cartel1 = new Cartel(2,2);
    cartel2 = new Cartel(4,4);
});

test("crear cartel", () => {
    expect (cartel1.cantidadLucesEncendidas()).toBe(0);
    expect (cartel1.cantidadLuces()).toBe(4);
    expect (cartel1.cantFilas).toBe(2);
    expect (cartel1.cantColumnas).toBe(2);
    expect (Luz.prototype.isPrototypeOf(cartel1.matriz[0][0])).toBe(true);
    expect (Luz.prototype.isPrototypeOf(cartel1.matriz[0][1])).toBe(true);
    expect (Luz.prototype.isPrototypeOf(cartel1.matriz[1][0])).toBe(true);
    expect (Luz.prototype.isPrototypeOf(cartel1.matriz[1][1])).toBe(true);
});

test("encender las luces del rectangulo (0,0),(2,2)", () => {
    cartel2.encenderLuces([0,0],[2,2])
    expect (cartel.cantidadLucesEncendidas()).toBe(4);
});



// test("encender luces del rectangulo con vertice superior izquierdo (0,0) e inferior derecho (2,2)", () => {
//     cartel.encenderLuces([0,0],[2,2]);
//     expect (cartel.estadoRectangulo([0,0],[2,2])).toBe("encendido");
// });


