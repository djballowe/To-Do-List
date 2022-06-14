import { arr } from "./addingtask"

function importance() {
    const changeCheck = (id) => {
        const element = document.getElementById(`${id}`);
        if (element.classList.contains('check')) {
            element.classList.toggle('check');
        } else {
            element.classList.add('check');
        }   
    }

    const importantArray = (index) => {
        
        if (arr[index].importance === true) {
            arr[index].importance = false;
        } else {
            arr[index].importance = true;
        }
        console.log(arr);
    }
    return {
        changeCheck,
        importantArray
    }
}

export { importance }