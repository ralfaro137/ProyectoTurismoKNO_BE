const path = require("path");

const db_archivo_directorio = path.join(__dirname,'../DataBase/Usuarios_Acceso_Turismo.json');
                                                   
const Obtener_Todos_Los_Usuarios = () =>{
    const usuariosRegistrados = require(db_archivo_directorio);
    return usuariosRegistrados.Usuarios;
}

module.exports = {
    Obtener_Todos_Los_Usuarios
}