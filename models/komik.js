module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define("komik", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },