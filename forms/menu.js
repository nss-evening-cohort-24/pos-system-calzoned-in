import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addNewItem = (array) => {
  clearDom();
  let domString = `<h3 style="display:grid;">Menu Items</h3>
  <button id="add-menu-btn" type="button" class="btn btn-success">Add Menu Item</button>`;

  if (array.length) {
    array.forEach((item) => {
      domString += `
      <div class="wrap">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.itemName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">$${item.price}</h6>
          <div>
          <button id="edit-item-btn--${item.firebaseKey}" type="button" class="btn btn-success">Edit Item</button>
          </div>
        </div>
      </div>`;
    });
  }
  renderToDOM('#store', domString);
};

export default addNewItem;
