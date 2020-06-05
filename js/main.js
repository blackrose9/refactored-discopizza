$(document).ready(function() {
   // declare variables to be used
   const orderItem = [];
   const orderMap = new Map([]);
   let itemNum=0;
   let totalOrderPrice = 0;

//   ********************************************************************

   $("#submit").click(function(event) {
      // get input from user
      var pizzaSize = $("#size option:selected").val();
      var pizzaTopping = $("#topping option:selected").val();
      var pizzaCrust = $("#crust option:selected").val();
      var numberOfPizzas = parseInt ($("input#qty").val());

      // call method to add orders to map
      addOrderItem(pizzaSize, pizzaTopping, pizzaCrust, numberOfPizzas);
      // call calculatetotal method
      let totalprice = calculateTotal(pizzaSize, numberOfPizzas);
      
      // display on DOM using jquery
      $("#placeholder").text("")
      $("#orders").append(`<li>${numberOfPizzas} ${pizzaSize} ${pizzaTopping} ${pizzaCrust}</li>`);
      console.log(totalprice);
      $("#total").text(`KSH ${totalprice}`);

      $("#yourorder").show();
      event.preventDefault();
  });

//   ********************************************************************

  addOrderItem = (pizzaSize, pizzaTopping, pizzaCrust, numberOfPizzas) => {
     if (orderItem.pizzaSize>0){
        orderItem.clear();
     }
      itemNum+=1
      orderItem.push(numberOfPizzas);
      orderItem.push(pizzaCrust);
      orderItem.push(pizzaSize);
      orderItem.push(pizzaTopping);
      addToMap(orderItem);
  }

  addToMap = (orderItem) => {
     const item = orderItem;
      orderMap.set(itemNum,item);
  }

//   *********************************************************************

  calculateTotal = (pizzaSize, numberOfPizzas) => {
   switch(pizzaSize){
      case 'small' :
         totalOrderPrice+=(500*numberOfPizzas);
         break;
      case 'medium' :
         totalOrderPrice+=(700*numberOfPizzas);
         break;
      case 'large' :
         totalOrderPrice+=(950*numberOfPizzas);
         break;
      default:
         console.log(`Sorry we do not hold ${pizzaSize} size.`);
   }
   return totalOrderPrice;
  }

//   *********************************************************************

  $('#orderme').click(function(){
     var address = prompt("Where do you want the pizza delivered?");
     alert("Your Pizza will be delivered at " + address + "in 30 minutes");
   });
   $('#pickme').click(function(){
      alert("Alright! Your order will be waiting for you when you get here :)")
   });

});