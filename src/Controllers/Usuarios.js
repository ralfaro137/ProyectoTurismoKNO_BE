const accesoDatos = require("../DataBase/UsuariosBD");


const SaludarMundo = (req, res) =>{
    res.send("Hola Stwart, espero que entiendas");
}

const ObtenerTodosLosUsuarios= (req, res)=>
{
    res.send(accesoDatos.ObtenerTodosLosUsuarios());
}

const GuardarPersona = (req, res) =>{
    const nuevoUsuario = req.body;
    accesoDatos.GuardarPersonas(nuevoUsuario);
    res.send("Usuario guardado");

}

const EliminarPersona = (req, res) =>{
    const {correo} = req.body; 
    console.log(correo)
    accesoDatos.EliminarPersona(correo);

    /*Esta es una respuesta exitosa*/
    var respuestaApi= {

        codigoRespuesta: 0,
        descripcionRespuesta: "Usuario Eliminado"
    }

    res.send(respuestaApi)
}

const EditarPersona = (req, res)=>{
    const objeto = req.body;
    accesoDatos.EditarPersona(objeto)

    var respuestaApi= {

        codigoRespuesta: 0,
        descripcionRespuesta: "Usuario Editado"
    }
    res.send(respuestaApi)
}

module.exports = {
    SaludarMundo, 
    ObtenerTodosLosUsuarios,
    GuardarPersona,
    EliminarPersona,
    EditarPersona
}