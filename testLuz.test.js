const Luz = require('./Luz')

test("crear luz", () => {
    const luz = new Luz();
    expect (luz.consultarEstado()).toBe("apagada");
});

test("encender luz", () => {
    const luz = new Luz();
    luz.encender();
    expect (luz.consultarEstado()).toBe("encendida");
});
