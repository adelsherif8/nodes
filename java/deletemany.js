//MongoDB and Mongoose - Delete Many Documents with model.remove()
const Human = require("./data");
Human.deleteMany({
  Name: "eid",
})
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });
