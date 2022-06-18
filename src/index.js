import { addTaskProjects } from "./taskPopUp"
import { focusEffects, catagories, storageArray } from "./icons"
import { deleteObject, getData, addToStorage } from "./taskobjectfunctions"
import { taskDOM, clear } from "./addingtaskDOM"
import { arr } from "./taskobjectfunctions"
import { completed } from "./completed"
import { important } from "./important"
import { taskIconFunctions } from "./editanddeleteDOM"
import { projectDom, getProjects, addProjectToStorage } from "./addingProjectDOM"
import { doneTask } from "./completed"
import { projects } from "./addingProjectDOM"

const editDelete = taskIconFunctions();
const priority = important();
const check = completed();
const task = addTaskProjects();
const cat = catagories();


// all button and event listeners

function deleteStorage() {
    localStorage.clear();
}

function print() {
    console.log(localStorage)
}

function printArray() {
    console.log(arr);
}

function printCompleted() {
    console.log(doneTask);
}

function printProject() {
    console.log(projects);
}

document.querySelector('body').addEventListener('click', function(e) {
    const id = e.target.id;
    const data = e.target.getAttribute('data');
    const index = e.target.getAttribute('index');
    const input = e.target.getAttribute('input');
    

    switch (id) {
        case 'add-task':
            task.task();
            break;
        case 'cancel':
            task.cancel();
            break;
        case 'add':
            getData();
            task.cancel();
            clear();
            taskDOM();
            addToStorage();
            break;
        case 'project-add':
            task.project();
            break;
        case 'project-cancel':
            task.cancel();
            break;
        case 'add-project':
            getProjects();
            projectDom();
            addProjectToStorage();
            task.cancel();
            break;
        case 'delete-local':
            deleteStorage();
            break;
        case 'print-local':
            print();
            break;
        case 'print-array':
            printArray();
            break;
        case 'print-done':
            printCompleted();
            break;
        case 'print-projects':
            printProject();
            break;
        
    }

    switch (data) {
        case 'organize':
            focusEffects(id, input);
            break;
        case 'non-completed':
            check.changeCheck(id, index);
            check.completedArray(index);
            break;
        case 'completed':
            check.changeCheck(id, index);
            check.uncompletedArray(index);
            break;
        case 'not-important':
            priority.changePrio(index, data);
            break;
        case 'important':
            priority.changePrio(index, data);
            break;
        case 'trash':
            editDelete.trash(index);
            deleteObject(index);
            break;
        case 'edit':
            editDelete.edit(index);
            break;

    }
})

priority.checkPrio();

