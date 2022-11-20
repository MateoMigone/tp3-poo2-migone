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

    this.cantidadLucesEncendidas = function(){
        return 0;
    }

    this.cantidadLuces = function(){
        let x=0;
        for (let i=0; i<this.cantFilas; i++){
            for (let j=0; j<this.cantColumnas; j++){
                x++;
            }
        }
        return x;
    }
}
module.exports = Cartel;