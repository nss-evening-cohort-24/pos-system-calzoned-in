import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders Found!</h2>';
  renderToDOM('#store', domString);
};

const showOrders = (array) => {
  clearDom();

  let domString = '';
  if (array.length < 1) {
    domString += '<h1>No Orders Found!</h1>';
  } else {
    array.forEach((item) => {
      domString += `
    <div class="card">
    <div class="card-body" style="width: 18rem;">
      <blockquote class="blockquote mb-0">
      <h5 class="text-secondary">${item.customerName}</h5><BR>
      <div class="text-secondary">${item.isOpen}</div><BR>
      <div class="text-secondary">${item.phone}</div><BR>
      <div class="text-secondary">${item.email}</div><BR>
      <div class="text-secondary">${item.isPhone}</div><BR>
      <a class="btn btn-view" 
      id="view-order-btn--${item.firebaseKey}">Details</a>
      <a class="btn btn-edit"
      id="update-order--${item.firebaseKey}">Edit</a>
      <a id="delete-order-btn--${item.firebaseKey}"
      class="btn btn-delete">Delete</a>
    </div>
  </div>`;
    });
  }
  renderToDOM('#store', domString);
};
export { emptyOrders, showOrders };
