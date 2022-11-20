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
    expect (cartel2.cantidadLucesEncendidas()).toBe(4);
    expect (cartel2.matriz[0][0].consultarEstado()).toBe(true);
    expect (cartel2.matriz[0][1].consultarEstado()).toBe(true);
    expect (cartel2.matriz[1][0].consultarEstado()).toBe(true);
    expect (cartel2.matriz[1][1].consultarEstado()).toBe(true);
});

test("apagar las luces del rectangulo (0,0),(2,2)", () => {
    expect (cartel2.cantidadLucesEncendidas()).toBe(4);
    expect (cartel2.matriz[0][0].consultarEstado()).toBe(true);
    expect (cartel2.matriz[0][1].consultarEstado()).toBe(true);
    expect (cartel2.matriz[1][0].consultarEstado()).toBe(true);
    expect (cartel2.matriz[1][1].consultarEstado()).toBe(true);
});



