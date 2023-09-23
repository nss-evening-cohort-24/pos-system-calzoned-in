import {
  getOrders, getSingleOrder, deleteItemFromOrder
} from '../api/orderData';
import addOrderForm from '../forms/orderForm';
import getItemsByOrder from '../api/getItemsByOrder';
import { showOrders, emptyOrders } from '../pages/orders';
import { getItems, createOrderItem, updateOrderItems } from '../api/itemData';
import addNewItem from '../forms/itemForm';
import { showItems } from '../pages/items';
import deleteOrderItemRelationship from '../api/deleteOrderITemRelationship';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete order?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrderItemRelationship(firebaseKey).then(() => {
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
    if (e.target.id.includes('delete-item-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete item?')) {
        console.warn('?', e.target);
        const [, firebaseKey] = e.target.id.split('--');
        deleteItemFromOrder(firebaseKey).then(() => {
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
