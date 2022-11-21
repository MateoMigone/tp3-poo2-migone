function Luz(){
    this.intensidad = 0;
    
    this.encender = function(){
        if(this.intensidad == 10){
            throw new Error("No se puede aumentar la intensidad a mas que 10")
        }
        this.intensidad ++;
    }

    this.apagar = function(){
        this.intensidad--;
    }

    this.cambiar = function(){
        this.encender();
        this.encender();
    }

    this.estaPrendida = function(){
        let value;
        this.intensidad > 0 ? value = true : value = false;
        return value
    } 
}

module.exports = Luz;