let mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://adelsherif8:cm619sin@cluster0.np6h5wo.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let protoSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
  },
  FavoriteFoods: {
    type: [String],
    required: true,
  },
});
let Human = mongoose.model("Human", protoSchema);
let person = new Human({
  Name: "Adel Emad",
  Age: 18,
  FavoriteFoods: ["Pasta"],
});

let arrayOfPeople = [
  { Name: "joody", Age: 17, FavoriteFoods: "Pasta" },
  { Name: "jana", Age: 16, FavoriteFoods: "Burger" },
  { Name: "hoss", Age: 19, FavoriteFoods: "Pizza" },
  { Name: "khaled", Age: 18, FavoriteFoods: "Burger" },
  { Name: "eid", Age: 18, FavoriteFoods: "chicken" },
  { Name: "farah", Age: 18, FavoriteFoods: "meat" },
  { Name: "eid", Age: 20, FavoriteFoods: "meat" },
];
Human.create(arrayOfPeople)
  .then((doc) => {
    console.log("Document saved:", doc);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
module.exports = Human;
