

const addTaskPopUp = () => {
    const overlay = document.getElementById('overlay');

    const clickOverlay = () => {
        document.getElementById('form').style.display = 'none';
        overlay.style.display = 'none';
    }    
    
    const form = () => {
        document.getElementById('form').style.display = 'block';
        overlay.style.display = 'block';
    }

    const close = () => {
        document.getElementById('form').style.display = 'none';
        overlay.style.display = 'none';
        document.getElementById('title').value = '';
        document.getElementById('detail').value = '';
        document.getElementById('date').value = '';
    }

    return {
        clickOverlay,
        form,
        close
    }
}

export { addTaskPopUp };