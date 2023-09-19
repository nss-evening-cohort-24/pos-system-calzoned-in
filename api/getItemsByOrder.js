import { getSingleOrder, getOrderItems } from './orderData';
import { getSingleItem } from './itemData';

const getItemsByOrder = async (orderId) => {
  const order = await getSingleOrder(orderId);
  const allOrderItems = await getOrderItems(orderId);
  const getSingleItems = await allOrderItems.map((item) => getSingleItem(item.itemId));
  const orderItems = await Promise.all(getSingleItems);

  return { ...order, orderItems };
};
export default getItemsByOrder;
