// Back-end logic

var add = function(number1, number2) {
  document.calculator.output.value = number1 + number2;   /* document.<form name>.<input name>.<element value>*/
};

var subtract = function(number1, number2) {
  document.calculator.output.value = number1 - number2;
};

var multiply = function(number1, number2) {
  document.calculator.output.value = number1 * number2;
};

var divide = function(number1, number2) {
  document.calculator.output.value = number1 / number2;
};


// Front-end logic


$( document ).ready(function() {
  $("button#add").click(function(event) {
    event.preventDefault();
  var number1 = parseFloat($("#num1").val());
  var number2 = parseFloat($("#num2").val());
  var result = add(number1, number2);
  if (isNaN(number1) || (isNaN(number2))) {
    document.calculator.output.value = "Invalid Input";
  }
  $("#result-output").text(result);
  });


  $("button#subtract").click(function(event) {
    event.preventDefault();
  var number1 = parseFloat($("#num1").val());
  var number2 = parseFloat($("#num2").val());
  var result = subtract(number1, number2);
  if (isNaN(number1) || (isNaN(number2))) {
    document.calculator.output.value = "Invalid Input";
  }
  $("#result-output").text(result);
  });


  $("button#multiply").click(function(event) {
    event.preventDefault();
  var number1 = parseFloat($("#num1").val());
  var number2 = parseFloat($("#num2").val());
  var result = multiply(number1, number2);
  if (isNaN(number1) || (isNaN(number2))) {
    document.calculator.output.value = "Invalid Input";
  }
  $("#result-output").text(result);
  });


  $("button#divide").click(function(event) {
    event.preventDefault();
  var number1 = parseFloat($("#num1").val());
  var number2 = parseFloat($("#num2").val());
  var result = divide(number1, number2);
  if (isNaN(number1) || (isNaN(number2))) {
    document.calculator.output.value = "Invalid Input";
  }
  $("#result-output").text(result);
  });

});
