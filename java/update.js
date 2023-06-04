//Perform New Updates on a Document Using model.findOneAndUpdate()
const Human = require("./data");
Human.findOneAndUpdate(
  {
    Name: "Adel Emad",
  },
  {
    Age: 20,
  },
  { new: true, runValidators: true }
)
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });
