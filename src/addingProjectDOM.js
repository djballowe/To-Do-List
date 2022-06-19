import { arr, elementFactory } from "./addingtaskDOM"
import { iconClass } from "./icons"
import { addToStorage, deleteObject } from "./taskobjectfunctions";



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

function deleteProjectDom(index, id) {
    const parent = document.getElementById(id).parentElement;
    const parentid = document.getElementById(id).parentElement.id;
    const name = parent.getAttribute('name');


    for (let i = 0; i < arr.length; i++) {
        if (arr[i].project === name) {
            deleteObject(i);
        } 
    }

    console.log(name);

    // delete the category as well

    const getRid = document.getElementById(`cat-project-${projects[index]}`);
    getRid.remove();

    const catLocation = iconClass.indexOf(parentid);
    if (catLocation > -1) {
        console.log('deleted')
        iconClass.splice(catLocation, 1);
    }
    projects.splice(index, 1);
    clearProjectDom();
    localStorage.clear();
    addToStorage();
    addProjectToStorage();
    projectDom();
}

function projectDom() {
    const container = document.querySelector('.project-select');
    const newCatContainer = document.querySelector('.all');
    

    projects.forEach((item, index) => {
        const text = projects[index].replaceAll('-', ' ');
        container.appendChild(elementFactory('div', {class: 'new-project', id: `project-${projects[index]}`, data: 'organize', index: `${index}`, type: 'project', name: `${projects[index]}`}));
        document.querySelector(`#project-${projects[index]}`).appendChild(elementFactory('div', {id: `name-${index}`, class: 'name'}));
        document.querySelector(`#name-${index}`).appendChild(elementFactory('div', {id: `grid-${index}`, index: `${index}`, class: 'grid'}));
        document.querySelector(`#grid-${index}`).appendChild(elementFactory('img', {class: 'white-png', src: '../src/grid-white.png', index: `${index}`}));
        document.querySelector(`#name-${index}`).appendChild(elementFactory('p', 'none', `${text}`));
        document.querySelector(`#project-${projects[index]}`).appendChild(elementFactory('div', {id: `project-trash-${index}`, class: 'project-trash', data: 'project-trash', index: `${index}`}));
        document.querySelector(`#project-trash-${index}`).appendChild(elementFactory('img', {id: `project-trash-${index}`, class: 'white-png', src: '../src/trash-white.png', index: `${index}`, data: 'project-trash'}));

        // make a new category title

        newCatContainer.appendChild(elementFactory('h2', {id: `cat-project-${projects[index]}`, input: 'dynamic-project', index: `${index}`}, `${text}`));
        document.getElementById(`cat-project-${projects[index]}`).style.display = 'none';
    })
}

projectDom();

export { projectDom, getProjects, addProjectToStorage, clearProjectDom, deleteProjectDom }