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


// ITERATION 4

function addProductRemoveListener($removeButton) {
  let $rowToDelete = event.currentTarget.parentNode.parentNode.rowIndex;
  document.getElementById("cart").deleteRow($rowToDelete);
  calculateAll();
}
// Trigger for remove products
document.querySelectorAll('.btn-remove').forEach(element => {
  element.addEventListener('click', addProductRemoveListener);
});


// ITERATION 5

function createProduct(event) {
  let $newProduct = document.querySelector('.create-product input[type=text]').value;
  let $newPrice = document.querySelector('.create-product input[type=number]').valueAsNumber;
  let $newRow = document.querySelectorAll('#cart > tbody > tr').length;
  // console.log($newProduct);
  // console.log($newPrice);
  // console.log($newRow);
  let $table = document.querySelector('#cart > tbody')
  let $row = $table.insertRow($newRow);
  $row.innerHTML = ` 
  <tr class="product">
  <td class="name">
    <span>${$newProduct}</span>
  </td>

  <td class="price">$<span>${$newPrice}</span></td>
  
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  
  <td class="subtotal">$<span>0</span></td>
  
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;

  // let c1 = row.insertCell(0);
  // let c2 = row.insertCell(1);
  // c1.innerHTML = "NEW CELL1";
  // c2.innerHTML = "NEW CELL2";
}
// Trigger to add products
document.querySelectorAll('#create').forEach(element => {
  element.addEventListener('click', createProduct);
});
