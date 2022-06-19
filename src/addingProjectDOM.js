import { elementFactory } from "./addingtaskDOM"
import { iconClass } from "./icons"
import { addToStorage } from "./taskobjectfunctions";



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

function clearProjectDom() {
    const container = document.querySelector('.project-select');
    const num = document.getElementById('project-select').childElementCount;
    for (let i = 0; i < num; i++) {
        let child = container.lastElementChild;
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    }
}

function deleteProjectDom(index) {
    projects.splice(index, 1);
    localStorage.clear();
    addToStorage();
    addProjectToStorage();
}

function projectDom() {
    const container = document.querySelector('.project-select');
    const newCatContainer = document.querySelector('.all');
    

    projects.forEach((item, index) => {
        const text = projects[index].replaceAll('-', ' ');
        container.appendChild(elementFactory('div', {class: 'new-project', id: `project-${projects[index]}`, data: 'organize', index: `${index}`, type: 'project'}));
        document.querySelector(`#project-${projects[index]}`).appendChild(elementFactory('div', {id: `name-${index}`, class: 'name'}));
        document.querySelector(`#name-${index}`).appendChild(elementFactory('div', {id: `grid-${index}`, index: `${index}`, class: 'grid'}));
        document.querySelector(`#grid-${index}`).appendChild(elementFactory('img', {class: 'white-png', src: '../src/grid-white.png', index: `${index}`}));
        document.querySelector(`#name-${index}`).appendChild(elementFactory('p', 'none', `${text}`));
        document.querySelector(`#project-${projects[index]}`).appendChild(elementFactory('div', {id: `project-trash-${index}`, class: 'project-trash'}));
        document.querySelector(`#project-trash-${index}`).appendChild(elementFactory('img', {class: 'white-png', src: '../src/trash-white.png', index: `${index}`}));

        // make a new category title

        newCatContainer.appendChild(elementFactory('h2', {id: `cat-project-${projects[index]}`, input: 'dynamic-project', index: `${index}`}, `${text}`));
        document.getElementById(`cat-project-${projects[index]}`).style.display = 'none';
    })
}

projectDom();

export { projectDom, getProjects, addProjectToStorage, clearProjectDom }