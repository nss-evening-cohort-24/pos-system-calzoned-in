import domBuilder from '../Shared/domBuilder';
import navBar from '../Shared/navBar';
import loginButton from '../components/loginButton';

const startApp = (user) => {
  loginButton();
  domBuilder(user);
  navBar(user);
};

export default startApp;
