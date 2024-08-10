const cart = ["pant", "kurta", "shoes"];

// createOrder - Promise
createOrder(cart) // return orderId
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  // It is particular catch for the cart is not validate.
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .then(function () {
    console.log("no matter what happens. I will defenitely be called");
  })
  // general error, which occurs on all top of .then()
  .catch(function (err) {
    console.log(err.message);
  });

// promise creation
function createOrder(cart) {
  const pr = new Promise(function (ressolve, reject) {
    // createOrder
    // validateCart
    // return orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // If the cart is valid, it ressolve with promise.
    const orderId = "12HS34";
    if (orderId) {
      setTimeout(function () {
        ressolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise(function (ressolve, reject) {
    ressolve("Order ID : " + orderId + " payment successful");
  });
}

 