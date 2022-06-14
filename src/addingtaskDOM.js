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

        document.querySelector('.tasks').appendChild(elementFactory('div', {class: `new-task`, id: `task-${index}`}));
        document.querySelector('.new-task').appendChild(elementFactory('div', {class: 'left-side'}));
        document.querySelector('.new-task').appendChild(elementFactory('div', {class: 'info'}))

        const left = document.querySelector('.left-side');
        left.appendChild(elementFactory('button', {class: 'check', type: 'button'}));
        left.appendChild(elementFactory('div', {class: 'project-text'}))

        document.querySelector('.project-text').appendChild(elementFactory('p', 'none', `${arr[index].title}`));
        document.querySelector('.project-text').appendChild(elementFactory('p', 'none', `${arr[index].description}`));
        
        const info = document.querySelector('.info');
        info.appendChild(elementFactory('p', 'none', `${arr[index].date}`));
        info.appendChild(elementFactory('svg', {style: "width:24px;height:24px", viewBox: "0 0 24 24", id:"star"}));
        document.querySelector('#star').appendChild(elementFactory('path', {fill: "currentColor", d: "M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17.8 21.2L15 18.2L16.2 17L17.8 18.6L21.4 15L22.6 16.4L17.8 21.2"}))


        break;
    }
}

export { taskDOM }