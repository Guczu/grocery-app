import mongoose from 'mongoose';
import * as _ from 'lodash';
import applicationException from '../service/applicationException.js';
import uniqueValidator from 'mongoose-unique-validator';

const productSchema = new mongoose.Schema({
    shop_name: { type: String, required: true },
    product_name: { type: String, required: true },
    weight: { type: Number, required: true },
    price: { type: Number, required: true },
    available_amount: { type: Number, required: true },
    producer: { type: String, required: true },
    image_url: { type: String, required: true },
    category: { type: String, required: true },
  });

productSchema.plugin(uniqueValidator);

const ProductModel = mongoose.model('Product', productSchema);

function getByFilters(filters) {
    const { shop_name, product_name, category, minPrice, maxPrice } = filters;
    const query = {};
  
    if (shop_name) {
      query.shop_name = shop_name;
    }
  
    if (product_name) {
      query.product_name = product_name;
    }
  
    if (category) {
      query.category = category;
    }
  
    if (minPrice !== undefined) {
      query.price = { $gte: minPrice };
    }
  
    if (maxPrice !== undefined) {
      if (!query.price) {
        query.price = {};
      }
      query.price.$lte = maxPrice;
    }
  
    return ProductModel.find(query)
      .exec()
      .then((products) => {
        return products;
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania produktów:', error);
        throw applicationException.errorHandler(error);
      });
}

async function getAvailableFilters() {
    try {
      const shops = await ProductModel.distinct('shop_name');
      const categories = await ProductModel.distinct('category');
  
      return { 
        available_shops: shops,
        available_categories: categories
      };
    } catch (err) {
      console.error('Błąd podczas pobierania dostępnych sklepów:', err);
      throw err;
    }
}

export default {
  getByFilters: getByFilters,
  getAvailableFilters: getAvailableFilters,

  model: ProductModel
};
