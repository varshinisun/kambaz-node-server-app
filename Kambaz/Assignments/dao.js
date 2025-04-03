import Database from "../Database/index.js";
export function findAssignmentsForCourse(assignmentId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === assignmentId);
}
