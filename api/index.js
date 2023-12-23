const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,      // Add this option
    useUnifiedTopology: true   // Add this option
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(5000, () => {
  console.log("Backend is running on port 5000.");
});
