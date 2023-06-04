//Perform Classic Updates by Running Find, Edit, then Save
const Human = require("./data");
let personID = "647cae2a703e7b3b624c9eae";
Human.findById(personID)
  .then((data) => {
    if (!data) {
      console.error("Person not found");
      return;
    }
    data.FavoriteFoods.push("hamburger");
    return data.save();
  })
  .then((doc) => {
    console.log("Person added hamburger:", doc);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
