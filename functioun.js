function TotalPizza(namePizza,nameCrust,nameTopping){
    this.OwnPizza=namePizza;
    this.OwnCrust=nameCrust; 
    this.OwnTopping=nameTopping;
  }
  
  TotalPizza.prototype.myOwnTopping=function(){
  
      return this.OwnTopping
  }