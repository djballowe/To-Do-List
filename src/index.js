import { taskPopUp } from "./taskPopUp"



const task = taskPopUp();

// all button and event listeners

document.querySelector('body').addEventListener('click', function(e) {
    const id = e.target.id;
    
    if (id === 'add-task') {
        task.task();
        console.log('test')
    } else if (id === 'cancel') {
        task.cancel();
    }
    
})

