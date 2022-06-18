import { projects } from "./addingProjectDOM";

export let arr = JSON.parse(localStorage.getItem('tasks')) || [];

function taskCreator(task, about, day, project) {
    return {
        title: task,
        description: about,
        date: day,
        importance: false,
        project: project
    }
}

function getData() {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const num = document.getElementById('project-select').childElementCount;

    if (num > 0) {
        const projectCheck = document.getElementById(`cat-project-${projects[index]}`);
        if (projectCheck.style.display === 'block') {
            arr.push(taskCreator(title, description, date, projects[index]));
        } else {
            arr.push(taskCreator(title, description, date));
        }
    } else {
        arr.push(taskCreator(title, description, date));
    }
}

function addToStorage() {
    localStorage.setItem('tasks', JSON.stringify(arr));
}

function deleteObject(index) {
    arr.splice(index, 1);
    localStorage.clear();
    addToStorage();
}

function addProjectAttribute(title, index) {
    
    arr[index].project = title;
}



export { getData, deleteObject, addProjectAttribute, addToStorage }