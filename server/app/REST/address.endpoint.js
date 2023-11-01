import business from '../business/business.container.js';
import applicationException from '../service/applicationException.js';

const addressEndpoint = (router) => {

    router.post('/api/address/add', async (request, response, next) => {
        try {
            const result = await business.getAddressManager(request).addAddress(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/address/get', async (request, response, next) => {
        try {
            const result = await business.getAddressManager(request).getAddress(request.query.userId);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

};

export default addressEndpoint;
