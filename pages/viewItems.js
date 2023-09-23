import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const viewItems = (res) => {
  clearDom();
  let domString = '';
  if (res.orderItems.length < 1) {
    domString = `<div style="display:grid;"><h1> No Items </h1><div><button id="add-item-btn--${res.firebaseKey}" type="button" class="btn btn-success">ADD ITEM</button></div><div>`;
  } else {
    const total = res.orderItems.reduce((acc, curr) => acc + curr.price, 0);
    domString = `<div style="display:grid;"><h1>CART TOTAL: $${res.orderItems.reduce((acc, curr) => acc + curr.price, 0)} </h1>`;
    res.orderItems.forEach((item) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.itemName}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">$${item.price}</h6>
        <a href="#" class="card-link" id="item-edit--${item.firebaseKey}">Edit Item</a>
        <a href="#" i id='item-delete--${item.firebaseKey}--${res.firebaseKey}' class="fa-solid fa-trash-can" /></a>
      </div>
    </div>`;
    });
    domString += `<div><button id="add-item-btn--${res.firebaseKey}" type="button" class="btn btn-success">ADD ITEM</button><button type="button" id="payment-type-btn--${res.firebaseKey}--${total}" class="btn btn-primary">GO TO PAYMENT</button></div></div>`;
  }

  renderToDOM('#orders', domString);
};

export default viewItems;
