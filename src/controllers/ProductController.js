const ProductService = require("../services/ProductService");

const getAllProducts = async (req, res) => {
  const getAllProductes = await ProductService.getAllProducts();
  res.send(getAllProductes);
};

const getOneProduct = async (req, res) => {
  const {
    params: { ProductId },
  } = req;
  if (!ProductId) {
    return;
  }
  try {
    const Product = await ProductService.getOneProduct(ProductId);
    res.send(Product);
  } catch {
    res.status(400).send();
  }
};

const createNewProduct = async (req, res) => {
  const { body } = req;
  const newProduct = {
    title: body.title,
    price: body.price,
    src: body.src,
    name: body.name,
    filamentVariant: body.filamentVariant,
    stoneVariant: body.stoneVariant,
    velvetVariant: body.velvetVariant,
  };
  try {
    const createdProduct = await ProductService.createNewProduct(newProduct);
    res.send(createdProduct);
  } catch {
    res.status(400).send({});
  }
};

const updateOneProduct = async (req, res) => {
  const {
    params: { ProductId },
    body,
  } = req;
  if (!ProductId || !body) {
    return;
  }
  try {
    const updatedProduct = await ProductService.updateOneProduct(
      ProductId,
      body
    );
    res.send(updatedProduct);
  } catch {
    res.status(400).send({});
  }
};

const deleteOneProduct = async (req, res) => {
  const {
    params: { ProductId },
  } = req;
  if (!ProductId) {
    return;
  }
  try {
    const deleteProduct = await ProductService.deleteOneProduct(ProductId);
    res.send(deleteProduct);
  } catch {
    res.status(400).send();
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
