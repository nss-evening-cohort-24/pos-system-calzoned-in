import { getOrders, createOrder, updateOrder } from '../api/orderData';
import { showOrders } from '../pages/orders';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const payload = {
        customerName: document.querySelector('#customer_name').value,
        isOpen: true,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        orderType: document.querySelector('#order_type').value,
        uid: user.uid,
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders(user.uid).then(showOrders);
        });
      });
    }
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        customerName: document.querySelector('#customer_name').value,
        isOpen: true,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        orderType: document.querySelector('#order_type').value,
        uid: user.uid,
        firebaseKey
      };

      updateOrder(payload).then(() => {
        getOrders(user.uid).then(showOrders);
      });
    }
  });
};
export default formEvents;
