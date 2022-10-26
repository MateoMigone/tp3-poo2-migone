function Luz(){
    this.estado = "apagada";
    
    this.consultarEstado = function(){
        return this.estado;
    }

    this.encender = function(){
        this.estado = "encendida";
    }

    this.apagar = function(){
        this.estado = "apagada";
    }

    this.cambiar = function(){
        if (this.estado == "apagada"){
            this.estado = "encendida";
        }
        else {
            this.estado = "apagada";
        }
    }
}

module.exports = Luz;