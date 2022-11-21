const Cartel = require('./Cartel');
const Luz = require('./Luz');

var cartel;
beforeEach(function () {
    cartel = new Cartel();
});

test("crear cartel", () => {
    var sonTodasLuces = true;
    for (let i=0; i < this.cantFilas; i++){
        for (let j=0; j<this.cantColumnas; j++){
           sonTodasLuces = Luz.prototype.isPrototypeOf(cartel.matriz[0][0]) ;
        }
    }
    expect (sonTodasLuces).toBe(true);
    expect (cartel.cantidadLucesEncendidas()).toBe(0);
    expect (cartel.cantidadLuces()).toBe(10000);
    expect (cartel.cantFilas).toBe(100);
    expect (cartel.cantColumnas).toBe(100);
    
    
});

test("encender las luces del rectangulo (0,0),(2,2) subiendoles una intensidad", () => {
    cartel.encenderLuces([0,0],[2,2]);
    expect (cartel.cantidadLucesEncendidas()).toBe(9);
    expect (cartel.matriz[0][0].intensidad).toBe(1);
    expect (cartel.matriz[0][1].intensidad).toBe(1);
    expect (cartel.matriz[0][2].intensidad).toBe(1);
    expect (cartel.matriz[1][0].intensidad).toBe(1);
    expect (cartel.matriz[1][1].intensidad).toBe(1);
    expect (cartel.matriz[1][2].intensidad).toBe(1);
    expect (cartel.matriz[2][0].intensidad).toBe(1);
    expect (cartel.matriz[2][1].intensidad).toBe(1);
    expect (cartel.matriz[2][2].intensidad).toBe(1);
});

test("encender las luces del rectangulo (0,0),(2,2) y luego apagar las luces del rectangulo (1,1),(2,2)", () => {
    cartel.encenderLuces([0,0],[2,2]);
    cartel.apagarLuces([1,1],[2,2]);
    expect (cartel.cantidadLucesEncendidas()).toBe(5);
    expect (cartel.matriz[0][0].intensidad).toBe(1);
    expect (cartel.matriz[0][1].intensidad).toBe(1);
    expect (cartel.matriz[0][2].intensidad).toBe(1);
    expect (cartel.matriz[1][0].intensidad).toBe(1);
    expect (cartel.matriz[2][0].intensidad).toBe(1);
});

test("cambiar las luces del rectangulo (0,0),(1,1) aumentando su intensidad 2 veces", () => {
    cartel.cambiarLuces([0,0],[1,1]);
    expect (cartel.cantidadLucesEncendidas()).toBe(4);
    expect (cartel.matriz[0][0].intensidad).toBe(2);
    expect (cartel.matriz[0][1].intensidad).toBe(2);
    expect (cartel.matriz[1][0].intensidad).toBe(2);
    expect (cartel.matriz[1][1].intensidad).toBe(2);
});

test("consultar cantidad de luces prendidas luego de prender varias", () => {
    cartel.encenderLuces([0,0],[1,1]);
    cartel.encenderLuces([1,1],[3,3]);
    expect (cartel.cantidadLucesEncendidas()).toBe(12);
});

test("error en los parametros al encender luces", () => {
    expect(() => {
        cartel.encenderLuces([0,120],[-9,89])
    }).toThrow("Las esquinas pasadas por parametro deben tener numeros de fila y columna entre 0 y 100");
    expect(() => {
        cartel.encenderLuces([70,80],[60,70])
    }).toThrow("Las filas y columnas de la esquina superior izquierda deben ser mayores respectivamente que las de la esquina inferior derecha");
    expect(() => {
        cartel.apagarLuces([0,120],[-9,89])
    }).toThrow("Las esquinas pasadas por parametro deben tener numeros de fila y columna entre 0 y 100");
    expect(() => {
        cartel.apagarLuces([70,80],[60,70])
    }).toThrow("Las filas y columnas de la esquina superior izquierda deben ser mayores respectivamente que las de la esquina inferior derecha");
    expect(() => {
        cartel.cambiarLuces([0,120],[-9,89])
    }).toThrow("Las esquinas pasadas por parametro deben tener numeros de fila y columna entre 0 y 100");
});



