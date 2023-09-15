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

function getByFilters(data) {
    const { shop_name, category, minPrice, maxPrice, page, perPage } = data;
    const skip = (page - 1) * perPage;
    const query = {};

    if (shop_name && shop_name.length > 0) {
      query.shop_name = { $in: shop_name };
    }

    if (category && category.length > 0) {
      query.category = { $in: category };
    }
  
    if (minPrice !== undefined || maxPrice !== undefined) {
      query.price = {};
  
      if (minPrice !== undefined) {
        query.price.$gte = minPrice;
      }
  
      if (maxPrice !== undefined) {
        query.price.$lte = maxPrice;
      }
    }
  
    return ProductModel.find(query)
      .skip(skip)
      .limit(parseInt(perPage))
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
