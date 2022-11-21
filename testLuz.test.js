const Luz = require('./Luz');

var luz;
beforeEach(function () {
    luz = new Luz();
});

test("crear luz con intensidad 0", () => {
    expect (luz.intensidad).toBe(0);
});

test("encender luz subiendo una intensidad", () => {
    luz.encender();
    expect (luz.intensidad).toBe(1);
});

test("encender luz subiendo 2 intensidades", () => {
    luz.encender();
    luz.encender();
    expect (luz.intensidad).toBe(2);
});

test("apagar luz bajandole una intensidad", () => {
    luz.encender();
    luz.apagar();
    expect (luz.intensidad).toBe(0);
});

test("apagar luz bajandole 2 intensidades", () => {
    luz.encender();
    luz.encender();
    luz.encender();
    luz.encender();
    luz.encender();
    luz.apagar();
    luz.apagar();
    expect (luz.intensidad).toBe(3);
});

test("cambiar luz subiendo 2 intensidades", () => {
    luz.cambiar();
    expect (luz.intensidad).toBe(2);
});

test("cambiar luz subiendo 4 intensidades", () => {
    luz.cambiar();
    luz.cambiar();
    expect (luz.intensidad).toBe(4);

});

test("chequear si la luz esta prendida", () => {
    expect (luz.estaPrendida()).toBe(false);

});

test("chequear si la luz esta prendida", () => {
    luz.encender();
    expect (luz.estaPrendida()).toBe(true);
});

test("chequear si la luz esta prendida", () => {
    luz.encender();
    luz.cambiar();
    expect (luz.estaPrendida()).toBe(true);
});

test("encender luz si ya esta la intensidad al maximo", () => {
    expect(() => {
        luz.cambiar();
        luz.cambiar();
        luz.cambiar();
        luz.cambiar();
        luz.encender();
        luz.cambiar();
    }).toThrow("No se puede aumentar la intensidad a mas que 10");

});










