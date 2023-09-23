import {
  getOrders, deleteOrder, getSingleOrder, deleteItemFromOrder, updateOrder
} from '../api/orderData';
import addOrderForm from '../forms/orderForm';
import getItemsByOrder from '../api/getItemsByOrder';
import { showOrders, emptyOrders } from '../pages/orders';
import { getItems, createOrderItem, updateOrderItems } from '../api/itemData';
import addNewItem from '../forms/itemForm';
import { showItems } from '../pages/items';
import closeOrderForm from '../forms/closeOrderForm';

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
    if (e.target.id.includes('close-order-')) {
      console.warn('closing order!');
      const [, firebaseKey, total] = e.target.id.split('--');
      console.warn('closing order!');
      getSingleOrder(firebaseKey).then((res) => {
        const paymentType = document.querySelector(`#close-order--${firebaseKey}--${total} #payment`);
        const tipAmount = document.querySelector(`#close-order--${firebaseKey}--${total} #tips`);
        if (paymentType && tipAmount) {
          const payload = {
            orderId: firebaseKey,
            isOpen: false,
            total,
            paymentType: paymentType.value,
            tip: tipAmount.value,
            ordertype: res.ordertype
          };
          updateOrder(payload).then(() => {
            getOrders(user.uid).then(showOrders);
          });
        }
      });
    }
  });
};
export default domEvents;
