import { addMilliseconds } from "date-fns";
import { arr } from "./addingtask"

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
    return {
        trash
    }

    const edit = (index) => {

    }
}

export { taskIconFunctions }