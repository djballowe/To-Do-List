import { arr } from "./addingtaskDOM"
import { addToStorage } from "./taskobjectfunctions"
import { addProjectToStorage } from "./addingProjectDOM";


export let doneTask = [];

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
        doneTask.push(arr[index]);
        arr.splice(index, 1);
        localStorage.clear();
        addToStorage();
        addProjectToStorage();
    }

    const uncompletedArray = (index) => {
        arr.push(doneTask[index]);
        doneTask.splice(index, 1);
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