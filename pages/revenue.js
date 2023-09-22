// import clearDom from '../utils/clearDom';
// import renderToDOM from '../utils/renderToDom';

// const displayRevenue = (res) => {
//   clearDom();
//   let walkInTotal = 0;
//   let callInTotal = 0;
//   let cashTotal = 0;
//   let creditTotal = 0;
//   let mobileTotal = 0;
//   let tipTotal = 0;
//   let total = 0;

//   res.forEach((method) => {
//     if (method.paymenttype === 'cash') {
//       cashTotal += 1;
//     } else if (method.paymenttype === 'credit') {
//       creditTotal += 1;
//     } else if (method.paymenttype === 'mobile') {
//       mobileTotal += 1;
//     }
//   });

//   res.forEach((method) => {
//     if (method.ordertype === 'walk-in') {
//       walkInTotal += 1;
//     } else if (method.ordertype === 'call-in') {
//       callInTotal += 1;
//     }
//   });

//   total += res.reduce((acc, curr) => Number(acc) + Number(curr.total), total);
//   tipTotal += res.reduce((acc, curr) => Number(acc) + Number(curr.tip), tipTotal);

//   const domString = 
//   domstring to be written
//   interpolations:
//   ${total} 
//   ${walkInTotal}
//   ${callInTotal}
//   ${cashTotal}
//   ${creditTotal}
//   ${mobileTotal}
//   ${tipTotal}

// }

// export displayRevenue
