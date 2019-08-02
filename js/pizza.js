// Business Logic
function Order(size,crust,toppings,number){
this.pizzaSize=size;
this.pizzaCrust=crust;
this.pizzatoppings=toppings;
this.pizzaNumber=number;
}
Order.prototype.fullInfo=function(){
    return this.pizzaSize + "," + this.pizzaCrust + "," + this.pizzatoppings + "," + this.pizzaNumber;
}

// user interface Logic
$(document).ready(function(){
$('button').click(function(){
// event.preventDefault();
console.log('error')
if($('#pizza-size1:checked').val()){
 var inputtedPizzaSize=$('#pizza-size1').val();
 console.log(inputtedPizzaSize)
}
else if($('#pizza-size2:checked').val()){
    var inputtedPizzaSize=$('#pizza-size2').val(); 
    console.log(inputtedPizzaSize)
}
else if($('#pizza-size3:checked').val()){
    var inputtedPizzaSize=$('#pizza-size3').val();
    console.log(inputtedPizzaSize)
}
else{
    console.log('error');
}
if($('#pizza-crust1:checked').val()){
    var inputtedPizzaCrust=$('#pizza-crust1').val();
    console.log(inputtedPizzaCrust)
   }
   else if($('#pizza-crust2:checked').val()){
       var inputtedPizzaCrust=$('#pizza-crust2').val(); 
       console.log(inputtedPizzaCrust)
   }
   else if($('#pizza-crust3:checked').val()){
       var inputtedPizzaCrust=$('#pizza-crust3').val();
       console.log(inputtedPizzaCrust)
   }
   else{
       console.log('error');
   }
   if($('#pizza-topping1:checked').val()){
    var inputtedPizzaToppings=$('#pizza-topping1').val();
    console.log(inputtedPizzaToppings)
   }
   else if($('#pizza-topping2:checked').val()){
       var inputtedPizzaToppings=$('#pizza-topping2').val(); 
       console.log(inputtedPizzaToppings)
   }
   else if($('#pizza-topping3:checked').val()){
       var inputtedPizzaToppings=$('#pizza-topping3').val();
       console.log(inputtedPizzaToppings)
   }
   else if($('#pizza-toppingt4:checked').val()){
    var inputtedPizzaToppings=$('#pizza-topping4').val();
    console.log(inputtedPizzaToppings)
}
else if($('#pizza-topping5:checked').val()){
    var inputtedPizzaToppings=$('#pizza-topping5').val();
    console.log(inputtedPizzaToppings)
}
else if($('#pizza-topping6:checked').val()){
    var inputtedPizzaToppings=$('#pizza-topping6').val();
    console.log(inputtedPizzaToppings)
}
else if($('#pizza-topping7:checked').val()){
    var inputtedPizzaToppings=$('#pizza-topping7').val();
    console.log(inputtedPizzaToppings)
}
else if($('#pizza-topping8:checked').val()){
    var inputtedPizzaToppings=$('#pizza-topping8').val();
    console.log(inputtedPizzaToppings)
}
   else{
       console.log('error');
   }
 
 var inputtedPizzaNumber=$('select#one').val();
 console.log(inputtedPizzaNumber);

 
 var newOrder=new Order(inputtedPizzaSize,inputtedPizzaCrust,inputtedPizzaToppings,inputtedPizzaNumber);
 console.log(newOrder)
 $('ul#Order').append("<li><span>" + newOrder.fullInfo() + "</span></li>");
 console.log('ul#Order').append("<li><span>" + newOrder.fullInfo() + "</span></li>")
 $(".PIZZA").last().click(function() {
    $("#show-pizza").show();
    $("#show-contact h2").text(newOrder.pizzaSize);
    $(".pizza-size").text(newOrder.pizzaSize);
    $(".pizza-crust").text(newOrder.pizzaCrust);
    $(".pizza-topping").text(newOrder.pizzatoppings);
    $(".pizza-number").text(newOrder.pizzaNumber);
  }); 
});
$("input#pizza-size").val("");
$("input#pizza-crust").val("");
$("input#pizza-topping").val("");
$("select .form-control form-control-sm").val("");

});