import productDAO from "../DAO/productDAO.js";

function create(context) {

  async function getFilteredProducts(filters) {
    const result = await productDAO.getByFilters(filters);
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
