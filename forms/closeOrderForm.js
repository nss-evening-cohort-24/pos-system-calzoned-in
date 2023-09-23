import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const closeOrderForm = (orderId, total) => {
  console.warn('?', orderId);
  clearDom();
  const domString = `
    <div class="form-group">
      <label for="language">Payment Type:</label><BR>
      <form id="close-order--${orderId}--${total}">
        <select id="payment" class="form-select" required>
          <option value="credit">Credit</option>
          <option value="cash">Cash</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>
      <div class="form-group">
        <label for="tips">Tip:</label><BR>
        <input type="number" class="form-control" id="tips" aria-describedby="tip-amount" placeholder="Enter A Tip Amount" value="">
      </div><BR>
      <button type="submit" class="btn btn-success" id="close-order--${orderId}--${total}">Close Order</button>
    </form>`;
  renderToDom('#store', domString);
};

export default closeOrderForm;
