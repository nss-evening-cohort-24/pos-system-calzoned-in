import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

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
        <div class="form-group">
        <label for="ordertype">Order Type</label>
        <select class="form-control" id="ordertype" required>
          <option value="" disabled selected>Order Type</option>
          <option value="Phone" ${obj.isPhone ? 'selected' : ''}>Phone</option>
          <option value="Walk-in" ${obj.isPhone ? 'disabled' : ''} ${obj.isWalkIn ? 'selected' : ''}>Walk-in</option>
        </select>
      </div>
      <button type="submit" id="addordbtn" class="btn btn-info">Submit Order
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderForm;
