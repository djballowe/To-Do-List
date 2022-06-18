import { elementFactory } from "./addingtaskDOM"
import { storageArray, iconClass } from "./icons"



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
        catCreator(`${document.getElementById('project-input').value}`)
    )
    return { catCreator }
}

function addProjectToStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('categories', JSON.stringify(iconClass));
}

function projectDom() {
    const container = document.querySelector('.project-select');
    const newCatContainer = document.querySelector('.all');

    projects.forEach((item, index) => {
        container.appendChild(elementFactory('div', {class: 'new-project', id: `${projects[index]}`, data: 'organize'}));
        document.querySelector(`#${projects[index]}`).appendChild(elementFactory('div', {id: `name-${index}`, class: 'name'}));
        document.querySelector(`#name-${index}`).appendChild(elementFactory('div', {id: `grid-${index}`, index: `${index}`, class: 'grid'}));
        document.querySelector(`#grid-${index}`).appendChild(elementFactory('img', {src: '../src/grid.svg', index: `${index}`}));
        document.querySelector(`#name-${index}`).appendChild(elementFactory('p', 'none', `${projects[index]}`));
        document.querySelector(`#${projects[index]}`).appendChild(elementFactory('div', {id: `trash-${index}`, class: 'trash'}));
        document.querySelector(`#trash-${index}`).appendChild(elementFactory('img', {src: '../src/trash.svg', index: `${index}`}));

        // make a new category title

        newCatContainer.appendChild(elementFactory('h2', {id: `cat-${projects[index]}`}, `${projects[index]}`));
        document.getElementById(`cat-${projects[index]}`).style.display = 'none';
    })
}

projectDom();

export { projectDom, getProjects, addProjectToStorage }