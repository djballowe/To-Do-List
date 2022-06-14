import { arr } from "./addingtask"

// adding tasks to the dom

function taskDOM() {
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

    for (let i = 0; i < arr.length; i++) {
        let index = arr.length - 1;

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
        info.appendChild(elementFactory('svg', {style: "width:24px;height:24px", viewBox: "0 0 24 24", id: `star-${index}`}));
        document.querySelector(`#star-${index}`).appendChild(elementFactory('path', {fill: "currentColor", d: "M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17.8 21.2L15 18.2L16.2 17L17.8 18.6L21.4 15L22.6 16.4L17.8 21.2"}))
        info.appendChild(elementFactory('svg', {style: "width:24px;height:24px", viewBox: "0 0 24 24", id: `important-${index}`}))
        document.querySelector(`#important-${index}`).appendChild(elementFactory('path', {fill: "currentColor", d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"}))
        
        break;
    }
}

export { taskDOM }