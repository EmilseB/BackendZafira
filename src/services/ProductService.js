const ProductSchema = require("../database/Product");


const getAllProducts = async () => {
  const Products = await ProductSchema.find();
  return Products;
};

const getOneProduct = async (ProductId) => {
  const getOneProduct = await ProductSchema.findOne({ _id: ProductId });
  return getOneProduct;
};

const createNewProduct = async (newProduct) => {
  const createdProduct = await ProductSchema(newProduct).save();

  return createdProduct;
};

const updateOneProduct = async (ProductId, body) => {
  const updateProduct = await ProductSchema.findOneAndUpdate(
    { _id: ProductId },
    body
  );
  const pr= getOneProduct(ProductId)
  return pr;
};


const deleteOneProduct = async (ProductId) => {
    const deleteProduct = await ProductSchema.deleteOne({_id: ProductId})
  return deleteProduct;
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
