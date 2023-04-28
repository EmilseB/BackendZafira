const express = require("express")
const router = express.Router()
const ProductController=require("../../controllers/ProductController")

router
.get("/", ProductController.getAllProducts)

.get("/:productsId",ProductController.getOneProduct)

.post("/",ProductController.createNewProduct)

.patch("/:productsId",ProductController.updateOneProduct)

.delete("/:productsId",ProductController.deleteOneProduct)

module.exports = router; 