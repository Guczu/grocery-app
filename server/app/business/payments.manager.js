import paymentsDAO from "../DAO/paymentsDAO.js";

function create(context) {

  async function createPayment(data) {
    const result = await paymentsDAO.createPayment(data);
    return result;
  }

  return {
    createPayment: createPayment
  };
}

export default {
  create: create
};
