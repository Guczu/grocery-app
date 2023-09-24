import business from '../business/business.container.js';
import applicationException from '../service/applicationException.js';

const newsletterEndpoint = (router) => {

    router.post('/api/add-to-newsletter', async (request, response, next) => {
        try {
            const result = await business.getNewsletterManager(request).addUser(request.body.email);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.delete('/api/newsletter/:email', async (request, response, next) => {
        try {
            const userEmail = request.params.email.slice(1);
            const result = await business.getNewsletterManager(request).removeUser(userEmail);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

};

export default newsletterEndpoint;
