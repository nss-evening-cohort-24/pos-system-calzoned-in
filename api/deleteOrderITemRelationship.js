import { deleteItemFromOrder, deleteOrder } from './orderData';
import { orderItemsByOrderId } from './itemData';

const deleteOrderItemRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  orderItemsByOrderId(firebaseKey).then((allOrderItems) => {
    const deleteItemPromises = allOrderItems.map((item) => deleteItemFromOrder(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export default deleteOrderItemRelationship;
