import business from '../business/business.container.js';
import applicationException from '../service/applicationException.js';

const paymentsEndpoint = (router) => {

    router.post('/api/payment/create-payment', async (request, response, next) => {
        try {
            const result = await business.getPaymentsManager(request).createPayment(request.body);
            response.status(200).send(result.url);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

};

export default paymentsEndpoint;
