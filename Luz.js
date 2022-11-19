function Luz(){
    this.estado = 0;
    
    this.consultarEstado = function(){
        return this.estado;
    }

    this.encender = function(){
        this.estado = 1;
    }

    this.apagar = function(){
        this.estado = 0;
    }

    this.cambiar = function(){
        this.estado === 0 ? this.estado = 1 : this.estado = 0;
    }
}

module.exports = Luz;