const dal = require("../data-access-layer/dal");

async function getAllOrders() {
    const sql = `SELECT * FROM clientOrder`;
    const orders = await dal.executeAsync(sql);
    return orders;
}
module.exports = {
    getAllOrders
}

// INSERT INTO `clientOrder` (`orderID`, `clientID`, `cartID`, `subTotal`, `shippingCity`, `shippingStreet`, `shippingDate`, `orderTime`, `paymentDigits`) VALUES (NULL, '23', '6', '1000', 'Barcelona', 'a', '2020-06-16', '2020-06-23', '1234');