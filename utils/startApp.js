import domBuilder from '../Shared/domBuilder';
import navBar from '../Shared/navBar';
import loginButton from '../components/loginButton';
import showLandingPage from '../pages/landingPage';
import { getOrders } from '../api/orderData';
import { emptyOrders, showOrders } from '../pages/orders';

const startApp = (user) => {
  loginButton();
  domBuilder(user);
  navBar(user);
  showLandingPage(user);
};

getOrders().then((array) => {
  if (array.length) {
    showOrders(array);
  } else {
    emptyOrders();
  }
});

export default startApp;
