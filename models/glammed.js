module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  });

  // Author.associate = function (models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Author.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return Item;
};
