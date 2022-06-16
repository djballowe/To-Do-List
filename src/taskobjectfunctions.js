

export let arr = JSON.parse(localStorage.getItem(`task`)) || [];


function taskCreator(task, about, day) {
    return {
        title: task,
        description: about,
        date: day,
        importance: false,
    }
}

function getData() {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    
    arr.push(taskCreator(title, description, date));
}

function addToStorage() {
    localStorage.setItem(`tasks`, JSON.stringify(arr));
}

function deleteObject(index) {
    console.log(localStorage);
}

function addProjectAttribute(title, index) {
    arr[index].project = title;
}



export { getData, deleteObject, addProjectAttribute, addToStorage }