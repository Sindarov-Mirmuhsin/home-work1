var numbers = [1, 3, 5, 9,];

function add(evt) {
  var oddNumbers = 0;
  for (var i = 0; i < evt.length; i++){
    oddNumbers += evt[i];
  }

  return oddNumbers;
}

console.log(add(numbers));