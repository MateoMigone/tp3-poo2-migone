function Luz(){
    this.intensidad = 0;
    
    this.encender = function(){
        this.intensidad ++;
    }

    this.apagar = function(){
        this.intensidad = false;
    }

    this.cambiar = function(){
        this.intensidad = !this.intensidad;
    }
}

module.exports = Luz;