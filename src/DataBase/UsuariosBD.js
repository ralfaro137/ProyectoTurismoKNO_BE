const path = require("path");
const fs= require('fs');

const db_archivo_directorio = path.join(__dirname,'../DataBase/Usuarios.json');
                                                   
const ObtenerTodosLosUsuarios = () =>{
    const usuariosRegistrados = require(db_archivo_directorio);
    return usuariosRegistrados.Usuarios;
}

const GuardarPersonas = (persona)=>{
    let informacionBD = require(db_archivo_directorio);
    informacionBD.Usuarios.push(persona);
    fs.writeFileSync(db_archivo_directorio, JSON.stringify(informacionBD,null, 2));
}

const EliminarPersona = (correo) =>
{
    let informacionBD = require(db_archivo_directorio);

    const usuariosActualizados = informacionBD.Usuarios.filter(usuario => usuario.correo != correo);
    informacionBD.Usuarios = usuariosActualizados;
    fs.writeFileSync(db_archivo_directorio, JSON.stringify(informacionBD,null, 2));
}

const EditarPersona = (persona) =>
{
    let informacionBD = require(db_archivo_directorio);

    const indice = informacionBD.Usuarios.findIndex(usuario => usuario.cedula==persona.cedula)

    if(indice != -1){
        informacionBD.Usuarios[indice] = {...informacionBD.Usuarios[indice], ...persona }
    }

    console.log(informacionBD.Usuarios)
    fs.writeFileSync(db_archivo_directorio, JSON.stringify(informacionBD,null, 2));

}


module.exports = {
    ObtenerTodosLosUsuarios,
    GuardarPersonas,
    EliminarPersona, 
    EditarPersona
}