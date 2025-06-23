const express = require("express");
const router = express.Router();
const controladorAtracciones = require("../Controllers/Atracciones_Turismo");

router
    .get("/Obtener_Las_Atracciones", controladorAtracciones.Obtener_Todas_Atracciones)

module.exports = router;