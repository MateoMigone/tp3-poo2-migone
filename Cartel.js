const Luz = require("./Luz");

function Cartel(){
    this.cantFilas = 100;
    this.cantColumnas = 100;
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

    this.encenderLuces = function (esqSupIzq,esqInfDer){
        validarParametros(esqSupIzq,esqInfDer);
        for (let i=esqSupIzq[0]; i<=esqInfDer[0]; i++){
            for (let j=esqSupIzq[1]; j<=esqInfDer[1]; j++){
                this.matriz[i][j].encender();
            }
        }
    }

    this.apagarLuces = function (esqSupIzq,esqInfDer){
        validarParametros(esqSupIzq,esqInfDer);
        for (let i=esqSupIzq[0]; i<=esqInfDer[0]; i++){
            for (let j=esqSupIzq[1]; j<=esqInfDer[1]; j++){
                this.matriz[i][j].apagar();
            }
        }
    }

    this.cambiarLuces = function(){
        for (let i=esqSupIzq[0]; i<=esqInfDer[0]; i++){
            for (let j=esqSupIzq[1]; j<=esqInfDer[1]; j++){
                this.matriz[i][j].cambiar();
            }
        }
    }
    
    var validarParametros = function(esqSupIzq,esqInfDer){
        if(esqSupIzq[0] < 0 || esqSupIzq[0] > 99 || esqSupIzq[1] < 0 || esqSupIzq[1] > 99 || 
            esqInfDer[0] < 0 || esqInfDer[0] > 99 || esqInfDer[1] < 0 || esqInfDer[1] > 99){
            throw new Error("Las esquinas pasadas por parametro deben tener numeros de fila y columna entre 0 y 100");
        }
        if(esqSupIzq[0] > esqInfDer[0] || esqSupIzq[1] > esqInfDer[1] ){
            throw new Error("Las filas y columnas de la esquina superior izquierda deben ser mayores respectivamente que las de la esquina inferior derecha");
        }
    }
}

module.exports = Cartel;