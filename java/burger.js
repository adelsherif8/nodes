//Chain Search Query Helpers to Narrow Search Results
const Human = require("./data");
Human.find({
  FavoriteFoods: "Burger",
})
  .sort({ Name: 1 })
  .limit(2)
  .select({ Age: 0 })
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });
