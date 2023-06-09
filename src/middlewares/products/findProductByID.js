const { Producto, Subcategoria, Deposito, Op } = require("../../db");

const findProductByID = async (req, res, next) => {
    try{
        const id = req.params.id;
        req.body.productById = {status:200, resultado: await Producto.findOne({where:{id},include: [
            Deposito,
            Subcategoria
          ],})};
        next();
    }catch(err){
        console.log("error en findProductByID");
        console.log(err.message)
        req.body.productById = {status:404, resultado:err.message}
    }
}

module.exports = findProductByID;