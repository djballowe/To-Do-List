import { elementFactory } from "./addingtaskDOM"
import { iconClass } from "./icons"



export let projects = JSON.parse(localStorage.getItem('projects')) || [];


function getProjects() {
    const catCreator = (id) => {
        return {
            id: id,
            class: 'icons'
        }
    }
    
    
    projects.push(document.getElementById('project-input').value);
    iconClass.push(
        catCreator(`project-${document.getElementById('project-input').value}`)
    )
}

function addProjectToStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

function projectDom() {
    const container = document.querySelector('.project-select');

    projects.forEach((item, index) => {
        container.appendChild(elementFactory('div', {class: 'new-project', id: `project-${projects[index]}`, data: 'organize'}));
        document.querySelector(`#project-${projects[index]}`).appendChild(elementFactory('div', {id: `name-${index}`, class: 'name'}));
        document.querySelector(`#name-${index}`).appendChild(elementFactory('div', {id: `grid-${index}`, index: `${index}`, class: 'grid'}));
        document.querySelector(`#grid-${index}`).appendChild(elementFactory('img', {src: '../src/grid.svg', index: `${index}`}));
        document.querySelector(`#name-${index}`).appendChild(elementFactory('p', 'none', `${projects[index]}`));
        document.querySelector(`#project-${projects[index]}`).appendChild(elementFactory('div', {id: `trash-${index}`, class: 'trash'}));
        document.querySelector(`#trash-${index}`).appendChild(elementFactory('img', {src: '../src/trash.svg', index: `${index}`}));
    })
}

projectDom();

export { projectDom, getProjects, addProjectToStorage }