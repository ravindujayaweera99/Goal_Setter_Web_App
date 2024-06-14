import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel.js";

// @desc GET goals
// @route GET /api/goals
// @access private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).send(goals);
});

// @desc set goal
// @route POST /api/goals
// @access private
export const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Input Text Field!");
  } else {
    const goal = await Goal.create({
      text: req.body.text,
    });
    res.status(201).json(goal);
  }
});

// @desc update goal
// @route PUT /api/goals/:id
// @access private
export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found!");
  } else {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedGoal);
  }
});

// @desc delete goal
// @route DELETE /api/goals/:id
// @access private
export const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    throw new Error("Goal Not Found!");
  } else {
    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
    res.status(201).json(deletedGoal);
  }
});
