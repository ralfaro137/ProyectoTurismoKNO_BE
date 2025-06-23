const path = require("path");

const db_archivo_directorio = path.join(__dirname,'../DataBase/Atracciones_Turismo.json');
                                                   
const Obtener_Todas_Atracciones = () =>{
    const atracciones = require(db_archivo_directorio);
    console.log("Hola",atracciones.Atracciones);
    
    return atracciones.Atracciones;
}

module.exports = {
    Obtener_Todas_Atracciones
}