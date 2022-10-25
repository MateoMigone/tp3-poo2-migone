function Luz(){
    this.estado = "apagada";
    this.consultarEstado = function(){
        return this.estado;
    }
    this.encender = function(){
        this.estado = "encendida"
    }
}

module.exports = Luz;