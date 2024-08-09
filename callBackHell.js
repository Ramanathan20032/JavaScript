// one callback inside another callback, inside another callback ....
// makes the "callback hell".

cart = ["shoes", "pant", "kurta"];
api.createOrder(cart, function () {
  api.proceedPayment(function () {
    api.orderSummary(function () {
      api.updateWallet();
    });
  });
});

// here, the callback function depends on each other function.
// makes the "inversion of code".