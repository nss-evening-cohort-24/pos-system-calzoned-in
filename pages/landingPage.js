import renderToDom from '../utils/renderToDom';

const showLandingPage = (user) => {
  const domString = `
  <H1>Welcome to Hip Hop Pizza and Wangs, ${user.displayName}!</H1><BR>
  <button type="button" id="landing-view-orders-btn">View Orders</button>
  <button type="button" id="landing-add-order-btn">Create Order</button>
  <button type="button" id="landing-view-revenue-btn">View Revenue</button
  `;
  renderToDom('#landing-page', domString);
};

export default showLandingPage;
