module.exports = (sequelize, DataTypes) => {
  const PeminjamDetails = sequelize.define("PeminjamDetails", {
    id_peminjamans: {
      type: DataTypes.STRING(15),
      primaryKey: true,
      allowNull: false,
    },
  });

  return PeminjamDetails;
};
