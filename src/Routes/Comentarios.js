const express = require("express");
const router = express.Router();
const controladorComentarios = require("../Controllers/Comentarios");

router
    .get("/Obtener_Comentarios", controladorComentarios.Obtener_Comentarios)

module.exports = router;