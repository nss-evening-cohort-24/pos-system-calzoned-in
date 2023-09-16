import { getOrders, deleteOrder, getSingleOrder } from '../api/orderData';
import { showOrders, emptyOrders } from '../pages/orders';
import addOrderForm from '../forms/orderForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrder(firebaseKey).then(() => {
          getOrders(user.uid).then((array) => {
            if (array.length) {
              showOrders(array);
            } else {
              emptyOrders();
            }
          });
        });
      }
    }
  });
  document.querySelector('#landing-page').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders-btn')) {
      getOrders(user.uid).then(showOrders);
    }
  });
  document.querySelector('#landing-page').addEventListener('click', (e) => {
    if (e.target.id.includes('add-order-btn')) {
      addOrderForm(user.uid);
    }
  });
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
    }
  });
};
export default domEvents;
