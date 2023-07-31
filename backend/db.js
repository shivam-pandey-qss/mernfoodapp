// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://gofood:DqVweqU1bMG9b47g@cluster0.vpukeum.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   await mongoose
//     .connect(mongoURI)
//     .then(async () => {
//       console.log("connected successfully!");
//       const fetch_data = await mongoose.connection.db.collection("food_items");
//       console.log("first", fetch_data);
//       fetch_data.find({}).toArray(function (err, data) {
//         if (err) console.log(err);
//         else {
//           console.log("cacs", cvfvfff);
//           global.food_items = data;
//           console.log(global.food_items);
//         }
//       });
//     })
//     .catch((error) => {
//       console.error("getting error : ", error);
//     });
// };

// module.exports = mongoDB;

// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://gofood:DqVweqU1bMG9b47g@cluster0.vpukeum.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//     console.log("connected successfully!");

//     const fetch_data = await mongoose.connection.db.collection("food_items");
//     //console.log("first", fetch_data);

//     const data = await fetch_data.find({}).toArray(async function (err, data) {
//       const foodCategory = await mongoose.connection.db.collection(
//         "foodCategory"
//       );
//       foodCategory.find({}).toArray(function (err, catData) {
//         if (err) console.log(err);
//         else {
//           global.food_items = data;
//           global.foodCategory = catData;
//         }
//       });
//     });
//     //console.log("cacs", data);

//     // console.log(global.food_items);
//   } catch (error) {
//     console.error("getting error : ", error);
//   }
// };

// module.exports = mongoDB;

const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://gofood:DqVweqU1bMG9b47g@cluster0.vpukeum.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected successfully!");

    const fetch_data = mongoose.connection.db.collection("food_items");
    const data = await fetch_data.find({}).toArray();

    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;

    // console.log("Fetched data:", global.food_items);
    //console.log("Fetched categories:", global.foodCategory);
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = mongoDB;
