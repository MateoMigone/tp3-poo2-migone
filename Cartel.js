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

    this.cantidadLuces = function(){
        let x=0;
        for (let i=0; i<this.cantFilas; i++){
            for (let j=0; j<this.cantColumnas; j++){
                x++;
            }
        }
        return x;
    }

    this.cantidadLucesEncendidas = function(){
        let x=0;
        for (let i=0; i<this.cantFilas; i++){
            for (let j=0; j<this.cantColumnas; j++){
                x += this.matriz[i][j].consultarEstado();
            }
        }
        return x;
    }

    this.encenderLuces = function (esquinaSuperiorIzquierda,esquinaInferiorDerecha){
        for (let i=esquinaSuperiorIzquierda[0]; i<=esquinaInferiorDerecha[0]; i++){
            for (let j=esquinaSuperiorIzquierda[1]; j<=esquinaInferiorDerecha[1]; j++){
                this.matriz[i][j].encender();
            }
        }
    }

}

module.exports = Cartel;