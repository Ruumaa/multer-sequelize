const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
const userRouter = require("./routes/userRouter.js");
const errorHandler = require("./middleware/errorHandler.js");
const port = 3000;

app.use(express.json()); //untuk menguraikan body request HTTP dari JSON
app.use(express.urlencoded({ extended: false })); //sama tapi dari url-encoded

app.use("/api/movies", routes);
app.use("/api/users", userRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
