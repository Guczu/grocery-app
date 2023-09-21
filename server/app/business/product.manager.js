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

  async function isDiscountCodeValid(code) {
    const result = await productDAO.isDiscountCodeValid(code);
    return result;
  }

  return {
    getFilteredProducts: getFilteredProducts,
    getAvailableFilters: getAvailableFilters,
    isDiscountCodeValid: isDiscountCodeValid,
  };
}

export default {
  create: create
};
