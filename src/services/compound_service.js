import db from '../models/index.js';

export const getAllCompounds = async () => {
    return await db.Compound.findAll();
};

export const getCompoundById = async (id) => {
    return await db.Compound.findByPk(id);
};

export const createCompound = async (data) => {
    return await db.Compound.create(data);
};

export const updateCompound = async (id, data) => {
    const compound = await db.Compound.findByPk(id);
    if (!compound) {
        return null;
    }
    return await compound.update(data);
};

export const deleteCompound = async (id) => {
    const compound = await db.Compound.findByPk(id);
    if (!compound) {
        return null
    }
    await compound.destroy();
};
