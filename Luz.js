function Luz(){
    this.estado = 0;
    
    this.consultarEstado = function(){
        return this.estado;
    }

    this.encender = function(){
        this.estado = true;
    }

    this.apagar = function(){
        this.estado = false;
    }

    this.cambiar = function(){
        this.estado = !this.estado;
    }
}

module.exports = Luz;