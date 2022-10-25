const Luz = require('./Luz')

test("crear luz", () => {
    const luz = new Luz();
    expect (luz.consultarEstado()).toBe("apagada");
});