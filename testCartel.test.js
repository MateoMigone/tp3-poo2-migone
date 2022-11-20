const Cartel = require('./Cartel');
const Luz = require('./Luz');

var cartel;
beforeEach(function () {
    cartel = new Cartel(100,100);
});

test("crear cartel", () => {
    expect (cartel.cantidadLucesEncendidas()).toBe(0);
    expect (cartel.cantidadLuces()).toBe(10000);
    expect (cartel.cantFilas).toBe(100);
    expect (cartel.cantColumnas).toBe(100);
    expect (Luz.prototype.isPrototypeOf(cartel.matriz[0][0])).toBe(true);
    expect (Luz.prototype.isPrototypeOf(cartel.matriz[99][99])).toBe(true);
    
});

// test("encender luces del rectangulo con vertice superior izquierdo (0,0) e inferior derecho (2,2)", () => {
//     cartel.encenderLuces([0,0],[2,2]);
//     expect (cartel.estadoRectangulo([0,0],[2,2])).toBe("encendido");
// });


