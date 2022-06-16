export const local = () => {
    let arr;
    for (let i = 0; i < localStorage.length; i++) {
        arr = JSON.parse(localStorage.getItem(`tasks${i}`)) || [];
    }
    return arr;
}



function taskCreator(task, about, day) {
    return {
        title: task,
        description: about,
        date: day,
        importance: false,
    }
}

function getData() {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    
    local().push(taskCreator(title, description, date));
}

function addToStorage(index) {
    localStorage.setItem(`tasks${index}`, JSON.stringify(local()));
    console.log(localStorage);
    console.log(index)
}

function deleteObject(index) {
      
}

function addProjectAttribute(title, index) {
    arr[index].project = title;
}



export { getData, deleteObject, addProjectAttribute, addToStorage }