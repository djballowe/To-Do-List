import { arr } from "./addingtaskDOM"
import { addToStorage } from "./taskobjectfunctions"
import { addProjectToStorage } from "./addingProjectDOM";

function completed() {
    
    const changeCheck = (index) => {
        const theTask = document.getElementById(`task-${index}`)
        const button = document.getElementById(`check-${index}`)
        console.log(index)
        if (arr[index].completed === true) {
            theTask.removeAttribute('class');
            button.removeAttribute('class');
            button.removeAttribute('data');
            theTask.classList.add('completed-task');
            button.classList.add('check');
            button.setAttribute('data', 'completed')
        } 
        if (arr[index].completed === false) {
            theTask.removeAttribute('class');
            button.removeAttribute('class');
            button.removeAttribute('data');
            theTask.setAttribute('class', 'new-task');
            button.setAttribute('data', 'not-completed')
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

function checkStatus() {
    for (let i = 0; i < arr.length; i++) {
        const theTask = document.getElementById(`task-${i}`)
        const button = document.getElementById(`check-${i}`)
        if (arr[i].completed === true) {
            theTask.removeAttribute('class');
            button.removeAttribute('class');
            button.removeAttribute('data');
            theTask.classList.add('completed-task');
            button.classList.add('check');
            button.setAttribute('data', 'completed')
        }
        if (arr[i].completed === false) {
            theTask.removeAttribute('class');
            button.removeAttribute('class');
            button.removeAttribute('data');
            button.setAttribute('data', 'not-completed')
        }
    }
}

checkStatus();

export { completed }