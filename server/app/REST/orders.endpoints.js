import business from '../business/business.container.js';
import applicationException from '../service/applicationException.js';

const ordersEndpoint = (router) => {

    router.post('/api/orders/add', async (request, response, next) => {
        try {
            const result = await business.getOrdersManager(request).addOrder(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/orders/get', async (request, response, next) => {
        try {
            const result = await business.getOrdersManager(request).getOrders(request.body.userId);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

};

export default ordersEndpoint;
