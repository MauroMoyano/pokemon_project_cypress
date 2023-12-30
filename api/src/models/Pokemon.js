const { DataTypes, NUMBER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    },
    health: {
      type: DataTypes.NUMBER,
      allowNull: false,
      require: true
    },
    attack: {
      type: DataTypes.NUMBER,
      allowNull: false,
      require: true
    },
    defense: {
      type: DataTypes.NUMBER,
      allowNull: false,
      require: true
    },
    velocity: {
      type: DataTypes.NUMBER,
      allowNull: false,
      require: true
    },
    height: {
      type: DataTypes.NUMBER,
      allowNull: false,
      require: true
    },
    weigth: {
      type: DataTypes.NUMBER,
      allowNull: false,
      require: true
    }

  });
};
