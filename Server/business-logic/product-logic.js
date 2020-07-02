const dal = require("../data-access-layer/dal");

async function getAllProducts() {
    const sql = `SELECT * FROM products`;
    const products = await dal.executeAsync(sql);
    return products;
}

async function getOneProduct(id) {
    const sql = `SELECT * FROM products where productID = ${id}`;
    const product = await dal.executeAsync(sql);
    return product;
}


async function getAllCats() {
    const sql = `SELECT * FROM categories`;
    const cats = await dal.executeAsync(sql);
    return cats;
}


// async function addProduct(item, newFile) {
async function addProduct(item) {
    const sql = `INSERT INTO products(catID, itemName, itemDescription, price, imageUrl ) VALUES(${item.catID}, '${item.itemName}', '${item.itemDescription}', ${item.price}, '${item.imageUrl}')`
    // const sql = 'INSERT INTO products VALUES(DEFAULT, ?, ?, ?, ?, ?)'
    const addedProduct = await dal.executeAsync(sql);
    // const addedProduct = await dal.executeAsync(sql, [item.catID, item.itemName, item.itemDescription, item.price, item.imageUrl]);
    console.log(addedProduct)

    return addedProduct;
}

module.exports = {
    getAllProducts,
    getOneProduct,
    getAllCats,
    addProduct
    // searchProduct
}

// const sql = `SELECT vacationID,description, destination, picFileName, DATE_FORMAT(startDate, "%m/%d/%Y") as startDate, DATE_FORMAT(endDate, "%m/%d/%Y") as endDate, price FROM vacations`;
