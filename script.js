const phonePrice = 1219;
const casePrice = 59;
let productTotal = 0;

function handleProductChange(product, isIncrease) {
  const productCount = getInputValue(product);
  const productNewCount = isIncrease
    ? productCount + 1
    : productCount > 0
    ? productCount - 1
    : 0;
  document.getElementById(product + "-count").value = productNewCount;
  productTotal =
    productNewCount * (product === "phone" ? phonePrice : casePrice);
  document.getElementById(product + "-total").innerText = "$" + productTotal;
  calculateTotal();
}
calculateTotal();
function calculateTotal() {
  const phoneCount = getInputValue("phone");
  const caseCount = getInputValue("case");
  const subTotal = phoneCount * phonePrice + caseCount * casePrice;
  document.getElementById("sub-total").innerText = "$" + subTotal;
  // tax 5%
  const tax = Math.round(subTotal * 0.05);
  document.getElementById("tax").innerHTML = "$" + tax;
  // total calculation
  const total = subTotal + tax;
  document.getElementById("total").innerText = "$" + total;
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  return productCount;
}
// removing element and update price
function removeElement(product) {
  document.getElementById(product + "-display").style.display = "none";
  document.getElementById(product + "-count").value = 0;
  document.getElementById(product + "-total").innerText = "$0";
  calculateTotal();
}
// checkout button change the display and open welcome block
let checkOutBtn = document
  .getElementById("check-out")
  .addEventListener("click", function () {
    let cart = document.getElementById("cart");
    cart.style.display = "none";
    document.getElementById("welcome").style.display = "block";
  });

// removing element
//  function removeElement (product) {
//     document.getElementById(product+"-display").style.display = "none";
//     // this.remove(event);
//   };
// document.getElementById("remove").addEventListener("click", function (event) {
//   document.getElementById("cart-item").style.display = "none";
//   // this.remove(event);
// });
/*

let phonePrice = 1219;
let casePrice = 59;
let productTotal = 0;

function handleProductChange(product, isIncrease) {
  let productCount = getInputValue(product);
  let productNewCount = productCount;

  if (isIncrease == true) {
    productNewCount = productCount + 1;
  } else if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  document.getElementById(product + "-count").value = productNewCount;
  if (product == "phone") {
    productTotal = productNewCount * phonePrice;
  } else if (product == "case") {
    productTotal = productNewCount * casePrice;
  }
  document.getElementById(product + "-total").innerText = "$" + productTotal;
  calculateTotal();
}
calculateTotal();
function calculateTotal() {
  let phoneCount = getInputValue("phone");
  let caseCount = getInputValue("case");
  let subTotal = phoneCount * phonePrice + caseCount * casePrice;
  document.getElementById("sub-total").innerText = "$" + subTotal;
  // tax 5%
  let tax = Math.round(subTotal * 0.05);
  document.getElementById("tax").innerHTML = "$" + tax;
  // total calculation
  let total = subTotal + tax;
  document.getElementById("total").innerText = "$" + total;
}

function getInputValue(product) {
  let productInput = document.getElementById(product + "-count");
  let productCount = parseInt(productInput.value);
  return productCount;
}
*/
// document.getElementById("phone-increase").addEventListener("click", function () {
//     handleProductChange(true);
//   });

// document.getElementById("phone-decrease").addEventListener("click", function () {
//     handleProductChange(false);
//   });

// function handleProductChange(isIncrease) {
//   let phoneInput = document.getElementById("phone-count");
//   let phoneCount = parseInt(phoneInput.value);
//   let phoneNewCount = phoneCount;

//   if (isIncrease == true) {
//     phoneNewCount = phoneCount + 1;
//   } else if (isIncrease == false && phoneCount > 0) {
//     phoneNewCount = phoneCount - 1;
//   }
//   phoneInput.value = phoneNewCount;
//   //   phoneInput.innerHTML = phoneNewCount;
//   let phoneTotal = phoneNewCount * phonePrice;
//   document.getElementById("phone-total").innerText = "$" + phoneTotal;
// }
// function handleProductChange(product, isIncrease) {
//   let productInput = document.getElementById(product + "-count");
//   let productCount = parseInt(productInput.value);
//   let productNewCount = productCount;

//   if (isIncrease == true) {
//     productNewCount = productCount + 1;
//   } else if (isIncrease == false && productCount > 0) {
//     productNewCount = productCount - 1;
//   }
//   productInput.value = productNewCount;
//   if (product == "phone") {
//     productTotal = productNewCount * phonePrice;
//   } else if (product == "case") {
//     productTotal = productNewCount * casePrice;
//   }
//   document.getElementById(product + "-total").innerText = "$" + productTotal;
//   calculateTotal();
// }

// Old Code
// let itemOnePrice = 1219;
// let itemTwoPrice = 59;

// incrementItem("addItemOne", "itemOne", "itemOnePrice", itemOnePrice);
// decrementItem("removeItemOne", "itemOne", "itemOnePrice", itemOnePrice);

// incrementItem("addItemTwo", "itemTwo", "itemTwoPrice", itemTwoPrice);
// decrementItem("removeItemTwo", "itemTwo", "itemTwoPrice", itemTwoPrice);

// function incrementItem(btnId, itemQty, itemValueId, itemPrice) {
//   let addItem = document.getElementById(btnId);
//   addItem.addEventListener("click", function () {
//     let itemQuantity = increment(itemQty);
//     updateSingleItemPrice(itemValueId, itemPrice, itemQuantity);

//   });
// }

// function decrementItem(btnId, itemQty, itemValueId, itemPrice) {
//   let removeItem = document.getElementById(btnId);
//   removeItem.addEventListener("click", function () {
//     let itemValue = getInputValue(itemQty);
//     if (itemValue > 1) {
//       itemValue--;
//       document.getElementById(itemQty).value = itemValue;

//       updateSingleItemPrice(itemValueId, itemPrice, itemValue);
//     } else {
//       alert("Item's quantity should be positive");
//     }
//   });
// }

// function getInputValue(id) {
//   let item = document.getElementById(id).value;
//   let itemValue = parseInt(item);
//   return itemValue;
// }

// function increment(id) {
//   let itemValue = getInputValue(id);
//   itemValue++;
//   document.getElementById(id).value = itemValue; //set value to the input field
//   return itemValue;
// }

// function updateSingleItemPrice(id, price, value) {
//   let singleItemlPrice = price * value;
//   document.getElementById(id).innerText = singleItemlPrice;
// }

// // let itemOneTotalPrice = document.getElementById("itemOnePrice").innerText;
// // let itemOneTotalPriceNumber = parseInt(itemOneTotalPrice);
// // let itemTwoTotalPrice = document.getElementById("itemTwoPrice").innerText;
// // let itemTwoTotalPriceNumber = parseInt(itemTwoTotalPrice);
// // let subTotalPrice = itemOneTotalPriceNumber + itemTwoTotalPriceNumber;
// // document.getElementById("subtotal").innerText = subTotalPrice;

// function updateSubtotal(itemOnePriceId, itemTwoPriceId, subtotalId) {
//   let itemOneTotalPrice = document.getElementById(itemOnePriceId).innerText;
//   let itemOneTotalPriceNumber = parseInt(itemOneTotalPrice);
//   let itemTwoTotalPrice = document.getElementById(itemTwoPriceId).innerText;
//   let itemTwoTotalPriceNumber = parseInt(itemTwoTotalPrice);
//   let subTotalPrice = itemOneTotalPriceNumber + itemTwoTotalPriceNumber;
//   document.getElementById(subtotalId).innerText = subTotalPrice;
// }
// /* item One plus button
// // let addItemOne = document.getElementById("addItemOne");
// // addItemOne.addEventListener("click", function () {
// //   let itemOneValue = increment("itemOne");
// //   updateSingleItemPrice("itemOnePrice", itemOnePrice, itemOneValue);
// // });*/
// /* item One minus button
// // let removeItemOne = document.getElementById("removeItemOne");
// // removeItemOne.addEventListener("click", function () {
// //   let itemOneValue = getInputValue("itemOne");
// //   if (itemOneValue > 1) {
// //     itemOneValue--;
// //     document.getElementById("itemOne").value = itemOneValue;

// //     updateSingleItemPrice("itemOnePrice", itemOnePrice, itemOneValue);
// //   } else {
// //     alert("Item's quantity should be positive");
// //   }
// // });*/
