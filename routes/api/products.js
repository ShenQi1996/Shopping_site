const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");

router.get("/allProducts", (req, res) => {
  debugger;
  Product.find()
    .then(products => res.json(products))
    .catch(err =>
      res.status(404).json({ noproductsfound: "No Products were found" + err })
    );
});

router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product = res.json(product)))
    .catch(err =>
      res.status(404).json({ noproductfound: "No Product were found" })
    );
});

router.post("/add", (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const quantity = req.body.quantity;
  const user = req.body.user;
  const newProduct = new Product({
    title,
    price,
    description,
    quantity,
    user,
  });

  debugger;
  newProduct
    .save()
    .then(product => res.json(product))
    .catch(err => res.status(404).json(err));
});

router.delete("/:id", (req, res) => {
  debugger;
  const product = Product.findByIdAndDelete(req.params.id)
    .then(() => res.json(req.params.id))
    .catch(err => res.status(404).json("Product can not bee deleted" + err));
});

router.patch("/update/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.title = req.body.title;
      product.price = req.body.price;
      product.description = req.body.description;
      product.quantity = req.body.quantity;
      product.user = req.body.user;
      product
        .save()
        .then(product => res.json(product))
        .catch(err => res.status(404).json("Error" + err));
    })
    .catch(err => res.status(404).json("Product were not found" + err));
});

router.get("/user/:user_id", (req, res) => {
  Product.find({ user: req.params.user_id })
    .then(products => res.json(products))
    .catch(err =>
      res.status(404).json("Could no find product belows to this user" + err)
    );
});

module.exports = router;
