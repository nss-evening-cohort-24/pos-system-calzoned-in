import { getOrders, deleteOrder } from '../api/orderData';
import { showOrders, emptyOrders } from '../pages/orders';

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
};
export default domEvents;
