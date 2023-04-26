// const accessEmpresa = (res, req, next) => {
//   const { rollID } = req.body;
//   //es Super Administrador
//   if (rollID === 1) {
//     next();
//   }
// };

// const viewEmpresa = (res, req, next) => {
//   const { rollID } = req.body;
//   //es Super Administrador
//   if (rollID === 1) {
//     next();
//   }
// };

const createEmpresa = (res, req, next) => {
    const { rollID } = req.body;
    //es Super Administrador
    if (rollID === 1) {
      next();
    }
  };
  
  const editEmpresa = (res, req, next) => {
    const { rollID } = req.body;
    //es Super Administrador
    if (rollID === 1) {
      next();
    }
  };
  
  const destroyEmpresa = (res, req, next) => {
    const { rollID } = req.body;
    //es Super Administrador
    if (rollID === 1) {
      next();
    }
  };
  
  module.exports = {
    //   accessEmpresa,
    //   viewEmpresa,
    createEmpresa,
    editEmpresa,
    destroyEmpresa,
  };