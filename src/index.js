import { addTaskProjects } from "./taskPopUp"
import { focusEffects, catagories, storageArray, iconClass } from "./icons"
import { deleteObject, getData, addToStorage } from "./taskobjectfunctions"
import { taskDOM, clear, displayCheck } from "./addingtaskDOM"
import { arr } from "./addingtaskDOM"
import { completed } from "./completed"
import { important } from "./important"
import { taskIconFunctions } from "./editanddeleteDOM"
import { projectDom, getProjects, addProjectToStorage, clearProjectDom, deleteProjectDom, clearCatDom } from "./addingProjectDOM"
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

function printProject() {
    console.log(projects);
    console.log(iconClass);
}

document.querySelector('body').addEventListener('click', function(e) {
    const id = e.target.id;
    const data = e.target.getAttribute('data');
    const index = e.target.getAttribute('index');

    
    

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
            displayCheck();
            break;
        case 'project-add':
            task.project();
            break;
        case 'project-cancel':
            task.cancel();
            break;
        case 'add-project':
            getProjects();
            task.cancel();
            clearCatDom();
            clearProjectDom();
            projectDom();
            addProjectToStorage();
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
        case 'print-projects':
            printProject();
            break;
        
    }

    switch (data) {
        case 'organize':
            focusEffects(id, index);
            break;
        case 'non-completed':
            check.completedArray(index);
            check.changeCheck(index);
            break;
        case 'completed':
            check.uncompletedArray(index);
            check.changeCheck(index);
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
        case 'project-trash':
            deleteProjectDom(index, id);
            break;
    }
})

priority.checkPrio();

