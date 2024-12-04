import { validationResult } from "express-validator";

export const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
};

export const validationErrorHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
