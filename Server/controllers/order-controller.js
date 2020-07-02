// INSERT INTO `clientOrder` (`orderID`, `clientID`, `cartID`, `subTotal`, `shippingCity`, `shippingStreet`, `shippingDate`, `orderTime`, `paymentDigits`) VALUES (NULL, '23', '1', '1000', 'Barcelona', 'square 39', '2020-06-17', '2020-06-29', '4580');

const express = require('express');
const router = express.Router();
const sendError = require("../helpers/send-error");

const orderLogic = require('../business-logic/order-logic');

// get all orders
router.get('/', async (request, response) => {
    try {
        const orders = await orderLogic.getAllOrders();
        response.json(orders);
    } catch (error) {
        sendError(response, error);
    }
});


module.exports = router;