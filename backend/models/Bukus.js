module.exports = (sequelize, DataTypes) => {
  const Bukus = sequelize.define("Bukus", {
    id_buku: {
      type: DataTypes.STRING(30),
      primaryKey: true,
      allowNull: false,
    },
    judulBuku: DataTypes.STRING,
    penulis: DataTypes.STRING,
    kategori: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    JmlHal: DataTypes.INTEGER,
    tahunPenerbit: DataTypes.INTEGER,
  });

  Bukus.associate = (models) => {
    Bukus.hasMany(models.PeminjamDetails, {
      onDelete: "cascade",
    });
  };

  return Bukus;
};
