const CategoriaSchema = require("../database/Categorias");

const getAllCategorias = async () => {
  const Categorias = await CategoriaSchema.find();
  return Categorias;
};

const getOneCategoria = async (categoriaId) => {
  const getOneCategoria = await CategoriaSchema.findOne({ _id: categoriaId });
  return getOneCategoria;
};

const createNewCategoria = async (newCategoria) => {
  const createdCategoria = await CategoriaSchema(newCategoria).save();

  return createdCategoria;
};

const updateOneCategoria = async (categoriaId, body) => {
  const updateCategoria = await CategoriaSchema.findOneAndUpdate(
    { _id: categoriaId },
    body
  );
  const pr = getOneCategoria(categoriaId);
  return pr;
};

const deleteOneCategoria = async (categoriaId) => {
  const deleteCategoria = await CategoriaSchema.deleteOne({ _id: categoriaId });
  return deleteCategoria;
};

module.exports = {
  getAllCategorias,
  getOneCategoria,
  createNewCategoria,
  updateOneCategoria,
  deleteOneCategoria,
};
