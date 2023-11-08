import express from "express";
import bodyParser from "body-parser";
import router from "./routes/user.js";
import usersRoutes from "./routes/user.js";

const app = express();

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.listen(3010, () => {
  console.log("server is listening on port localhost:3009");
});
export default router;
