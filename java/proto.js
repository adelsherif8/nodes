const Human = require("./data");
person
  .save()
  .then((doc) => {
    console.log("Document saved:", doc);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
