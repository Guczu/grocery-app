'use strict';

import userManager from './user.manager.js';
import productManager from './product.manager.js';

function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
    getUserManager: getter(userManager),
    getProductManager: getter(productManager),

};
