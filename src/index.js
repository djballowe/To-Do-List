import { addTaskProjects } from "./taskPopUp"
import { focusEffects } from "./icons"
import { taskCreator } from "./addingtask"




const task = addTaskProjects();

// all button and event listeners

document.querySelector('body').addEventListener('click', function(e) {
    const id = e.target.id;
    const data = e.target.getAttribute('data');
    
    
    switch (id) {
        case 'add-task':
            task.task();
            break;
        case 'cancel':
            task.cancel();
            break;
        case 'add':
            console.log(taskCreator('test', 'this is a test description', '7/5/2025'));
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
    }
})

