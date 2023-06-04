const Human = require("./data");
Human.findOne({ Name: "joody" })
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });
