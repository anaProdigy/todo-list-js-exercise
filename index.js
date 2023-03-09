function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
// prints out the provided task's details
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "} been completed`);
    },

// marks the provided task as completed
    markCompleted: function () {
      this.complete = true;
    }
  };
  return task;
}



// DRIVER CODE BELOW

const task1 = newTask("CLean Cat Litter", "Tale all the 💩 out of the letter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];




task1.logState();  // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState logTaskState(); // Clean Cat Litter has been completed

console.log(tasks)
// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
