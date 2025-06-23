const accesoDatos = require("../DataBase/Usuarios_Acceso_Turismo");


const Obtener_Todos_Los_Usuarios_Turismo = (req, res)=>
{
    const todos_Los_Usuarios = accesoDatos.Obtener_Todos_Los_Usuarios();
    
    res.send({
            codigoRespuesta:0,
            detalleRespuesta: "Transaccion exitosa",
            detalle:todos_Los_Usuarios
        })
}

const Validar_Credenciales_Usuario = (req, res) =>{
    
    const {correo, password} = req.body;
    const todos_Los_Usuarios = accesoDatos.Obtener_Todos_Los_Usuarios_Turismo();

    const usuarioEncontrado = todos_Los_Usuarios.find(u => u.correo === correo
                                                    && u.password === password);
    
    if(usuarioEncontrado){
        res.send({
            codigoRespuesta:0,
            detalleRespuesta: "Transaccion exitosa",
            detalle:{
                correo:usuarioEncontrado.correo, 
                rol:usuarioEncontrado.rol
            }
        })
    }
    else{
        res.send({
            codigoRespuesta:-1,
            detalleRespuesta: "Credenciales invalidos",
            detalle:{ }
        })
    }    
}


module.exports = {
    Obtener_Todos_Los_Usuarios_Turismo,
    Validar_Credenciales_Usuario
}