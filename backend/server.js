import express from "express";
import goalRoutes from "./routes/GoalRoutes.js";
const PORT = process.env.PORT || 5000;

const app = express();

//middleware to parse json requests
app.use(express.json());

//middleware to parse URL-encoded daata
app.use(express.urlencoded({ extended: true }));

app.use("/api/goals", goalRoutes);

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
