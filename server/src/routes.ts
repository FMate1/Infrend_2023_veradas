import express from 'express';
import { LocationController } from './controller/location.controller';
import { BloodDonorController } from './controller/bloodDonor.controller';
import { BloodDonationFormController } from './controller/bloodDonationForm.controller';
import { UserController } from './controller/user.controller';

export function getRoutes() {
    const router = express.Router();

    const locationController = new LocationController();

    router.get('/locations', locationController.getAll);
    router.get('/locations/:id', locationController.getOne);
    router.post('/locations', locationController.create);
    router.put('/locations', locationController.update);
    router.delete('/locations/:id', locationController.delete);

    const bloodDonorController = new BloodDonorController();

    router.get('/bloodDonors', bloodDonorController.getAll);
    router.get('/bloodDonors/:id', bloodDonorController.getOne);
    router.post('/bloodDonors', bloodDonorController.create);
    router.put('/bloodDonors', bloodDonorController.update);
    router.delete('/bloodDonors/:id', bloodDonorController.delete);

    const bloodDonationFormController = new BloodDonationFormController();

    router.get('/bloodDonationForms', bloodDonationFormController.getAll);
    router.get('/bloodDonationForms/:id', bloodDonationFormController.getOne);
    router.post('/bloodDonationForms', bloodDonationFormController.create);
    router.put('/bloodDonationForms', bloodDonationFormController.update);
    router.delete('/bloodDonationForms/:id', bloodDonationFormController.delete);

    const userController = new UserController();

    router.get('/users', userController.create);

    return router;
}
