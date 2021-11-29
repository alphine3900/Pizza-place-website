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
              
                alert(`Your order will be delivered to ${location} and pay 200ksh extra`)
    
          
                name = $("#fname").val("");
                email = $("#mail").val("");
                location = $("#txt").val("");
    
    
            }
        })

         // Customer selection
  
      $("#checkbtn").click(function(){
  
        var pizzaSize=$("#myPizzaSize option:selected").text() 
        var pizzaCrust=$("#myPizzaCrust option:selected").text() 
        var pizzaTopping=$("#myPizzaTopping option:selected").text() 
 
        var pizzaNumbers=parseInt($("#myPizzaSize option:selected").val() )
        var crustNumbers=parseInt($("#myPizzaCrust option:selected").val() )
        var toppingNumbers=parseInt($("#myPizzaTopping option:selected").val()) 
 
        var crustInputNumbers=parseInt($("#crustNumber").val()) 
        var toppingInputNumbers=parseInt($("#toppingNumber").val()) 
        var pizzaInputNumbers=parseInt($("#pizzaNumber").val()) 
     //    alert(crustInputNumbers)
 
     var myObject=new TotalPizza(pizzaSize,pizzaCrust,pizzaTopping)
     var Total=(pizzaNumbers + (crustNumbers*crustInputNumbers)+ (toppingNumbers*toppingInputNumbers))*pizzaInputNumbers;
 
   
 $(".summary").html("<h2>"+"Pizza Size: "+myObject.OwnPizza+"<br>"+"Crust Type: "+myObject.OwnCrust+"<br>"+"Pizza Topping: "+myObject.myOwnTopping()+"<br>"+"Total Amount:"+"kshs."+Total+"</h2>").show(2000)
 
 
     })
   
   
 
 })
          

 