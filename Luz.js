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

    this.estaPrendida = function(){
        let value;
        this.intensidad > 0 ? value = true : value = false;
        return value
    } 
}

module.exports = Luz;