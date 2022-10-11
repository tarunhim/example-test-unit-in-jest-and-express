const mongoose = require("mongoose");
const app = require("./server");

mongoose
  .connect("mongodb+srv://todo-emiza:todo-emiza123@cluster0.evwrlpt.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true,  useUnifiedTopology: true  })
  .then(() => {
    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
