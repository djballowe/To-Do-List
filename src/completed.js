import { arr } from "./addingtaskDOM"
import { addToStorage } from "./taskobjectfunctions"
import { addProjectToStorage } from "./addingProjectDOM";

function completed() {
    const changeCheck = (id, index) => {
        const button = document.getElementById(`${id}`);
        const theTask = document.getElementById(`task-${index}`);

        if (button.classList.contains('check')) {
            button.classList.toggle('check');
            theTask.classList.toggle('completed-task');
            button.removeAttribute('data');
            button.setAttribute('data', 'non-completed');
        } else {
            button.classList.add('check');
            theTask.classList.add('completed-task');
            button.removeAttribute('data');
            button.setAttribute('data', 'completed');
        }   
    }

    const completedArray = (index) => {
        arr[index].completed = true
        localStorage.clear();
        addToStorage();
        addProjectToStorage();
    }

    const uncompletedArray = (index) => {
        arr[index].completed = false
        localStorage.clear();
        addToStorage();
        addProjectToStorage();
    }

    return {
        changeCheck,
        completedArray,
        uncompletedArray
    }
}

export { completed }