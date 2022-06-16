import { addTaskProjects } from "./taskPopUp"
import { focusEffects } from "./icons"
import { deleteObject, getData, addToStorage } from "./taskobjectfunctions"
import { taskDOM, clear } from "./addingtaskDOM"
import { arr } from "./taskobjectfunctions"
import { completed } from "./completed"
import { important } from "./important"
import { taskIconFunctions } from "./editanddeleteDOM"
import { projectDom, getProjects } from "./addingProjectDOM"

const editDelete = taskIconFunctions();
const priority = important();
const check = completed();
const task = addTaskProjects();


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
        
    }

    switch (data) {
        case 'organize':
            focusEffects(id);
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

