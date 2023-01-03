module.exports = (sequelize, DataTypes) => {
	const Peminjams = sequelize.define("Peminjams", {
		id_peminjamans: {
			type: DataTypes.STRING(15),
			primaryKey: true,
			allowNull: false,
		},
		tgl_pinjam: DataTypes.DATEONLY,
		tgl_kembali: DataTypes.DATEONLY,
	});

	Peminjams.associate = (models) => {
		Peminjams.hasMany(models.PeminjamDetails, {
			onDelete: "cascade",
		});
	};
	return Peminjams;
};
