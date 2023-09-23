import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const displayRevenue = (res) => {
  clearDom();
  let walkInTotal = 0;
  let phoneTotal = 0;
  let cashTotal = 0;
  let creditTotal = 0;
  let mobileTotal = 0;
  let tipTotal = 0;
  let total = 0;

  res.forEach((method) => {
    if (method.paymentType === 'cash') {
      cashTotal += 1;
    } else if (method.paymentType === 'credit') {
      creditTotal += 1;
    } else if (method.paymentType === 'mobile') {
      mobileTotal += 1;
    }
  });

  res.forEach((method) => {
    if (method.orderType === 'Walk-in') {
      walkInTotal += 1;
    } else if (method.orderType === 'Phone') {
      phoneTotal += 1;
    }
  });

  total += res.reduce((acc, curr) => Number(acc) + Number(curr.total), total);
  tipTotal += res.reduce((acc, curr) => Number(acc) + Number(curr.tipTotal), tipTotal);

  const domString = `
  <div id="rev-page"></div>
  <h1>Revenue</h1>
  <br>
  <h2>Total: ${total}</h2>
  <br>
  <h3> Order Type</h3>
  <h3>Walk-in: ${walkInTotal}</h3>
  <h3>Phone: ${phoneTotal}</h3>
  <br>
  <h3> Payment Type</h3>
  <h3>Cash: ${cashTotal}</h3>
  <h3>Credit: ${creditTotal}</h3>
  <h3>Mobile: ${mobileTotal}</h3>
  <h3>Tip Total: ${tipTotal}</h3>
  </div>`;

  renderToDOM('#main-container', domString);
};

export default displayRevenue;
