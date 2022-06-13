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

        const left = document.querySelector('.left-side');
        left.appendChild(elementFactory('button', {class: 'check', type: 'button'}));
        left.appendChild(elementFactory('div', {class: 'project-text'}))

        document.querySelector('.project-text').appendChild(elementFactory('p', 'none', `${arr[index].title}`));
        document.querySelector('.project-text').appendChild(elementFactory('p', 'none', `${arr[index].description}`));
        
        document.querySelector('.new-task').appendChild(elementFactory('div', {class: 'info'}))
        const info = document.querySelector('.info');
        info.appendChild(elementFactory('p', 'none', `${arr[index].date}`));

        break;
    }
}

export { taskDOM }