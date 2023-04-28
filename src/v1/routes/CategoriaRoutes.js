const express = require("express");
const router = express.Router();
const CategoriaController = require("../../controllers/CategoriaController");

router
  .get("/", CategoriaController.getAllCategorias)

  .get("/:categoriasId", CategoriaController.getOneCategoria)

  .post("/", CategoriaController.createNewCategoria)

  .patch("/:categoriasId", CategoriaController.updateOneCategoria)

  .delete("/:categoriasId", CategoriaController.deleteOneCategoria);

module.exports = router;
