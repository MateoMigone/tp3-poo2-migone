const Luz = require('./Luz');

var luz;
beforeEach(function () {
    luz = new Luz();
});

test("crear luz", () => {
    expect (luz.consultarEstado()).toBe(0);
});

test("encender luz", () => {
    luz.encender();
    expect (luz.consultarEstado()).toBe(true);
});

test("apagar luz", () => {
    luz.encender();
    luz.apagar();
    expect (luz.consultarEstado()).toBe(false);
});

test("cambiar luz de encendida a apagada", () => {
    luz.encender();
    luz.cambiar();
    expect (luz.consultarEstado()).toBe(false);
});

test("cambiar luz de apagada a encendida", () => {
    luz.apagar();
    luz.cambiar();
    expect (luz.consultarEstado()).toBe(true);
});

test("cambiar luz de apagada a encendida y de encendida a apagada", () => {
    luz.apagar();
    luz.cambiar();
    luz.cambiar();
    expect (luz.consultarEstado()).toBe(false);
});



