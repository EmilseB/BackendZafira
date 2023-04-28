const mongoose = require("mongoose");

const CategoriaSchema = mongoose.Schema({
  categoria: {
    type: String,
    required: true,
  },
},
{versionKey:false}
);


module.exports=mongoose.model("categorias",CategoriaSchema)