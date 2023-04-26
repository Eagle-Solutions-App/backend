// const accessDeposito = (res, req, next) => {
//   const { rolId } = req.body;
//   //es Super Administrador / Administrador / Responsable de Deposito
//   if (rolId === 1 || rolId === 2 || rolId === 3) {
//     next();
//   }
// };

// //todos deberian ver los depositos
// const viewDeposito = (res, req, next) => {
//   const { rolId } = req.body;
//   //es Super Administrador / Administrador / Responsable de Deposito
//   if (rolId === 1 || rolId === 2 || rolId === 3) {
//     next();
//   }
// };

const createDeposito = (res, req, next) => {
  const { rolId } = req.body;
  //es Super Administrador / Administrador / Responsable de Deposito
  if (rolId === 1 || rolId === 2 || rolId === 3) {
    next();
  }
};

const editDeposito = (res, req, next) => {
  const { rolId } = req.body;
  //es Super Administrador / Administrador / Responsable de Deposito
  if (rolId === 1 || rolId === 2 || rolId === 3) {
    next();
  }
};

const destroyDeposito = (res, req, next) => {
  const { rolId } = req.body;
  //es Super Administrador / Administrador / Responsable de Deposito
  if (rolId === 1 || rolId === 2 || rolId === 3) {
    next();
  }
};

module.exports = {
//   accessDeposito,
//   viewDeposito,
  createDeposito,
  editDeposito,
  destroyDeposito,
};
