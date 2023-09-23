import domBuilder from '../Shared/domBuilder';
import navBar from '../Shared/navBar';
import loginButton from '../components/loginButton';
import showLandingPage from '../pages/landingPage';
import navEvents from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  loginButton();
  domBuilder(user);
  domEvents(user);
  showLandingPage(user);
  formEvents(user);
  navBar(user);
  navEvents(user);
};

export default startApp;
