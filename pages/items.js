import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyItems = () => {
  const domString = '<h1>No Items Found!</h2>';
  renderToDOM('#store', domString);
};

const showItems = (res) => {
  console.warn('?', res);
  clearDom();
  let domString = '';
  if (res.orderItems.length < 1) {
    domString = `<div style="display:grid;"><h1> No Items </h1><div><button id="add-item-btn--${res.firebaseKey}" type="button" class="btn btn-success">ADD ITEM</button></div><div>`;
  } else {
    const total = res.orderItems.reduce((acc, curr) => acc + curr.price, 0);
    domString = `<div style="display:grid;"><h1>ORDER TOTAL: $${res.orderItems.reduce((acc, curr) => acc + curr.item.price, 0)} </h1>`;
    res.orderItems.forEach((orderItem) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${orderItem.item.itemName}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">$${orderItem.item.price}</h6>
        <a href="#" class="card-link" id="edit-item-btn--${orderItem.orderItemKey}">Edit Item</a>
        <a href="#" class="card-link" id="delete-item-btn--${orderItem.orderItemKey}--${res.firebaseKey}">Delete Item</a>
      </div>
    </div>`;
    });
    domString += `<div><button id="add-item-btn--${res.firebaseKey}" type="button" class="btn btn-secondary">ADD ITEM</button><button type="button" id="payment-type-btn--${res.firebaseKey}--${total}" class="btn btn-warning">GO TO PAYMENT</button></div></div>`;
  }

  renderToDOM('#store', domString);
};

export { emptyItems, showItems };
