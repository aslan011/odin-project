const tasks = []

const newTask = function(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;

    tasks.push(this);

}

export {newTask}
export {tasks}