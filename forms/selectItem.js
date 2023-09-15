import { getOrders } from '../api/orderData';
import renderToDOM from '../utils/renderToDom';

const selectItem = (itemsId, uid) => {
  let domString = `<label for="item">Add an Item</label>
    <select class="form-control" id="items_id" required>
    <option value="">Select an Item</option>`;

  getOrders(uid).then((itemsArray) => {
    itemsArray.forEach((items) => {
      domString += `
          <option 
            value="${items.firebaseKey}" 
            ${itemsId === items.firebaseKey ? 'selected' : ''}>
              ${items.itemName} ${items.price}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-item', domString);
  });
};
export default selectItem;
