//Use model.findById() to Search Your Database By _id
const Human = require("./data");
let personID = "647cae2a703e7b3b624c9eaf";
Human.findById(personID)
  .then((doc) => {
    if (doc) {
      console.log("Person Is: ", doc);
    } else {
      console.log("Person not found");
    }
  })
  .catch((err) => {
    console.error(err);
  });
