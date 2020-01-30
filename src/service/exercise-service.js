import instance from "./instance";

export const exerciseService = {
  updateExercise,
  getExerciseForToday
};

function getExerciseForToday(goalId) {
  return instance.get(`exercises/today?goalId=${goalId}`);
}

function updateExercise(id, exercise) {
  return instance.put(`exercises/${id}`, {...exercise});
}