import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import selectItem from './selectItem';

const addOrderForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="title">Customer Name</label>
        <input type="text" class="form-control" id="customername" aria-describedby="customerName" placeholder="Enter Customer Name" value="${obj.customerName || ''}" required>
      </div>
      <div class="form-group">
      <label for="title">Email</label>
      <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" value="${obj.email || ''}"required>
    </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="text" class="form-control" id="phone" placeholder="Phone Number" value="${obj.phone || ''}" required>
      </div>
      <div class="form-group" id="select-item">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="ordertype" ${obj.isPhone ? 'checked' : ''}>
        <label class="form-check-label" for="phoneorder">Phone</label>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" id="ordertype" ${obj.isPhone ? 'checked' : ''}>
      <label class="form-check-label" for="walkorder">Walk in</label>
    </div>
      <button type="submit" class="btn btn-primary">Submit Order
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectItem(`${obj.items || ''}`, uid);
};

export default addOrderForm;
