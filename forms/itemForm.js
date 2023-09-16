import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// FORM TO ADD AN ITEM
const addItemForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
  <div class="form-group">
    <label for="title">Item Name:</label>
    <input type="text" class="form-control" id="title" aria-describedby="itemTitle" placeholder="Enter An Item" value="${obj.itemName || ''}" required>
  </div> <BR>
  <div class="form-group">
    <label for="description">Item Price:</label>
    <textarea class="form-control" placeholder="Enter Price" id="price" style="height: 100px">${obj.price || ''}</textarea>
  </div><BR>
  <button type="submit" class="btn btn-outline" id="submit-btn">$obj.firebaseKey ? 'Add/Edit Item' : 'Submit Item'}
  </button>
</form>
  `;

  renderToDOM('#form-container', domString);
};

export default addItemForm;
