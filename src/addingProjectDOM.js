import { taskDOM } from "./addingtaskDOM"

const build = taskDOM();

function projectDom(index) {
    const container = document.querySelector('.project-select');

    container.appendChild(build.elementFactory('div', {id: `name-${index}`}))
}