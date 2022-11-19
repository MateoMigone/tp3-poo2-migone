function Cartel(filas,columnas){
    this.cantidadLucesEncendidas = function(){
        return 0;
    }

    this.cantidadLuces = function(){
        return 10000;
    }
    this.matriz = new Matriz(filas,columnas);
}
module.exports = Cartel;