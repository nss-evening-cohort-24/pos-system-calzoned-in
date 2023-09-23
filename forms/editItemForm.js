import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const editItemForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `edit-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="title">Item Name</label>
        <input type="text" class="form-control" id="item_name" aria-describedby="item_name" placeholder="Enter Item Name" value="${obj.itemName || ''}" required>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="Price" value="${obj.price || ''}" required>
      </div>
      <button type="submit" id="edititembtn" class="btn btn-info">Submit Item
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default editItemForm;
