import { elementFactory } from "./addingtaskDOM"



export let projects = JSON.parse(localStorage.getItem('projects')) || [];


function getProjects() {
    projects.push(document.getElementById('project-input').value);
}

function addProjectToStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

function projectDom() {
    const container = document.querySelector('.project-select');
    const title = document.getElementById('project-input');

    projects.forEach((item, index) => {
        container.appendChild(elementFactory('div', {class: 'new-project', id: `project-${index}`}));
        document.querySelector(`#project-${index}`).appendChild(elementFactory('div', {id: `name-${index}`, class: 'name'}));
        document.querySelector(`#name-${index}`).appendChild(elementFactory('div', {id: `grid-${index}`, index: `${index}`, class: 'grid'}));
        document.querySelector(`#grid-${index}`).appendChild(elementFactory('img', {src: '../src/grid.svg', index: `${index}`}));
        document.querySelector(`#name-${index}`).appendChild(elementFactory('p', 'none', `${title.value}`));
        document.querySelector(`#project-${index}`).appendChild(elementFactory('div', {id: `trash-${index}`, class: 'trash'}));
        document.querySelector(`#trash-${index}`).appendChild(elementFactory('img', {src: '../src/trash.svg', index: `${index}`}));
    })
}

export { projectDom, getProjects }