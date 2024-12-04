import { body, param } from 'express-validator';

export const createCompoundValidation = [
    body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isString()
        .withMessage('Name must be a string'),
    body('image')
        .notEmpty()
        .withMessage('Image URL is required')
        .isURL()
        .withMessage('Image URL must be a valid URL'),
    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),
];

export const updateCompoundValidation = [
    param('id')
        .isInt(),
    body('name')
        .optional()
        .notEmpty()
        .withMessage('Name cannot be empty')
        .isString()
        .withMessage('Name must be a string'),
    body('image')
        .optional()
        .notEmpty()
        .withMessage('Image URL cannot be empty')
        .isURL()
        .withMessage('Image URL must be a valid URL'),
    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),
];
