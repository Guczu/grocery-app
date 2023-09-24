import userEndpoint from './user.endpoint.js';
import productEndpoint from './product.endpoint.js'
import newsletterEndpoint from './newsletter.endpoints.js';

const routes = function (router) {
    userEndpoint(router);
    productEndpoint(router);
    newsletterEndpoint(router);
};

export default routes;
