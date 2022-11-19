const Cartel = require('./Cartel');

var cartel;
beforeEach(function () {
    cartel = new Cartel(100,100);
});

test("crear cartel", () => {
    expect (cartel.cantidadLucesEncendidas()).toBe(0);
    expect (cartel.cantidadLuces()).toBe(10000);
    expect (cartel.matriz.filas).toBe(100);
    expect (cartel.matriz.columnas).toBe(100);
});

// test("encender luces del rectangulo con vertice superior izquierdo (0,0) e inferior derecho (2,2)", () => {
//     cartel.encenderLuces([0,0],[2,2]);
//     expect (cartel.estadoRectangulo([0,0],[2,2])).toBe("encendido");
// });


