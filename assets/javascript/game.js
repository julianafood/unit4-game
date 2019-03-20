var random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

var counter = 0;
var wins = 0;
var losses = 0;
var numberOptions = [12, 9, 6, 3];

$("#target-number").html(targetNumber);
console.log(targetNumber);

for (var i = 0; i < numberOptions.length; i++) {
  console.log(numberOptions[i]);
  var imageCrystal = $("<img>");

  imageCrystal.addClass("crystal-image");
  imageCrystal.attr(('src',"assets/images/plumbob.jpg");
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;

  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
    wins ++;
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
    losses ++;
  }

});

}