import express from 'express';
import * as compoundController from '../controllers/compound_controller.js';
import { check } from 'express-validator';
import { createCompoundValidation, updateCompoundValidation } from '../validators/compound_validator.js';
import { validationErrorHandler } from './middleware/error_handler.js';

const router = express.Router();

router.get('/compounds', compoundController.getAllCompounds);
router.get('/compounds/:id',
    check('id').isInt(),
    validationErrorHandler,
    compoundController.getCompoundById,
);
router.post('/compounds',
    createCompoundValidation,
    validationErrorHandler,
    compoundController.createCompound,
);
router.put('/compounds/:id',
    updateCompoundValidation,
    validationErrorHandler,
    compoundController.updateCompound,
);
router.delete('/compounds/:id',
    check('id').isInt(),
    validationErrorHandler,
    compoundController.deleteCompound,
);

export default router;
