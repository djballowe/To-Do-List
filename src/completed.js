import { arr } from "./addingtask"

let doneTask = [];

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
        console.log(arr);
        console.log(doneTask);
    }

    const uncompletedArray = (index) => {
        arr.push(doneTask[index]);
        doneTask.splice(index, 1);
        console.log(arr);
        console.log(doneTask);
    }

    return {
        changeCheck,
        completedArray,
        uncompletedArray
    }
}

export { completed }