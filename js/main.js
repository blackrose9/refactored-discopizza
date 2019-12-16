function Pizza(size, toppings, crust, ) {
   this.crust = crust;
   this.size = size;
   this.toppings = toppings;
}
//Jquery pick user input from form

$(document).ready(function() {
   $("#blanks form").submit(function(event) {
      var person1Input = $("input#person1").val();
      var person2Input = $("input#person2").val();
      var animalInput = $("input#animal").val();
      var exclamationInput = $("input#exclamation").val();
      var verbInput = $("input#verb").val();
      var nounInput = $("input#noun").val();

      //Jquery append users order
      $(".person1").append(person1Input);
      $(".person2").append(person2Input);
      $(".animal").append(animalInput);
      $(".exclamation").append(exclamationInput);
      $(".verb").append(verbInput);
      $(".noun").append(nounInput);

      $("#story").show();

      event.preventDefault();
  });
});