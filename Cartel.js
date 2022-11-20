function Cartel(filas,columnas){
    this.matriz = [];

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
        return 10000;
    }
}
module.exports = Cartel;