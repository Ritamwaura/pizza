var moringastudent = {
};
var orders=[];
var orders = [];

var pizzaSize = {
  small: 250,
@@ -31,6 +31,7 @@ var pizzaToppings = {
    cheese: 20
  },
}

function Pizza(size, topping, crust) {
  this.size = size;
  this.topping = topping;
@@ -62,19 +63,19 @@ Pizza.prototype.calculateCost = function() {
  return size + crust + topping;
}

var checkout = function(){
    if($('#delivery').is(":checked")){
      orders.push(150)
    }
    var total=0
    for (var i = 0; i < orders.length; i++) {
      total += parseInt(orders[i]);
    }
    alert("Total cost is"+" Ksh."+total);
var checkout = function() {
  if ($('#delivery').is(":checked")) {
    orders.push(150)
  }
  var total = 0
  for (var i = 0; i < orders.length; i++) {
    total += parseInt(orders[i]);
  }
  alert("Total cost is" + " Ksh." + total);
}

$(document).ready(function() {
  $("#checkout").click(function(){
  $("#checkout").click(function() {
    checkout();
  });

@@ -91,18 +92,19 @@ $(document).ready(function() {
    if ($('#toppingMushrooms').is(":checked")) {
      inputtedTopping += ' Mushrooms';
    }
     if ($('#toppingPepperoni').is(":checked")) {
    if ($('#toppingPepperoni').is(":checked")) {
      inputtedTopping += ' Pepperoni';
    }
     if($('#toppingCheese').is(":checked")) {
    if ($('#toppingCheese').is(":checked")) {
      console.log(inputtedTopping)
      inputtedTopping += ' Cheese';
    }

    var newPizza = new Pizza(inputtedSize,inputtedTopping, inputtedCrust);
    var newPizza = new Pizza(inputtedSize, inputtedTopping, inputtedCrust);

    $("ul#pizzaorder").append("<li><span class='order'>" + newPizza.fullOrder() + "</span></li>");
    orders.push(newPizza.calculateCost());
    $('input:checkbox:checked').prop('checked', false);
   });

  });
});
