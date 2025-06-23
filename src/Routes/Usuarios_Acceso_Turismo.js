const express = require("express");
const router = express.Router();
const controladorUsuario = require("../Controllers/Usuarios_Acceso_Turismo");

router
    .post("/Validar_Credenciales_Usuario", controladorUsuario.Validar_Credenciales_Usuario)
    .get("/Obtener_Usuarios", controladorUsuario.Obtener_Todos_Los_Usuarios_Turismo)

module.exports = router;