const { Deposito, TipoDeposito, Usuario } = require("../../db");

const updateDeposito = async (req, res, next) => {
  try {
    const {
      nombre,
      calle,
      altura,
      ciudad,
      provincia,
      pais,
      descripcion,
      observaciones,
      tipoDepositoID,
      usuarioResponsableID,
    } = req.body;
    const id = req.params.id;
    const deposito = await Deposito.findByPk(id);
    if (deposito.lenght !== 0) {
      const depositoActualizado = await Deposito.update(
        {
          nombre: nombre || deposito.nombre,
          calle: calle || deposito.calle,
          altura: altura || deposito.altura,
          ciudad: ciudad || deposito.ciudad,
          provincia: provincia || deposito.provincia,
          pais: pais || deposito.pais,
          descripcion: descripcion || deposito.descripcion,
          observaciones: observaciones || deposito.observaciones,
        },
        { where: { id: id } }
      );
      if (tipoDepositoID) {
        const deposit = await Deposito.findByPk(id);
        const nuevoTipoDeposito = await TipoDeposito.findByPk(tipoDepositoID);
        await deposit.setTipoDeposito(nuevoTipoDeposito);
      }
      if (usuarioResponsableID) {
        const usuario = await Usuario.findOne({
          where: { [Op.and]: [{ id: usuarioResponsableID },{rol:{[Op.or]: ["Responsable de Deposito", "Administrador"]}, }] },
        });
        await deposito.addUsuario(usuario);
      }
      req.body.resultado = {
        status: "200",
        respuesta: `el deposito ${deposito.nombre} se ah actualizado exitosamente`,
      };
      next();
    } else {
      throw new Error(`El deposito con el ID: ${id} no se ah encontrado`);
    }
  } catch (err) {
    req.body.resultado = { status: 404, resultado: err.message };
    next();
  }
};

module.exports = updateDeposito;
