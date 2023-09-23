import {
  getOrders, deleteOrder, getSingleOrder, deleteItemFromOrder
} from '../api/orderData';
import addOrderForm from '../forms/orderForm';
import getItemsByOrder from '../api/getItemsByOrder';
import { showOrders, emptyOrders } from '../pages/orders';
import { getItems, createOrderItem, updateOrderItems } from '../api/itemData';
import addNewItem from '../forms/itemForm';
import { showItems } from '../pages/items';
import closeOrderForm from '../forms/closeOrderForm';
import { getRevenue } from '../api/revenue';
import displayRevenue from '../pages/revenue';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete order?')) {
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
    if (e.target.id.includes('landing-view-orders-btn')) {
      getOrders(user.uid).then(showOrders);
    }
    if (e.target.id.includes('landing-view-revenue-btn')) {
      getRevenue().then(displayRevenue);
    }
  });
  document.querySelector('#landing-page').addEventListener('click', (e) => {
    if (e.target.id.includes('landing-add-order-btn')) {
      addOrderForm(user.uid);
    }
  });
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
    }
  });

  document.querySelector('#store').addEventListener('click', (e) => {
    if (e.target.id.includes('view-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getItemsByOrder(firebaseKey).then((details) => {
        showItems(details);
      });
    }

    if (e.target.id.includes('add-item-btn')) {
      const [, orderId] = e.target.id.split('--');
      getItems().then((array) => {
        addNewItem(array, orderId);
      });
    }

    if (e.target.id.includes('add-item-order-btn')) {
      const [, itemId, orderId] = e.target.id.split('--');
      const payload = {
        orderId,
        itemId,
        uid: user.uid
      };
      createOrderItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrderItems(patchPayload).then(() => {
          getItemsByOrder(orderId).then((res) => showItems(res));
        });
      });
    }
  });
  document.querySelector('#store').addEventListener('click', (e) => {
    const [,, orderId] = e.target.id.split('--');
    if (e.target.id.includes('delete-item-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete item?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteItemFromOrder(firebaseKey).then(() => {
          getItemsByOrder(orderId).then((res) => showItems(res));
        });
      }
    }
  });
  document.querySelector('#store').addEventListener('click', (e) => {
    if (e.target.id.includes('payment-type-btn')) {
      const [, orderId, total] = e.target.id.split('--');
      closeOrderForm(orderId, total);
    }
  });
};

export default domEvents;
