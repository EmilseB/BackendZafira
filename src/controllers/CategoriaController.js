const CategoriaService = require("../services/CategoriaService");

const getAllCategorias = async (req, res) => {
  const getAllCategorias = await CategoriaService.getAllCategorias();
  res.send(getAllCategorias);
};

const getOneCategoria = async (req, res) => {
  const {
    params: { categoriaId },
  } = req;
  if (!categoriaId) {
    return;
  }
  try {
    const Categoria = await CategoriaService.getOneCategoria(categoriaId);
    res.send(Categoria);
  } catch {
    res.status(400).send();
  }
};

const createNewCategoria = async (req, res) => {
  const { body } = req;
  const newCategoria = {
    categoria: body.categoria,
  };
  try {
    const createdCategoria = await CategoriaService.createNewCategoria(
      newCategoria
    );
    res.send(createdCategoria);
  } catch {
    res.status(400).send({});
  }
};

const updateOneCategoria = async (req, res) => {
  const {
    params: { categoriaId },
    body,
  } = req;
  if (!categoriaId || !body) {
    return;
  }
  try {
    const updatedCategoria = await CategoriaService.updateOneCategoria(
      categoriaId,
      body
    );
    res.send(updatedCategoria);
  } catch {
    res.status(400).send({});
  }
};

const deleteOneCategoria = async (req, res) => {
  const {
    params: { categoriaId },
  } = req;
  if (!categoriaId) {
    return;
  }
  try {
    const deleteCategoria = await CategoriaService.deleteOneCategoria(
      categoriaId
    );
    res.send(deleteCategoria);
  } catch {
    res.status(400).send();
  }
};

module.exports = {
  getAllCategorias,
  getOneCategoria,
  createNewCategoria,
  updateOneCategoria,
  deleteOneCategoria,
};
