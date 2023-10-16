import business from '../business/business.container.js';
import applicationException from '../service/applicationException.js';
import auth from '../middleware/auth.js';

const paymentsEndpoint = (router) => {

    router.post('/api/payment/create-payment', auth, async (request, response, next) => {
        try {
            const result = await business.getPaymentsManager(request).createPayment(request.body);
            response.status(200).send(result.id);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/payment/check-session', async (request, response, next) => {
        try {
            const result = await business.getPaymentsManager(request).checkSession(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

};

export default paymentsEndpoint;
