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

        document.querySelector('.tasks').appendChild(elementFactory('div', {class: 'new-task'}));

        document.querySelector('.new-task').appendChild(elementFactory('div', {class: 'left-side'}));

        document.querySelector('.left-side').appendChild(elementFactory('button', {class: 'check', type: 'button'}));
        document.querySelector('.left-side').appendChild(elementFactory('div', {class: 'project-text'}))

        document.querySelector('.project-text').appendChild(elementFactory('p', 'none', ));
        document.querySelector('.project-text').appendChild(elementFactory('p', 'none', ));
        console.log(arr);
        break;

    }
}

export { taskDOM }