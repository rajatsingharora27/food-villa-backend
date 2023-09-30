const { ProductCreateController } = require("../../controller/index");
const express = require("express");
const router = express.Router();

const productCreateController = new ProductCreateController();

router.get("/add-product", productCreateController.createProduct);

module.exports = router;
