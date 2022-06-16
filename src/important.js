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
    
    // const starDom = (index, data) => {
    //     const notImportant = document.getElementById(`star-${index}`);
    //     const isImportant = document.getElementById(`important-${index}`);

    //     if (arr[index].important === true) {
    //         isImportant.classList.add('displayed');
    //         isImportant.classList.toggle('not-displayed');
    //         notImportant.classList.add('not-displayed');
    //         notImportant.classList.toggle('displayed');
    //     } else if (arr[index].important === false) {
    //         notImportant.classList.add('displayed');
    //         notImportant.classList.toggle('not-displayed');
    //         isImportant.classList.add('not-displayed');
    //         isImportant.classList.toggle('displayed');
    //     }
    // }

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
        //starDom,
        changePrio,
        checkPrio
    }
}



export { important }