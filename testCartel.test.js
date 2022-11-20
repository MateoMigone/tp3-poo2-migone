const { test } = require('picomatch');
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

test("encender las luces del rectangulo (0,0),(2,2)", () => {
    cartel.encenderLuces([0,0],[2,2]);
    expect (cartel.cantidadLucesEncendidas()).toBe(9);
    expect (cartel.matriz[0][0].consultarEstado()).toBe(true);
    expect (cartel.matriz[0][1].consultarEstado()).toBe(true);
    expect (cartel.matriz[0][2].consultarEstado()).toBe(true);
    expect (cartel.matriz[1][0].consultarEstado()).toBe(true);
    expect (cartel.matriz[1][1].consultarEstado()).toBe(true);
    expect (cartel.matriz[1][2].consultarEstado()).toBe(true);
    expect (cartel.matriz[2][0].consultarEstado()).toBe(true);
    expect (cartel.matriz[2][1].consultarEstado()).toBe(true);
    expect (cartel.matriz[2][2].consultarEstado()).toBe(true);
});

test("encender las luces del rectangulo (0,0),(2,2) y luego apagar las luces del rectangulo (1,1),(2,2)", () => {
    cartel.encenderLuces([0,0],[2,2]);
    cartel.apagarLuces([1,1],[2,2]);
    expect (cartel.cantidadLucesEncendidas()).toBe(5);
    expect (cartel.matriz[0][0].consultarEstado()).toBe(true);
    expect (cartel.matriz[0][1].consultarEstado()).toBe(true);
    expect (cartel.matriz[0][2].consultarEstado()).toBe(true);
    expect (cartel.matriz[1][0].consultarEstado()).toBe(true);
    expect (cartel.matriz[2][0].consultarEstado()).toBe(true);
});

test("cambiar las luces del rectangulo (0,0),(1,1) de apagado a prendido", () => {
    cartel.cambiarLuces([0,0],[1,1]);
    expect (cartel.cantidadLucesEncendidas()).toBe(4);
    expect (cartel.matriz[0][0].consultarEstado()).toBe(true);
    expect (cartel.matriz[0][1].consultarEstado()).toBe(true);
    expect (cartel.matriz[1][0].consultarEstado()).toBe(true);
    expect (cartel.matriz[1][1].consultarEstado()).toBe(true);
});

test("consultar cantidad de luces prendidas luego de prender varias", () => {
    cartel.encenderLuces([0,0],[1,1]);
    cartel.encenderLuces([1,1],[3,3]);
    expect (cartel.cantidadLucesEncendidas()).toBe(12);
});

test("error en los parametros al encender luces", () => {
    expect(() => {
        cartel = new Cartel();
        cartel.encenderLuces([0,120],[-9,89])
    }).toThrow("Las esquinas pasadas por parametro deben tener numeros de fila y columna entre 0 y 100");
});

test("error en los parametros al encender luces", () => {
    expect(() => {
        cartel = new Cartel();
        cartel.encenderLuces([70,80],[60,70]);
    }).toThrow("La fila y columna de la esquina superior izquierda tiene que ser mayor a la fila y columna de la esquina inferior derecha respectivamente");
});



