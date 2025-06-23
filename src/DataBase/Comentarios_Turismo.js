const path = require("path");

const db_archivo_directorio = path.join(__dirname,'../DataBase/Comentarios_Turismo.json');
                                                   
const Obtener_Comentarios = () =>{
    const comentarios = require(db_archivo_directorio);
    
    return comentarios.Comentarios;
}

module.exports = {
    Obtener_Comentarios
}