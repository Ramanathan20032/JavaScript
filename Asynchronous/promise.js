// createOrder
// proceedPayment
// showOrderSummary
// updateWalletBalance

const cart = ["pant", "kurta", "shoes"];

// using callback,
createOrder(cart, function (orderId) {
  proceedPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function (paymentInfo) {
      updateWalletBalance(paymentInfo);
    });
  });
});

// using promises,
// while chaining the promises, need to return it.
const promise = createOrder(cart);
promise
  .then(function (orderId) {
    return proceedPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });

// -----
// promise using arrow function.
createOrder(cart)
  .then((orderId) => proceedPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));
