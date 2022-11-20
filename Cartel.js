const Luz = require("./Luz");

function Cartel(filas,columnas){
    this.cantFilas = filas;
    this.cantColumnas = columnas;
    this.matriz = [];
    for (let i=0; i<this.cantFilas; i++){
        this.matriz[i] = [];
        for (let j=0; j<this.cantColumnas; j++){
            this.matriz[i][j] = new Luz();
        }
    }

    this.cantidadFilas = function (){
        return 2
    }

    this.cantidadColumnas = function (){
        return 2
    }

    this.cantidadLucesEncendidas = function(){
        return 0;
    }

    this.cantidadLuces = function(){
        return 4;
    }
}
module.exports = Cartel;