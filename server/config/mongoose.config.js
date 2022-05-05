const mongoose = require("mongoose");
const databaseName = "teams";

mongoose
  .connect(`mongodb://localhost/${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(`Established a connection to the database: ${databaseName}`)
  )
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
