export let arr = JSON.parse(localStorage.getItem('tasks')) || [];

function taskCreator(task, about, day, index) {
    return {
        title: task,
        description: about,
        date: day,
        importance: false,
    }
}

function getData(index) {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    
    arr.push(taskCreator(title, description, date));
    
    localStorage.setItem(`tasks${index}`, JSON.stringify(arr));

    console.log(arr);
}

function deleteObject(index) {
    arr.splice(index, 1);
    
}

function addProjectAttribute(title, index) {
    arr[index].project = title;
}



export { getData, deleteObject, addProjectAttribute }