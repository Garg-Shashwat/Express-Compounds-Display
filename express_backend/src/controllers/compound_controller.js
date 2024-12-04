import * as compoundService from '../services/compound_service.js';

export const getAllCompounds = async (req, res) => {
    try {
        const compounds = await compoundService.getAllCompounds();
        res.status(200).json(compounds);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve compounds' });
    }
};

export const getCompoundById = async (req, res) => {
    try {
        const compound = await compoundService.getCompoundById(req.params.id);
        if (!compound) {
            res.status(404).json({ message: 'Compound not found' });
        }
        res.status(200).json(compound);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve compound' });
    }
};

export const createCompound = async (req, res) => {
    const data = {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
    };

    try {
        const compound = await compoundService.createCompound(data);
        if (!compound) {
            res.status(404).json({ message: 'Compound not found' });
        }
        res.status(200).json(compound);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating compound' });
    }
};

export const updateCompound = async (req, res) => {
    const { id } = req.params;
    const data = {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
    };

    try {
        const compound = await compoundService.updateCompound(id, data);
        if (!compound) {
            res.status(404).json({ message: 'Compound not found' });
        }
        res.status(200).json(compound);
    } catch (error) {
        console.error('Error updating compound:', error.message);
        res.status(500).json({ message: 'Error updating compound' });
    }
};

export const deleteCompound = async (req, res) => {
    try {
        const compound = await compoundService.deleteCompound(req.params.id);
        if (!compound) {
            res.status(404).json({ message: 'Compound not found' });
        }
        res.status(200).json(compound);
    } catch (error) {
        console.error('Error updating compound:', error.message);
        res.status(500).json({ message: 'Error updating compound' });
    }
};
