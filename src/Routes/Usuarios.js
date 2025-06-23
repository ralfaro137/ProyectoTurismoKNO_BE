const express = require("express");
const router = express.Router();
const controladorUsuario = require("../Controllers/Usuarios");

router
    .get("/SaludarMundoEstudiantesVLA", controladorUsuario.SaludarMundo)
    .get("/ObtenerTodosLosUsuariosVLA", controladorUsuario.ObtenerTodosLosUsuarios)
    .post("/GuardarPersona", controladorUsuario.GuardarPersona)
    .post("/EliminarPersona", controladorUsuario.EliminarPersona)
    .post("/EditarPersona", controladorUsuario.EditarPersona)

module.exports = router;