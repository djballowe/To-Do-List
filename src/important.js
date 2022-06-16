import { addToStorage, arr } from "./taskobjectfunctions"

function important() {
    const starDom = (index, data) => {
        const notImportant = document.getElementById(`star-${index}`);
        const isImportant = document.getElementById(`important-${index}`);

        if (data === 'not-important') {
            isImportant.classList.add('displayed');
            isImportant.classList.toggle('not-displayed');
            notImportant.classList.add('not-displayed');
            notImportant.classList.toggle('displayed');
        } else if (data === 'important') {
            notImportant.classList.add('displayed');
            notImportant.classList.toggle('not-displayed');
            isImportant.classList.add('not-displayed');
            isImportant.classList.toggle('displayed');
        }
    }

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
    }

    return {
        starDom,
        changePrio
    }
}



export { important }