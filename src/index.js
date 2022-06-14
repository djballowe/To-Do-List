import { addTaskProjects } from "./taskPopUp"
import { focusEffects } from "./icons"
import { getData } from "./addingtask"
import { taskDOM } from "./addingtaskDOM"
import { arr } from "./addingtask"
import { importance } from "./importance"



const priority = importance();
const task = addTaskProjects();

// all button and event listeners

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
            taskDOM();
            task.cancel();
            break;
        case 'project-add':
            task.project();
            break;
        case 'project-cancel':
            task.cancel();
            break;
        
    }

    switch (data) {
        case 'organize':
            focusEffects(id);
            break;
        case 'importance':
            priority.changeCheck();
            priority.importantArray(index);
    }
})



