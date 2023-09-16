import renderToDom from '../utils/renderToDom';

const showLandingPage = () => {
  const domString = `
  <H1>Welcome to Calzoned-In, user!</H1><BR>
  <button type="button" id="view-orders-btn">View Orders</button>
  <button type="button" id="add-order-btn">Create Order</button>
  <button type="button" id="view-revenue-btn">View Revenue</button
  `;
  renderToDom('#landing-page', domString);
};

export default showLandingPage;
