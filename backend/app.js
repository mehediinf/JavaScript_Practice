const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const products = [
  { id: 1, name: "Shirt", price: 500 },
  { id: 2, name: "Pant", price: 800 }
];

app.get("/products", (req, res) => {
  res.json(products);
});


const product = [

  {
    id: 1,
    name: "Mehedi",
    phone: "01700000000",
    email: "mehedi@example.com",
    address: "Dhaka, Bangladesh",
    product_details: [
        {
            id: 1,
            product_id: 1,
            product_title: "Shirt",
            description: "This is a shirt",
            stock: 100,
            price: 500,
            Image_url: "https://md-mehedi-hasan-one.vercel.app/"
        }
   ]
 },
];




app.get("/", (req, res) => {
    
  res.json(product);

});


