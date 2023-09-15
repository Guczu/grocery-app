import userEndpoint from './user.endpoint.js';
import productEndpoint from './product.endpoint.js'

const routes = function (router) {
    userEndpoint(router);
    productEndpoint(router);
};

export default routes;
