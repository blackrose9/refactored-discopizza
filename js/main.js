$(document).ready(function() {
   const orderItem = new Set();
   const orderMap = new Map([]);
   let itemNum=1;

   $("#submit").click(function(event) {
      var size = $("#size option:selected").val();
      var topping = $("#topping option:selected").val();
      var crust = $("#crust option:selected").val();
      var qty = parseInt ($("input#qty").val());

      addOrderItem(size, topping, crust, qty);
      // orderItem.clear();

      (allOrders=()=>{
         orderMap.forEach((value) => {
            $("#orders").append(value);
            console.log(value);
         });
      })()

      $("#yourorder").show();
      event.preventDefault();
  });

  addOrderItem = (size, topping, crust, qty) => {
   orderItem.add(qty);
   orderItem.add(crust);
   orderItem.add(size);
   orderItem.add(topping);
   addToMap(orderItem);
  }

  addToMap = (orderItem) => {
     let item = orderItem;
      orderMap.set((itemNum+1),item);
      // orderItem.clear();
  }

  $('#orderme').click(function(){
     var address = prompt("Where do you want the pizza delivered?");
     alert("Your Pizza will be delivered at " + address + "in 30 minutes");
   });
   $('#pickme').click(function(){
      alert("Alright! Your order will be waiting for you when you get here :)")
   });

});

   

// deleteItem=()=>{
//    orderItem.clear();
// }

// let qty = 2;
// let crust = 'thick';
// let size = 'large';
// let topping = 'mushroom';

//    const orderItem = new Set();
//    const orderMap = new Map([]);
//    let itemNum=1;

//       orderItem.add(qty);
//       orderItem.add(crust);
//       orderItem.add(size);
//       orderItem.add(topping);

//       orderMap.set((itemNum),orderItem);
//       orderMap.set((itemNum)+1,orderItem);

//       (allOrders=()=>{
//          orderMap.forEach((value, key) => {
//             value;
//             key;
//          });
//       })()

//       orderMap;
//       orderItem;