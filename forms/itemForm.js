import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addNewItem = (array, orderId) => {
  clearDom();
  let domString = '';

  if (!array.length) {
    domString += '<h1 style="display:grid; color:white;">All Available Items Are Added To Order</h1>';
  } else {
    domString += '<h3 style="display:grid;">Menu Items</h3>';
    array.forEach((item) => {
      domString += `
      <div class="wrap">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.itemName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">$${item.price}</h6>
          <div>
          <button id="add-item-order-btn--${item.firebaseKey}--${orderId}" type="button" class="btn btn-success">ADD ITEM TO CART</button>
          </div>
        </div>
      </div>`;
    });
  }
  renderToDOM('#store', domString);
};

export default addNewItem;
