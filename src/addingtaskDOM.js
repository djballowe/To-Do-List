import { arr } from "./taskobjectfunctions"

// adding tasks to the dom

function taskDOM() {
    let index = arr.length-1;
    
    const elementFactory = (type, attributes, text) => {
        const create = document.createElement(type);
        create.textContent = text;
        if (attributes !== 'none') {
            for (let key in attributes) {
                create.setAttribute(key, attributes[key]);
            }
        }
        return create;
    }

        document.querySelector('.tasks').appendChild(elementFactory('div', {class: 'new-task', id: `task-${index}`, index: `${index}`}));
        document.querySelector(`#task-${index}`).appendChild(elementFactory('div', {class: 'left-side', id: `left-${index}`}));
        document.querySelector(`#task-${index}`).appendChild(elementFactory('div', {class: 'info', id: `info-${index}`}))

        const left = document.querySelector(`#left-${index}`);
        left.appendChild(elementFactory('button', {type: 'button', id: `check-${index}`, data: 'non-completed', index: `${index}`}));
        left.appendChild(elementFactory('div', {class: 'project-text', id: `project-${index}`}))

        document.querySelector(`#project-${index}`).appendChild(elementFactory('p', 'none', `${arr[index].title}`));
        document.querySelector(`#project-${index}`).appendChild(elementFactory('p', 'none', `${arr[index].description}`));
        
        const info = document.querySelector(`#info-${index}`);
        info.appendChild(elementFactory('p', 'none', `${arr[index].date}`));
        info.appendChild(elementFactory('div', {id: `star-${index}`, class: 'displayed', data: 'not-important'}));
        document.querySelector(`#star-${index}`).appendChild(elementFactory('img', {src: "../src/star.svg", index: `${index}`, data: 'not-important'}));
        info.appendChild(elementFactory('div', {id: `important-${index}`, class: 'not-displayed', data: 'important'}));
        document.querySelector(`#important-${index}`).appendChild(elementFactory('img', {src: "../src/star-check.svg", index: `${index}`, data: 'important'}));
        info.appendChild(elementFactory('div', {class: 'edit', index: `${index}`, data: 'edit', id: `edit-${index}`}));
        document.querySelector(`#edit-${index}`).appendChild(elementFactory('img', {src: '../src/pencil.svg', index: `${index}`, data: 'edit' }))
        info.appendChild(elementFactory('div', {class: 'trash', index: `${index}`, data: 'trash', id: `trash-${index}`}));
        document.querySelector(`#trash-${index}`).appendChild(elementFactory('img', {src: '../src/trash.svg', index: `${index}`, data: 'trash' }))
        
        
    return { elementFactory }
}

arr.forEach(taskDOM);

export { taskDOM }