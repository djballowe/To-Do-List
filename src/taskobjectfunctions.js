export let arr = JSON.parse(localStorage.getItem('tasks')) || [];


const local = () => {
    let thing;
    let count;
    for (let i = 0; i < localStorage.length; i++) {
        thing = localStorage.getItem(`tasks${i}`);
    }
    console.log(thing);
    console.log(count);
}

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

function addToStorage(index) {
    localStorage.setItem(`tasks${index}`, JSON.stringify(arr));
}

function deleteObject(index) {
    local();
}

function addProjectAttribute(title, index) {
    arr[index].project = title;
}



export { getData, deleteObject, addProjectAttribute, addToStorage }