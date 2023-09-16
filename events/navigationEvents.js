import addOrderForm from '../forms/orderForm';

const navEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-order-btn')) {
      addOrderForm(user.uid);
    }
  });
};
export default navEvents;
