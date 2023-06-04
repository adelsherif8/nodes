//Delete One Document Using model.findByIdAndRemove
const Human = require("./data");
Human.findOneAndRemove({
  _id: ObjectId("647cae2a703e7b3b624c9ead"),
})
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });
