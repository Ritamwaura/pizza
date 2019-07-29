$(document).ready(function(){
  $("select#size").change(function(){
    window.selectsize = $(this).children("option:select").val()
    if (window.selectsize === "small"){
      window.money_size = 250;
    }
    else if (window.selectsize === "big"){
      window.money_size = 400;
    }
    else if (window.selectsize === "large"){
      window.money_size = 1000;
    }
    $("#output1").text(window.selectcrust);
  })
  $("select#toppings").change(function(){
    window.selecttoppings = $(this).children("option:select").val()
    if (window.selecttoppings === "mush"){
      window.money_toppings = 70;
    }
    else if (window.selecttoppings === "romantic"){
      window.money_toppings = 70;
    }
    else if (window.selecttoppings === "brave"){
      window.money_toppings = 70
    }
    else if (window.selecttoppings === "cheese"){
      window.money_toppings = 70
    }
    $("#output2").text(window.selecttoppings);
  })
  $("select#crust").change(function(){
    window.selectcrust = $(this).children("option:select").val()
    if (window.selectcrust === "crispy"){
      window.money_crust = 100;
    }
    else if (window.selectcrust === "stuff"){
      window.money_crust = 150;
    }
    else if (window.selectcrust === "gluten-free"){
      window.money_crust = 200;
    }
    $("#output3").text(window.selectcrust);

  })
  $("#order").click(function(){

  })

})
