import { getSingleOrder, getOrderItems } from './orderData';
import { getSingleItem } from './itemData';

const getItemsByOrder = async (orderId) => {
  const order = await getSingleOrder(orderId);
  const allOrderItems = await getOrderItems(orderId);
  const getSingleItems = await allOrderItems.map(async (item) => (
    {
      item: await getSingleItem(item.itemId),
      orderItemKey: item.firebaseKey
    }
  ));
  const orderItems = await Promise.all(getSingleItems);

  return { ...order, orderItems };
};
export default getItemsByOrder;
