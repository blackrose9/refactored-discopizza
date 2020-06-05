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
      $("#orders").append(`<li>${numberOfPizzas} ${pizzaSize} ${pizzaTopping} pizza(s) ${pizzaCrust} crust</li>`);
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
      case 'Small' :
         totalOrderPrice+=(500*numberOfPizzas);
         break;
      case 'Medium' :
         totalOrderPrice+=(700*numberOfPizzas);
         break;
      case 'Large' :
         totalOrderPrice+=(950*numberOfPizzas);
         break;
      default:
         console.log(`Sorry we do not hold ${pizzaSize} size.`);
   }
   return totalOrderPrice;
  }

//   *********************************************************************

  $('#orderme').click(function(){
     let address = prompt("Where would you like your order to be delivered?");
     alert("Your order will be delivered at " + address + " in 30 minutes");
   });
   $('#pickme').click(function(){
      alert("Alright! Your order will be waiting for you when you get here :)")
   });

});