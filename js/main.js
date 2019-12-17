function Pizza(size, toppings, crust, ) {
   this.crust = crust;
   this.size = size;
   this.toppings = toppings;
}
//Jquery pick user input from form

$(document).ready(function() {
   $("#order form").submit(function(event) {
      var sizeInput = document.getElementById("size");
      var size = sizeInput.options[sizeInput.selectedIndex].text;

      var toppingInput = document.getElementById("topping");
      var topping = toppingInput.options[toppingInput.selectedIndex].text;

      var crustInput = document.getElementById("crust");
      var crust = crustInput.options[crustInput.selectedIndex].text;

      var qty = parseInt ($("input#qty").val());

      //Jquery append users order
      $("#displayqty").append(qty);
      $("#displaycrust").append(crust);
      $("#displaysize").append(size);
      $("#displaytopping").append(topping);

      $("#story").show();

      event.preventDefault();
  });
});