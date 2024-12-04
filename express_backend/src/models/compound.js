import { DataTypes } from 'sequelize';

const Compound = (sequelize) => {
    return sequelize.define('Compound', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageAttribution: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        timestamps: true,
    });
};

export default Compound;