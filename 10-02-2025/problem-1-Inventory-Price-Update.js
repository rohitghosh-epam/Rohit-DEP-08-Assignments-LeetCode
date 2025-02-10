/* 

    Description:
    You have an array of product objects. Each object contains an id, name, price, and quantity. Your tasks are:

    1. Using Map: Update the price by applying a 10% discount to products with a quantity greater than 100.
    2. Using Filter: Create a new array containing only the products that received the discount (i.e. where the discounted price is less than the original price).
    3. using forEach: Log a message for each discounted product showing the product name and its new price.

    const products = [   { id: 1, name: "Widget", price: 50, quantity: 120 },   { id: 2, name: "Gadget", price: 30, quantity: 80 },   { id: 3, name: "Doohickey", price: 100, quantity: 200 },   { id: 4, name: "Thingamajig", price: 75, quantity: 90 } ];

*/

let products = [   
    { id: 1, name: "Widget", price: 50, quantity: 120 },   
    { id: 2, name: "Gadget", price: 30, quantity: 80 },   
    { id: 3, name: "Doohickey", price: 100, quantity: 200 },   
    { id: 4, name: "Thingamajig", price: 75, quantity: 90 } 
];

products = products.map((key)=>{
    let finalPrice = key.price;
    if(key.quantity > 100) {
        finalPrice = key.price * 0.90;
    }
    return {
        ...key,
        finalPrice: finalPrice
    }
});

updatedProductList = products.filter(key =>key.finalPrice !== key.price);

updatedProductList.forEach(element => {
    console.log("\n");
    console.log("Product Name: ", element.name);
    console.log("Product Price: ", element.finalPrice);
});


//need class to implement this

// let product = {
//     id: null,
//     name: null,
//     price: null,
//     quantity: null,

//     product(id, name, price, quantity) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     },
// };

// let products = [
//     new product(1, "pen", 10, 200),
//     new product(2, "pencil", 4, 500),
//     new product(3, "color pen", 15, 50),
//     new product(4, "color pencil", 10, 20),
//     new product(5, "copy", 40, 50),
//     new product(6, "book", 100, 110),
//     new product(7, "scetch pen", 20, 180),
//     new product(8, "shadin pencil", 15, 80),
//     new product(9, "crayon", 8, 50),
//     new product(10, "drawing sheet", 5, 800),
// ];

