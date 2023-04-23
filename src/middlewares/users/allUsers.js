const { Usuario, Empresa, Rol, Op } = require("../../db");
const functionHash = require("../../functions/hash");

const allUser = async (req, res, next) => {
  const {empresaId, clave, email} = req.query;
  try {
    if(clave && email){
      const claveHash = functionHash(clave) 
      const allUsers = await Usuario.findAll({
          where: {
            [Op.and]: [
              { email: email },
              { clave: claveHash }
            ]
          },
        include: [
          {
            model: Empresa,
            attributes: ["id", "nombre"]
          },
          {
            model:Rol,
            attributes:["id","rol"]
          }       
        ],
        attributes:["id","nombre","apellido","clave","email","bloqueo"]
      });
        req.body.allUsers = { status: allUsers ? 200: 404, resultado: allUsers };
        next();

    }
    else if(empresaId){
      const allUsers = await Usuario.findOne({
        where:{EmpresaId:empresaId},
        include: [
          {
            model: Empresa,
            attributes: ["id", "nombre"]
          },
          {
            model:Rol,
            attributes:["id","rol"]
          }       
        ],
        attributes:["id","nombre","apellido","clave","email","bloqueo"]
      });
      req.body.allUsers = { status: 200, resultado: allUsers };
      next();
    }else{
      const allUsers = await Usuario.findAll({
        include: [
          {
            model: Empresa,
            attributes: ["id", "nombre"]
          },
          {
            model:Rol,
            attributes:["id","rol"]
          }       
        ],
        attributes:["id","nombre","apellido","clave","email","bloqueo"]
      });
      req.body.allUsers = { status: 200, resultado: allUsers };
      next();
    }
  } catch (err) {
    console.log("error en allUser", err.message);
    req.body.allUsers = { status: 404, resultado: err.message };
  }
};

module.exports = allUser;