function TotalPizza(namePizza,nameCrust,nameTopping){
    this.OwnPizza=namePizza;
    this.OwnCrust=nameCrust; 
    this.OwnTopping=nameTopping;
  }
  
  TotalPizza.prototype.myOwnTopping=function(){
  
      return this.OwnTopping
  }

  $(document).ready(function() {
  
  
    // Location alert
        $(".locationOrder").on("click",function(e){
            e.preventDefault()
            var name = $("#fname").val();
            var email = $("#mail").val();
            var location = $("#txt").val();
            if (!name || !email || !location) {
    
                alert("Fill in all the values")
    
            } else {
              
                alert(`Your order will be delivered to ${location} `)
    
          
                name = $("#fname").val("");
                email = $("#mail").val("");
                location = $("#txt").val("");
    
    
            }
        })