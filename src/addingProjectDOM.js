import { arr, elementFactory, taskDOM } from "./addingtaskDOM"
import { focusOnStart, iconClass } from "./icons"
import { addToStorage, deleteObject } from "./taskobjectfunctions";
import { taskIconFunctions } from "./editanddeleteDOM";



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

function clearCatDom() {
    const container = document.querySelector('.new-cats');
    const num = document.getElementById('new-cats').childElementCount;
    for (let i = 0; i < num; i++) {
        let child = container.lastElementChild;
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    }
}

function deleteProjectDom(index, id) {
    const taskDomUpdate = taskIconFunctions();
    const parent = document.getElementById(id).parentElement;
    const parentid = document.getElementById(id).parentElement.id;
    const name = parent.getAttribute('name');

    // delete the category as well

    const getRid = document.getElementById(`cat-project-${projects[index]}`);
    getRid.remove();

    for (let i = 0; i < iconClass.length; i++) {
        if (iconClass[i].id === parentid) {
            iconClass.splice(i, 1);
            break;
        }
    }

    console.log(name)
    
    // delete all tasks associated with project
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].project === name) {
            taskDomUpdate.trash(i);
        }
    }

    function findAndDeleteProject() {
        let count = 0;
        let index = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].project = name) {
                count ++;
                index.push(i);
            }
        }
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < index.length; j++) {
                deleteObject(j);
            }
        }
    }
    
    projects.splice(index, 1);
    clearProjectDom();
    clearCatDom();
    findAndDeleteProject();
    localStorage.clear();
    addToStorage();
    addProjectToStorage();
    projectDom();
    focusOnStart();
}

function projectDom() {
    const container = document.querySelector('.project-select');
    const newCatContainer = document.querySelector('.new-cats');
    

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

export { projectDom, getProjects, addProjectToStorage, clearProjectDom, deleteProjectDom, clearCatDom }