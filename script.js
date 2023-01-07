let itemOnePrice = 1219;
let itemTwoPrice = 59;

/* item One plus button
// let addItemOne = document.getElementById("addItemOne");
// addItemOne.addEventListener("click", function () {
//   let itemOneValue = increment("itemOne");
//   updateSingleItemPrice("itemOnePrice", itemOnePrice, itemOneValue);
// });*/
/* item One minus button
// let removeItemOne = document.getElementById("removeItemOne");
// removeItemOne.addEventListener("click", function () {
//   let itemOneValue = getInputValue("itemOne");
//   if (itemOneValue > 1) {
//     itemOneValue--;
//     document.getElementById("itemOne").value = itemOneValue;

//     updateSingleItemPrice("itemOnePrice", itemOnePrice, itemOneValue);
//   } else {
//     alert("Item's quantity should be positive");
//   }
// });*/
incrementItem("addItemOne", "itemOne", "itemOnePrice", itemOnePrice);
decrementItem("removeItemOne", "itemOne", "itemOnePrice", itemOnePrice);

incrementItem("addItemTwo", "itemTwo", "itemTwoPrice", itemTwoPrice);
decrementItem("removeItemTwo", "itemTwo", "itemTwoPrice", itemTwoPrice);

function incrementItem(btnId, itemQty, itemValueId, itemPrice) {
  let addItem = document.getElementById(btnId);
  addItem.addEventListener("click", function () {
    let itemQuantity = increment(itemQty);
    updateSingleItemPrice(itemValueId, itemPrice, itemQuantity);
  });
}

function decrementItem(btnId, itemQty, itemValueId, itemPrice) {
  let removeItem = document.getElementById(btnId);
  removeItem.addEventListener("click", function () {
    let itemValue = getInputValue(itemQty);
    if (itemValue > 1) {
      itemValue--;
      document.getElementById(itemQty).value = itemValue;

      updateSingleItemPrice(itemValueId, itemPrice, itemValue);
    } else {
      alert("Item's quantity should be positive");
    }
  });
}

function getInputValue(id) {
  let item = document.getElementById(id).value;
  let itemValue = parseInt(item);
  return itemValue;
}

function increment(id) {
  let itemValue = getInputValue(id);
  itemValue++;
  document.getElementById(id).value = itemValue; //set value to the input field
  return itemValue;
}

function updateSingleItemPrice(id, price, value) {
  let singleItemlPrice = price * value;
  document.getElementById(id).innerText = singleItemlPrice;
}
