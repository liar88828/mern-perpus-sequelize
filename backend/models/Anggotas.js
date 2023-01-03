module.exports = (sequelize, DataTypes) => {
	const Anggotas = sequelize.define("Anggotas", {
		stb: {
			type: DataTypes.STRING(15),
			primaryKey: true,
			allowNull: false,
		},
		nama: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		alamat: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		jK: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		telp: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});

	Anggotas.associate = (models) => {
		Anggotas.hasMany(models.Peminjams, {
			onDelete: "cascade",
		});
	};
	return Anggotas;
};
