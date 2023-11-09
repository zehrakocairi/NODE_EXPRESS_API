import express from "express";
import bodyParser from "body-parser";
import router from "./routes/user.js";
import usersRoutes from "./routes/user.js";

const app = express();

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.listen(3001, () => {
  console.log("server is listening on port localhost:3001");
});
export default router;
