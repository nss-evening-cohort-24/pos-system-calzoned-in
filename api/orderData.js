import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL ORDERS
const getOrders = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json?orderBy="uid"&equalTo="${uid}"`, {
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

// GET CLOSED ORDERS
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

// GETTING A SINGLE ORDER
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

// CREATE AN ORDER
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

// UPDATE AN ORDER
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

// DELETE AN ORDER
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
      // || order.isOpen.toLowerCase().includes(searchValue)
    ));
    resolve(searchResults);
  }).catch(reject);
});

export {
  getOrders,
  getClosedOrders,
  getSingleOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  searchOrders
};
