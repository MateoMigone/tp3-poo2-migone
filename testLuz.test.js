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
    luz.apagar();
    luz.apagar();
    expect (luz.intensidad).toBe(0);
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







