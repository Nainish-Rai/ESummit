import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

// Database connection
mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the form data
const formDataSchema = new mongoose.Schema({
  Name_of_your_startup: String,
  founders_name: String,
  Email_Address: String,
  Contact_Number: String,
  Which_city_is_your_startup_based_in: String,
  Mention_your_Startup_website: String,
  What_is_your_Target_Customer_and_Market_Size: String,
  What_is_your_Primary_Revenue_Stream: String,
  Mention_any_two_close_competitors_of_your_Startup: String,
  Can_you_provide_a_brief_description_about_your_Startup_Product_and_the_need_being_addressed:
    String,
  What_are_some_of_the_challenges_you_are_facing_with_your_Startup: String,
});

// Define a model based on the schema
const FormData = mongoose.model("FormData", formDataSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle POST requests to '/form'
app.post("/form", (req, res) => {
  const {
    Name_of_your_startup,
    founders_name,
    Email_Address,
    Contact_Number,
    Which_city_is_your_startup_based_in,
    Mention_your_Startup_website,
    What_is_your_Target_Customer_and_Market_Size,
    What_is_your_Primary_Revenue_Stream,
    Mention_any_two_close_competitors_of_your_Startup,Can_you_provide_a_brief_description_about_your_Startup_Product_and_the_need_being_addressed,What_are_some_of_the_challenges_you_are_facing_with_your_Startup
  } = req.body;

  // Create a new document using the FormData model
  const formData = new FormData({ Name_of_your_startup,
    founders_name,
    Email_Address,
    Contact_Number,
    Which_city_is_your_startup_based_in,
    Mention_your_Startup_website,
    What_is_your_Target_Customer_and_Market_Size,
    What_is_your_Primary_Revenue_Stream,
    Mention_any_two_close_competitors_of_your_Startup,Can_you_provide_a_brief_description_about_your_Startup_Product_and_the_need_being_addressed,What_are_some_of_the_challenges_you_are_facing_with_your_Startup });

  // Save the form data to the database
  formData
    .save()
    .then(() => {
      res.send("Form data saved successfully");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving form data");
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
