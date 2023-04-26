// const accessUsuario = (res, req, next) => {
//   const { rollID } = req.body;
//   //es Super Administrador / Administrador
//   if (rollID === 1 || rollID === 2) {
//     next();
//   }
// };

// const viewUsuario = (res, req, next) => {
//   const { rollID } = req.body;
//   //es Super Administrador / Administrador
//   if (rollID === 1 || rollID === 2) {
//     next();
//   }
// };

const createUsuario = (res, req, next) => {
  const { rollID } = req.body;
  //es Super Administrador / Administrador
  if (rollID === 1 || rollID === 2) {
    next();
  }
};

const editUsuario = (res, req, next) => {
  const { rollID } = req.body;
  //es Super Administrador / Administrador
  if (rollID === 1 || rollID === 2) {
    next();
  }
};

const destroyUsuario = (res, req, next) => {
  const { rollID } = req.body;
  //es Super Administrador / Administrador
  if (rollID === 1 || rollID === 2) {
    next();
  }
};

module.exports = {
  //   accessUsuario,
  //   viewUsuario,
  createUsuario,
  editUsuario,
  destroyUsuario,
};
