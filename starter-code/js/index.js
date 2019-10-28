// ITERATION 1

function updateSubtotal($product, productIndex) {
  let $priceObj = document.querySelectorAll('.price > span');
  let $quantityObj = document.querySelectorAll('.quantity > input');
  let $subtotalObj = document.querySelectorAll('.subtotal > span');
  
  let $price = Number($priceObj[productIndex].textContent);
  let $quantity = + Number($quantityObj[productIndex].valueAsNumber);
  // console.log('price ' + $price);
  // console.log('quanity ' + $quantity);
  $subtotalObj[productIndex].innerText = ($price * $quantity).toFixed(2);
  return $price * $quantity;
}


function calculateAll() {
  // ITERATION 2
  // let $products = document.querySelectorAll('.product');
  // let total = 0;
  // for (let productIndex=0; productIndex < $products.length; productIndex++) {
  //   updateSubtotal($products[productIndex], productIndex);
  // }

  // ITERATION 3
  // sum the product subtotals

  let $products = document.querySelectorAll('.product');
  let total = 0;
  for (let productIndex=0; productIndex < $products.length; productIndex++) {
    total += updateSubtotal($products[productIndex], productIndex);
  }
  document.querySelector('#total-value > span').innerText = total.toFixed(2);
}

// Outside of function!
const $calculateTrigger = document.getElementById('calculate');
$calculateTrigger.addEventListener('click', calculateAll);

// Trigger for remove buttons
document.querySelectorAll('.btn-remove').forEach(element => {
  element.addEventListener('click', addProductRemoveListener);
});


// ITERATION 4

function addProductRemoveListener($removeButton) {
  let $rowToDelete = event.currentTarget.parentNode.parentNode.rowIndex;
  document.getElementById("cart").deleteRow($rowToDelete);
}

// ITERATION 5

function createProduct(event) {
  // ...
}
