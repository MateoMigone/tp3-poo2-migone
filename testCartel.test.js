const Cartel = require('./Cartel');

test("crear cartel", () => {
    var cartel = new Cartel();
    expect (cartel.cantidadLucesEncendidas()).toBe(0);
});