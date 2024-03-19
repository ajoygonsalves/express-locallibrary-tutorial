const mongoose = require("mongoose");
const Author = require("./models/author");
const Genre = require("./models/genre");
const BookInstance = require("./models/bookinstance");

// Your database connection string goes here
const mongoDB = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_KEY}@locallibrary.vv4fqrx.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

async function findAllEntries() {
  try {
    const authors = await Author.find();
    const genres = await Genre.find();
    const bookInstances = await BookInstance.find();

    console.log("Authors:", authors);
    console.log("Genres:", genres);
    console.log("BookInstances:", bookInstances);

    // Close the connection after all queries are complete
    db.close();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

findAllEntries();
