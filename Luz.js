function Luz(){
    this.estado = 0;
    
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