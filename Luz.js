function Luz(){
    this.intensidad = 0;
    
    this.encender = function(){
        this.intensidad ++;
    }

    this.apagar = function(){
        this.intensidad--;
    }

    this.cambiar = function(){
        this.intensidad += 2;
    }
}

module.exports = Luz;