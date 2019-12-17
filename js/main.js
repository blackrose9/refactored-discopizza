$(document).ready(function() {
   $("#order form").submit(function(event) {
      var sizeInput = document.getElementById("size");
      var size = sizeInput.options[sizeInput.selectedIndex].text;

      var toppingInput = document.getElementById("topping");
      var topping = toppingInput.options[toppingInput.selectedIndex].text;

      var crustInput = document.getElementById("crust");
      var crust = crustInput.options[crustInput.selectedIndex].text;

      var qty = parseInt ($("input#qty").val());

      // alert(size);
      // alert(topping);
      // alert(crust);
      // alert(qty);
      
      //Jquery append users order
      $("#displayqty").append(qty);
      $("#displaycrust").append(crust);
      $("#displaysize").append(size);
      $("#displaytopping").append(topping);

      $("#yourorder").show();
      event.preventDefault();
  });

  $('#orderme').click(function(){
     var address = prompt("Where do you want the pizza delivered?");
     alert("Your Pizza will be delivered at " + address);
   });
   $('#pickme').click(function(){
      alert("Alright! Your order will be waiting for you when you get here :)")
   });

});

// function Pizza(size, toppings, crust, ) {
//    this.crust = crust;
//    this.size = size;
//    this.toppings = toppings;
// }
//Jquery pick user input from form