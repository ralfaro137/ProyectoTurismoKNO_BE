const accesoDatos = require("../DataBase/Atracciones_Turismo");

const Obtener_Todas_Atracciones = (req, res) =>
{
    const v = accesoDatos.Obtener_Todas_Atracciones();
     res.send({
            codigoRespuesta:0,
            detalleRespuesta: "Transaccion exitosa",
            detalle: accesoDatos.Obtener_Todas_Atracciones()            
        })

}

module.exports = 
{
    Obtener_Todas_Atracciones
}