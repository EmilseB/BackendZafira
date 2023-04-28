const express = require("express");
const productsRouter = require("./v1/routes/ProductsRoutes");
const categoriaRouter = require("./v1/routes/CategoriaRoutes");

const mongoose = require("mongoose");
const body = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(body.json());
app.use("/products", productsRouter);
app.use("/categorias", categoriaRouter);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

mongoose
  .connect(
    "mongodb+srv://zafiradb:asd1qwe21233@zafiradb.tnnicgi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("conectado a ZafiraDb"))
  .catch((error) => console.error(error));
