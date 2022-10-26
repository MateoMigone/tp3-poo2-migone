const Luz = require('./Luz')

var luz;
beforeEach(function () {
    luz = new Luz();
});

test("crear luz", () => {
    expect (luz.consultarEstado()).toBe("apagada");
});

test("encender luz", () => {
    luz.encender();
    expect (luz.consultarEstado()).toBe("encendida");
});

test("apagar luz", () => {
    luz.encender();
    luz.apagar();
    expect (luz.consultarEstado()).toBe("apagada");
});

test("cambiar luz", () => {
    luz.encender();
    luz.cambiar();
    expect (luz.consultarEstado()).toBe("apagada");
});
