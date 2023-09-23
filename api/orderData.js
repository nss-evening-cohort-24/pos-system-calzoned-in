import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getClosedOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json?orderBy="is_open"&equalTo=false`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${firebaseKey}.json`, {
    method: 'GET',
    headesr: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const searchOrders = (searchValue, uid) => new Promise((resolve, reject) => {
  getOrders(uid).then((ordersArray) => {
    const searchResults = ordersArray.filter((order) => (
      order.customerName.toLowerCase().includes(searchValue)
    ));
    resolve(searchResults);
  }).catch(reject);
});

const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems.json?orderBy="orderId"&equalTo="${orderId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteItemFromOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleItemOrder = async (itemId, orderId) => {
  const allOrderItems = await getOrderItems(orderId);
  const singleOrderItem = await allOrderItems.find((i) => i.itemId === itemId);

  return singleOrderItem;
};

export {
  getOrders,
  getClosedOrders,
  getSingleOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  searchOrders,
  getOrderItems,
  deleteItemFromOrder,
  getSingleItemOrder
};
