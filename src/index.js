import { addTaskProjects } from "./taskPopUp"



const task = addTaskProjects();

// all button and event listeners

document.querySelector('body').addEventListener('click', function(e) {
    const id = e.target.id;
    
    
    switch (id) {
        case 'add-task':
            task.task();
            break;
        case 'cancel':
            task.cancel();
            break;
        case 'add':
            // put in array
        case 'project-add':
            task.project();
            break;
        case 'project-cancel':
            task.cancel();
            break;
        case 'all':

    }
})

