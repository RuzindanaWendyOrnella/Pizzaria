// Business Logic
function Order(size,crust,myToppings,delivery){
this.pizzaSize=size;
this.pizzaCrust=crust;
this.pizzaDelivery=delivery;
// this.pizzatoppings=toppings;
this.myToppings=myToppings
// this.pizzaNumber=number;

}
Order.prototype.fullInfo=function(){
    return this.pizzaSize + "," + this.pizzaCrust + "," + this.myToppings+  "," + this.pizzaDelivery;
}

// user interface Logic
$(document).ready(function(){
$('button#Order').click(function(){
    var myToppings=[];
    
// event.preventDefault();
// console.log('error')
if($('#pizza-size1:checked').val()){
    var price1='800Rwf';
    var inputtedPizzaSize=$('#pizza-size1').val() + " " + "price=800Rwf";
    console.log(inputtedPizzaSize)
   }
   else if($('#pizza-size2:checked').val()){
       var price1='1000Rwf'
       var inputtedPizzaSize=$('#pizza-size2').val() + "   " + "price=1000Rwf"; 
       console.log(inputtedPizzaSize)
   }
   else if($('#pizza-size3:checked').val()){
       var price1='2000Rwf'
       var inputtedPizzaSize=$('#pizza-size3').val() + " " + "price=2000Rwf";
       console.log(inputtedPizzaSize)
   }
   else{
       console.log('error');
   }
if($('#pizza-crust1:checked').val()){
    var price2='500Rwf'
    var inputtedPizzaCrust=$('#pizza-crust1').val() + " " + "price=500Rwf";
    console.log(inputtedPizzaCrust)
   }
   else if($('#pizza-crust2:checked').val()){
       var price2='600Rwf'
       var inputtedPizzaCrust=$('#pizza-crust2').val() + " " + "price=600Rwf"; 
       console.log(inputtedPizzaCrust)
   }
   else if($('#pizza-crust3:checked').val()){
       var price2='400Rwf'
       var inputtedPizzaCrust=$('#pizza-crust3').val() + " " + "price=400Rwf";
       console.log(inputtedPizzaCrust)
   }
   else{
       console.log('error');
   }
//    var inputtedPizzaToppings=[];
//    console.log(inputtedPizzaToppings);
//    myToppings.push($('input[type=checkbox]:checked').val());

            $.each($("input[type=checkbox]:checked"), function(){            
                myToppings.push($(this).val());
            });

//    console.log($('input[type=checkbox]:checked'));
console.log(myToppings)
var sumToppings = 0;

function toppings(myToppings){
    
    for(var i =0; i< myToppings.length; i++){
        if(myToppings[i]=='Pepperoni'){
           sumToppings += 200
        }else if(myToppings[i]=='Mushrooms'){
            sumToppings +=300
        }
        else if(myToppings[i]=='Onions'){
            sumToppings +=300
        }
        else if(myToppings[i]=='Sausage'){
            sumToppings +=300
        }
        else if(myToppings[i]=='baucon'){
            sumToppings +=300
        }
        else if(myToppings[i]=='Extra cheese'){
            sumToppings +=300
        }
        else if(myToppings[i]=='Black olives'){
            sumToppings +=300
        }
        else if(myToppings[i]=='Green Peppers'){
            sumToppings +=300
        }
    }
    
    console.log(myToppings + sumToppings);
    return sumToppings;
}
toppings(myToppings);
   
//    if($('#pizza-topping1:checked').val()){
//        var price3='200Rwf'
//     var inputtedPizzaToppings=$('#pizza-topping1').val() + "  " + " price=200Rwf";
//     // console.log(inputtedPizzaToppings)
    
//     myToppings.push(inputtedPizzaToppings)
//     console.log(myToppings)
//    }
//     if($('#pizza-topping2:checked').val()){
//        var price3='300Rwf'
//        var inputtedPizzaToppings=$('#pizza-topping2:checked').val() + " " + " price=300Rwf"; 
//     //    console.log(inputtedPizzaToppings)
    
//     myToppings.push(inputtedPizzaToppings)
//     console.log(myToppings)
//    }
//     if($('#pizza-topping3:checked').val()){
//        var price3='200Rwf'
//        var inputtedPizzaToppings=$('#pizza-topping3:checked').val() + "  " + " price=200Rwf";
//     //    console.log(inputtedPizzaToppings)
    
//     myToppings.push(inputtedPizzaToppings)
//     console.log(myToppings)
//    }
//     if($('#pizza-toppingt4:checked').val()){
//     var price3='200Rwf'
//     var inputtedPizzaToppings=$('#pizza-topping4:checked').val()+ "  " + " price=200Rwf";
//     // console.log(inputtedPizzaToppings)
    
//     myToppings.push(inputtedPizzaToppings)
//     console.log(myToppings)
// }
//  if($('#pizza-topping5:checked').val()){
//     var price3='200Rwf'
//     var inputtedPizzaToppings=$('#pizza-topping5:checked').val()+ "  " + " price=200Rwf";
//     // console.log(inputtedPizzaToppings)
  
//     myToppings.push(inputtedPizzaToppings)
//     console.log(myToppings)
// }
//  if($('#pizza-topping6:checked').val()){
//     var price3='200Rwf'
//     var inputtedPizzaToppings=$('#pizza-topping6:checked').val()+ "  " + " price=200Rwf";
    
//     myToppings.push(inputtedPizzaToppings)
//     console.log(myToppings)
// }
//  if($('#pizza-topping7:checked').val()){
//     var price3='200Rwf'
//     var inputtedPizzaToppings=$('#pizza-topping7:checked').val()+ "  " + " price=200Rwf";
//     // console.log(inputtedPizzaToppings)
 
//     myToppings.push(inputtedPizzaToppings)
//     console.log(myToppings)
// }
//  if($('#pizza-topping8:checked').val()){
//     var price3='200Rwf'
//     var inputtedPizzaToppings=$('#pizza-topping8:checked').val()+ "  " + " price=200Rwf";
//     // console.log(inputtedPizzaToppings)
  
//     myToppings.push(inputtedPizzaToppings)
//     console.log(myToppings)
//  }
//    else{
//        console.log('error');
//    }
 
//  var inputtedPizzaNumber=$('select#one').val();
//  console.log(inputtedPizzaNumber);
 if($('#pizza-delivery1:checked').val()){
     var price4='1200Rwf'
    var inputtedPizzaDelivery=$('#pizza-delivery1').val()+ "  " + " price=1200Rwf";
    console.log(inputtedPizzaDelivery)
   }
   else if($('#pizza-delivery2:checked').val()){
       var price4='0'
    var inputtedPizzaDelivery=$('#pizza-delivery2').val()+ "  " + " price=0Rwf";
    console.log(inputtedPizzaDelivery)
   }
   else{
       console.log('error')
   }
//    if()
//    console.log(total)

var total=parseInt(price1)+parseInt(price2)+parseInt(price4)+parseInt(sumToppings);
console.log(total)
   var newOrder=new Order(inputtedPizzaSize,inputtedPizzaCrust,myToppings + sumToppings,inputtedPizzaDelivery);
 console.log(newOrder)
//  newOrder.pizzatoppings.push(inputtedPizzaToppings)
//  if($('select#one').val()=1){
   
//     $('.for').show()
//    }
  
  
     
       
    
 



//  else{
//      console.log('error')
//  }
//  $('button#add').click(function(){
//     if($('select#one').val()=1){
   
//         $('.for').show()
//        }
//      else{
//          console.log('error')
//      }
//  });

 $('ul#Order').append("<li><span>" + newOrder.fullInfo() + "</span></li>");
 $('ul#total').append(''+ '='+ total + '')
 
    $("#show-pizza").show();
    // $("#show-contact h2").text(newOrder.pizzaSize);
   
    $(".pizza-size").text(newOrder.pizzaSize);
    $(".pizza-crust").text(newOrder.pizzaCrust);
    $(".pizza-topping").text(newOrder.pizzatoppings);
    $('.pizza-delivery').text(newOrder.pizzaDelivery)
  

     
  
});
$('#pizzaSize').val();
console.log()
$('#pizza-crust').val();
console.log()
$('pizza-topping').val();
$('select#one').val("");

});