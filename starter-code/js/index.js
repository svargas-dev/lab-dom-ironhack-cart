// ITERATION 1

function updateSubtotal($product) {
  let $priceObj = document.querySelectorAll('.price > span');
  let $quantityObj = document.querySelectorAll('.quantity > input');
  let $subtotalObj = document.querySelectorAll('.subtotal > span');
  
  let $price = Number($priceObj[0].textContent);
  let $quantity = + Number($quantityObj[0].valueAsNumber);
  // console.log('price ' + $price);
  // console.log('quanity ' + $quantity);
  $subtotalObj[0].innerText = ($price * $quantity).toFixed(2);
}



function calculateAll() {
  // ITERATION 2
  //...
  // ITERATION 3
  //...
}

const $calculateTrigger = document.getElementById('calculate');

$calculateTrigger.addEventListener('click', calculateAll);

// ITERATION 4

function addProductRemoveListener($removeButton) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}
