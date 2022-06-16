import { addToStorage, arr } from "./taskobjectfunctions"

function important() {
    const changePrio = (index, data) => {
        if (data === 'not-important') {
            localStorage.clear();
            arr[index].importance = true;
            addToStorage();
        } else if (data === 'important') {
            localStorage.clear();
            arr[index].importance = false;
            addToStorage();
        }
        checkPrio();
    }
 
    const checkPrio = () => {
        for (let i = 0; i < arr.length; i++) {
            const notImportant = document.getElementById(`star-${i}`);
            const isImportant = document.getElementById(`important-${i}`);
            if (arr[i].importance === true) {
                notImportant.style.display = 'none';
                isImportant.style.display = 'block';
            } else if (arr[i].importance === false) {
                notImportant.style.display = 'block';
                isImportant.style.display = 'none';
            }
        }
    }

    return {
        changePrio,
        checkPrio
    }
}



export { important }