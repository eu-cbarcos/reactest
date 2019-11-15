module.exports = (sequelize,Datatypes) => {
  const post = sequelize.define(
    'post',
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: Datatypes.STRING,
        allowNull: false,
      }
    }
  );
  return post;
}