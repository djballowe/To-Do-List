export let arr = JSON.parse(localStorage.getItem('tasks')) || [];

function taskCreator(task, about, day) {
    return {
        title: task,
        description: about,
        date: day,
        importance: false
    }
}

function getData() {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    
    arr.push(taskCreator(title, description, date));
    
    localStorage.setItem('tasks', JSON.stringify(arr));
    console.log(localStorage);
}

function deleteObject(index) {
    arr.splice(index, 1);
}

function addProjectAttribute(title, index) {
    arr[index].project = title;
}



export { getData, deleteObject, addProjectAttribute }