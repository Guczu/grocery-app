import addressDAO from "../DAO/addressDAO.js";
import newsletterDAO from "../DAO/newsletterDAO.js";

function create(context) {

  async function addAddress(data) {
    const result = await addressDAO.addAddress(data);
    return result;
  }

  return {
    addAddress: addAddress,
  };
}

export default {
  create: create
};
