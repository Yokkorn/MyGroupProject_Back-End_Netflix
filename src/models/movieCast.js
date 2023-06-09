module.exports = (sequelize, DataTypes) => {
  const MovieCast = sequelize.define(
    'MovieCast',
    {
      mainRole: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { underscored: true }
  );
  MovieCast.associate = (db) => {
    MovieCast.belongsTo(db.Movie, {
      foreignKey: {
        name: 'movieId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
    });

    MovieCast.belongsTo(db.Cast, {
      foreignKey: {
        name: 'castId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
    });
  };

  return MovieCast;
};
