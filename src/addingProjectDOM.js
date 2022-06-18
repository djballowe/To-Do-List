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

    const newProject = document.getElementById('project-input').value;
    const newProjectNoSpaces = newProject.replaceAll(' ', '-');
    
    
    projects.push(newProjectNoSpaces);
    
    
    iconClass.push(
        catCreator(`project-${newProjectNoSpaces}`)
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
        const text = projects[index].replaceAll('-', ' ');
        container.appendChild(elementFactory('div', {class: 'new-project', id: `project-${projects[index]}`, data: 'organize'}));
        document.querySelector(`#project-${projects[index]}`).appendChild(elementFactory('div', {id: `name-${index}`, class: 'name'}));
        document.querySelector(`#name-${index}`).appendChild(elementFactory('div', {id: `grid-${index}`, index: `${index}`, class: 'grid'}));
        document.querySelector(`#grid-${index}`).appendChild(elementFactory('img', {src: '../src/grid.svg', index: `${index}`}));
        document.querySelector(`#name-${index}`).appendChild(elementFactory('p', 'none', `${text}`));
        document.querySelector(`#project-${projects[index]}`).appendChild(elementFactory('div', {id: `trash-${index}`, class: 'trash'}));
        document.querySelector(`#trash-${index}`).appendChild(elementFactory('img', {src: '../src/trash.svg', index: `${index}`}));

        // make a new category title

        newCatContainer.appendChild(elementFactory('h2', {id: `cat-project-${projects[index]}`}, `${text}`));
        document.getElementById(`cat-project-${projects[index]}`).style.display = 'none';
    })
}

projectDom();

export { projectDom, getProjects, addProjectToStorage }