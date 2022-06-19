import { addTaskProjects } from "./taskPopUp"
import { deleteObject } from "./taskobjectfunctions"
import { arr } from "./addingtaskDOM"



const taskPop = addTaskProjects();

function taskIconFunctions() {
    const trash = (index) => {
        const target = document.querySelector(`#task-${index}`);
        const container = document.getElementById(`task-${index}`);
        const num = document.getElementById(`task-${index}`).childElementCount;
        for (let i = 0; i < num; i++) {
            let child = target.lastElementChild;
            while (child) {
                target.removeChild(child);
                child = target.lastElementChild;
            }
        }
        container.remove();
    }
    
    const edit = (index) => {
        const title = document.getElementById('title');
        const description = document.getElementById('description');
        const date = document.getElementById('date');
        
        trash(index);
        
        title.value = `${arr[index].title}`
        description.value = `${arr[index].description}`
        date.value = `${arr[index].date}`
        taskPop.task();
        deleteObject(index);

    }
    
    return {
        trash,
        edit
    }
}

export { taskIconFunctions }