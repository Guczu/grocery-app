import paymentsDAO from "../DAO/paymentsDAO.js";
import productDAO from "../DAO/productDAO.js";

function create(context) {

  async function createPayment(data) {
    const result = await paymentsDAO.createPayment(data);
    await productDAO.updateOrdersAmount(data);
    return result;
  }

  return {
    createPayment: createPayment
  };
}

export default {
  create: create
};
