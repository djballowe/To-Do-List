

const taskPopUp = () => {
    const form = document.getElementById('new');

    
    const task = () => {
        form.style.display = 'flex';
    }

    const add = () => {
        // add the reminder to the dom
    }

    const cancel = () => {
        form.style.display = 'none';

    }

    return {
        task,
        add,
        cancel
    }
}

export { taskPopUp };