import { deleteItemFromOrder, getOrderItems } from './orderData';
import { deleteItem } from './itemData';

const deleteOrderItemRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderItems(firebaseKey).then((allOrderItems) => {
    const deleteItemPromises = allOrderItems.map((item) => deleteItem(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteItemFromOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export default deleteOrderItemRelationship;
