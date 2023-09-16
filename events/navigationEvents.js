import addOrderForm from '../forms/orderForm';
import { signOut } from '../utils/auth';
import { getOrders, searchOrders } from '../api/orderData';
import { showOrders, emptyOrders } from '../pages/orders';

const navEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-order-btn')) {
      addOrderForm(user.uid);
    }

    document.querySelector('#new-logout')
      .addEventListener('click', signOut);

    document.querySelector('#view-orders').addEventListener('click', () => {
      getOrders(user.uid).then(showOrders);
    });
  });
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      searchOrders(searchValue, user.uid)
        .then((search) => {
          if (search.length) {
            showOrders(search);
          } else {
            emptyOrders();
          }
        });
      document.querySelector('#search').value = '';
    }
  });
};

export default navEvents;
