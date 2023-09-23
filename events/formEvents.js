import {
  getOrders, createOrder, updateOrder, getSingleOrder
} from '../api/orderData';
import { showOrders } from '../pages/orders';
import { createRevenue, updateRevenue } from '../api/revenue';

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
  document.querySelector('#store').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('close-order-')) {
      const [, firebaseKey, total] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((res) => {
        const payload = {
          orderId: firebaseKey,
          total: Number(total) + Number(document.querySelector('#tips').value),
          paymentType: document.querySelector('#payment').value,
          tipTotal: document.querySelector('#tips').value,
          orderType: res.orderType
        };
        const closePayload = { firebaseKey, isOpen: false };
        updateOrder(closePayload).then(() => {
          createRevenue(payload).then(({ name }) => {
            const patchPayload = { firebaseKey: name };
            updateRevenue(patchPayload).then(() => {
              getOrders().then(showOrders);
            });
          });
        });
      });
    }
  });
};
export default formEvents;
