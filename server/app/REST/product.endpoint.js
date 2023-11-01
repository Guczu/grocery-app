import business from '../business/business.container.js';
import applicationException from '../service/applicationException.js';

const productEndpoint = (router) => {
    router.get('/api/products/get', async (request, response, next) => {
        try {
            const result = await business.getProductManager(request).getFilteredProducts(request.query);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/products/available-filters', async (request, response, next) => {
        try {
            const result = await business.getProductManager(request).getAvailableFilters();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/discount-code', async (request, response, next) => {
        try {
            const result = await business.getProductManager(request).isDiscountCodeValid(request.query.code);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/products/find-product', async (request, response, next) => {
        try {
            const result = await business.getProductManager(request).getProduct(request.query);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/products/get-popular-products', async (request, response, next) => {
        try {
            const result = await business.getProductManager(request).getTop10ByOrdersAmount();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};

export default productEndpoint;
