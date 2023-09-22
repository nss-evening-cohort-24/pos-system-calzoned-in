import { getSingleItem } from './itemData';
import {
  deleteItemFromOrder, deleteOrder, getSingleOrder, getOrderItems
} from './orderData';

// const getItemsByOrder = async (orderId) => {
//   const order = await getSingleOrder(orderId);
//   const allOrderItems = await getOrderItems(orderId);
//   const getSingleItems = await allOrderItems.map((item) => getSingleItem(item.itemId));
//   const orderItems = await Promise.all(getSingleItems);
//   return { ...order, orderItems };
// };

// const deleteItemOrderRelationship = (firebaseKey) => new Promise((resolve, reject) => {
//   getOrderItems(firebaseKey).then((orderItemsArray) => {
//     const deleteItemPromises = orderItemsArray.map((item) => deleteItemFromOrder(item.firebaseKey));

//     Promise.all(deleteItemPromises).then(() => {
//       deleteOrder(firebaseKey).then(resolve);
//     });
//   }).catch(reject);
// });
// export { getItemsByOrder, getOrderItems, deleteItemOrderRelationship };
