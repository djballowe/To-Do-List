
//Dom manipulation only

const addTaskProjects = () => {
    const form = document.getElementById('new');
    const projectForm = document.getElementById('project-popup');

    
    const task = () => {
        form.style.display = 'flex';
    }

    const add = () => {
        // add the reminder to the dom
    }

    const cancel = () => {
        console.log('cancel');
        form.style.display = 'none';
        projectForm.style.display = 'none';
    }

    const project = () => {
        projectForm.style.display = 'block';
    }

    const all = () => {

    }
    
    return {
        task,
        add,
        cancel,
        project
    }
}

export { addTaskProjects };