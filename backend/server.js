import express from "express";
import goalRoutes from "./routes/GoalRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import colors from "colors";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

//Following two middlewares used to accept body data of the req
//middleware to parse json requests
app.use(express.json());
//middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
