import { taskDOM } from "./addingtaskDOM"

const build = taskDOM();

function projectDom(index, title) {
    const container = document.querySelector('.project-select');

    container.appendChild(build.elementFactory('div', {id: `name-${index}`}));
    document.querySelector(`#name-${index}`).appendChild(elementFactory('div', {id: `project-${index}`, index: `${index}`}));
    document.querySelector(`project-${index}`).appendChild(elementFactory('img', {src: '../src/grid', index: `${index}`}));
    document.querySelector(`#name-${index}`).appendChild(elementFactory('p', 'none', `${title}`))

}