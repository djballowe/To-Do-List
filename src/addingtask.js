let arr = [];

function taskCreator(task, about, day) {
    return {
        title: task,
        description: about,
        date: day,
        importance: false
    }
}

function addObject() {
    arr.push(taskCreator())
}



export { taskCreator, addObject }