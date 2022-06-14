import { arr } from "./addingtask"

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
            arr[index].importance = true;
            console.log('should be true')
        } else if (data === 'important') {
            arr[index].importance = false;
            console.log('should be false')
        }
        console.log(arr);
    }

    return {
        starDom,
        changePrio
    }
}

export { important }