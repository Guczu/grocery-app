import business from '../business/business.container.js';
import applicationException from '../service/applicationException.js';
import auth from '../middleware/auth.js';

const userEndpoint = (router) => {
    router.post('/api/user/auth', async (request, response, next) => {
        try {
            let result = await business.getUserManager(request).authenticate(request.body.name, request.body.password);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/user/create', async (request, response, next) => {
        try {
            const result = await business.getUserManager(request).createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/user/token', async (request, response, next) => {
        try {
            const result = await business.getUserManager(request).getTokenByUserId(request.body.userId);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/user/logout', async (request, response, next) => {
        try {
            const result = await business.getUserManager(request).removeHashSession(request.body.userId);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/user/isauth', auth, async (request, response, next) => {
        try {
            response.status(200).send(request.isValid);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/user/get-user', async (request, response, next) => {
        try {
            const result = await business.getUserManager(request).getUser(request.body.userId);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

};

export default userEndpoint;
