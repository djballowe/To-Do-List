import { projects } from "./addingProjectDOM";
import { arr } from "./addingtaskDOM";



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
        for (let i = 0; i < projects.length; i++) {
            const projectCheck = document.getElementById(`cat-project-${projects[i]}`);
            if (projectCheck.style.display === 'block') {
                arr.push(taskCreator(title, description, date, projects[i]));
            } else {
                arr.push(taskCreator(title, description, date));
            }
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



export { getData, deleteObject, addToStorage }