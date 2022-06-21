import { addProjectToStorage, projects } from "./addingProjectDOM";
import { arr } from "./addingtaskDOM";



function taskCreator(task, about, day, project) {
    return {
        title: task,
        description: about,
        date: day,
        importance: false,
        completed: false,
        project: project
    }
}

function getData() {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const num = document.getElementById('project-select').childElementCount;

    if (document.getElementById('cat-project-all').style.display === 'block') {
        arr.push(taskCreator(title, description, date));
    } 
    
    for (let i = 0; i < projects.length; i++) {
        const projectCheck = document.getElementById(`cat-project-${projects[i]}`).style.display;
        
        if (projectCheck === 'block') {
            console.log(projectCheck);
            arr.push(taskCreator(title, description, date, projects[i]));
            console.log('test');
            break;
        } else {
            continue;
        }
    }
}    

function addToStorage() {
    localStorage.setItem('tasks', JSON.stringify(arr));
}

function deleteObject(index) {
    arr.splice(index, 1);
    localStorage.clear();
    addToStorage();
    addProjectToStorage();
}



export { getData, deleteObject, addToStorage }