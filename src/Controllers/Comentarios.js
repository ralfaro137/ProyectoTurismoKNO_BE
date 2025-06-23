const accesoDatos = require("../DataBase/Comentarios_Turismo");

const Obtener_Comentarios = (req, res) =>
{
    
     res.send({
            codigoRespuesta:0,
            detalleRespuesta: "Transaccion exitosa",
            detalle: accesoDatos.Obtener_Comentarios()            
        })
}

module.exports = 
{
    Obtener_Comentarios
}