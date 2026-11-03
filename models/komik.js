module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define(
    "komik",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true, // Konfigurasi untuk menonaktifkan penjamakan nama tabel otomatis
      timestamps: false, // Menambahkan ini agar Sequelize tidak mencari createdAt & updatedAt
    },
  );

  return Komik;
};
