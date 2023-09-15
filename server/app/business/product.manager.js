import productDAO from "../DAO/productDAO.js";

function create(context) {

  async function getFilteredProducts(data) {
    const result = await productDAO.getByFilters(data);
    return result;
  }

  async function getAvailableFilters() {
    const result = await productDAO.getAvailableFilters();
    return result;
  }

  return {
    getFilteredProducts: getFilteredProducts,
    getAvailableFilters: getAvailableFilters,
  };
}

export default {
  create: create
};
