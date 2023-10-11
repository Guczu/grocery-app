import business from '../business/business.container.js';
import applicationException from '../service/applicationException.js';

const productEndpoint = (router) => {
    router.get('/api/products', async (request, response, next) => {
        try {
            const result = await business.getProductManager(request).getFilteredProducts(request.query);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/available-filters', async (request, response, next) => {
        try {
            const result = await business.getProductManager(request).getAvailableFilters();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/discount-code', async (request, response, next) => {
        try {
            const result = await business.getProductManager(request).isDiscountCodeValid(request.body.code);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/find-product', async (request, response, next) => {
        try {
            const result = await business.getProductManager(request).getProduct(request.query);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/get-popular-products', async (request, response, next) => {
        try {
            const result = await business.getProductManager(request).getTop10ByOrdersAmount();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};

export default productEndpoint;
