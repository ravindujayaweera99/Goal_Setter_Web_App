import asyncHandler from "express-async-handler";

// @desc GET goals
// @route GET /api/goals
// @access private
export const getGoals = asyncHandler(async (req, res) => {
  res.status(200).send("Get Goals");
});

// @desc set goal
// @route POST /api/goals
// @access private
export const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Input Text Field!");
  } else {
    res.status(201).send("Set Goal");
    console.log(req.body);
  }
});

// @desc update goal
// @route PUT /api/goals/:id
// @access private
export const updateGoal = asyncHandler(async (req, res) => {
  res.status(201).send(`Update Goal ${req.params.id}`);
});

// @desc delete goal
// @route DELETE /api/goals/:id
// @access private
export const deleteGoal = asyncHandler(async (req, res) => {
  res.status(201).send(`Delete Goal ${req.params.id}`);
});
