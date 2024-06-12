export const getGoals = (req, res) => {
  res.status(200).send("Get Goals");
};

export const setGoal = (req, res) => {
  res.status(201).send("Set Goal");
};

export const updateGoal = (req, res) => {
  res.status(201).send(`Update Goal ${req.params.id}`);
};

export const deleteGoal = (req, res) => {
  res.status(201).send(`Delete Goal ${req.params.id}`);
};
