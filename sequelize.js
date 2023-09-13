
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_de_tu_base_de_datos', 'nombre_de_usuario', 'contraseña', {
  host: 'localhost', 
  dialect: 'mysql',
});

module.exports = sequelize;
