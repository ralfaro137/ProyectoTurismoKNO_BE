const express = require("express");
const RouterUsuarios = require("./Routes/Usuarios");
const RouterComentariosTurismo = require("./Routes/Comentarios");
const RouterAtraccionesTurismo = require("./Routes/Atracciones_Turismo");
const RouterUsuariosTurismo = require("./Routes/Usuarios_Acceso_Turismo");

const app = express();
const port = 4321;

// Middleware para permitir CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json());

// Rutas de usuarios
app.use("/api/route", RouterUsuarios);
app.use("/api/route", RouterUsuariosTurismo);
app.use("/api/route", RouterAtraccionesTurismo);
app.use("/api/route", RouterComentariosTurismo);

app.listen(port, () => {
    console.log("API Refrescada en el puerto", port);
});
