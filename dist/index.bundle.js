/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addingProjectDOM.js":
/*!*********************************!*\
  !*** ./src/addingProjectDOM.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "projectDom": () => (/* binding */ projectDom)
/* harmony export */ });
/* harmony import */ var _addingtaskDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addingtaskDOM */ "./src/addingtaskDOM.js");




let projects = [];


function getProjects() {
    projects.push(document.getElementById('project-input').value);
}

function projectDom() {
    const build = (0,_addingtaskDOM__WEBPACK_IMPORTED_MODULE_0__.taskDOM)();
    let index = projects.length - 1;
    const container = document.querySelector('.project-select');
    const title = document.getElementById('project-input');

    container.appendChild(build.elementFactory('div', {class: 'new-project', id: `project-${index}`}));
    document.querySelector(`#project-${index}`).appendChild(build.elementFactory('div', {id: `name-${index}`, class: 'name'}));
    document.querySelector(`#name-${index}`).appendChild(build.elementFactory('div', {id: `grid-${index}`, index: `${index}`, class: 'grid'}));
    document.querySelector(`#grid-${index}`).appendChild(build.elementFactory('img', {src: '../src/grid.svg', index: `${index}`}));
    document.querySelector(`#name-${index}`).appendChild(build.elementFactory('p', 'none', `${title.value}`));
    document.querySelector(`#project-${index}`).appendChild(build.elementFactory('div', {id: `trash-${index}`, class: 'trash'}));
    document.querySelector(`#trash-${index}`).appendChild(build.elementFactory('img', {src: '../src/trash.svg', index: `${index}`}));


}



/***/ }),

/***/ "./src/addingtaskDOM.js":
/*!******************************!*\
  !*** ./src/addingtaskDOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "elementFactory": () => (/* binding */ elementFactory),
/* harmony export */   "taskDOM": () => (/* binding */ taskDOM)
/* harmony export */ });
/* harmony import */ var _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskobjectfunctions */ "./src/taskobjectfunctions.js");


// adding tasks to the dom
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

const clear = () => {
    const container = document.querySelector('.tasks');
    const num = document.getElementById('tasks').childElementCount;
    for (let i = 0; i < num; i++) {
        let child = container.lastElementChild;
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    }
}

function taskDOM() {
    _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr.forEach((item, index) =>  {
            document.querySelector('.tasks').appendChild(elementFactory('div', {class: 'new-task', id: `task-${index}`, index: `${index}`}));
            document.querySelector(`#task-${index}`).appendChild(elementFactory('div', {class: 'left-side', id: `left-${index}`}));
            document.querySelector(`#task-${index}`).appendChild(elementFactory('div', {class: 'info', id: `info-${index}`}))

            const left = document.querySelector(`#left-${index}`);
            left.appendChild(elementFactory('button', {type: 'button', id: `check-${index}`, data: 'non-completed', index: `${index}`}));
            left.appendChild(elementFactory('div', {class: 'project-text', id: `project-${index}`}))

            document.querySelector(`#project-${index}`).appendChild(elementFactory('p', 'none', `${_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr[index].title}`));
            document.querySelector(`#project-${index}`).appendChild(elementFactory('p', 'none', `${_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr[index].description}`));
            
            const info = document.querySelector(`#info-${index}`);
            info.appendChild(elementFactory('p', 'none', `${_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr[index].date}`));
            info.appendChild(elementFactory('div', {id: `star-${index}`, class: 'displayed', data: 'not-important'}));
            document.querySelector(`#star-${index}`).appendChild(elementFactory('img', {src: "../src/star.svg", index: `${index}`, data: 'not-important'}));
            info.appendChild(elementFactory('div', {id: `important-${index}`, class: 'not-displayed', data: 'important'}));
            document.querySelector(`#important-${index}`).appendChild(elementFactory('img', {src: "../src/star-check.svg", index: `${index}`, data: 'important'}));
            info.appendChild(elementFactory('div', {class: 'edit', index: `${index}`, data: 'edit', id: `edit-${index}`}));
            document.querySelector(`#edit-${index}`).appendChild(elementFactory('img', {src: '../src/pencil.svg', index: `${index}`, data: 'edit' }))
            info.appendChild(elementFactory('div', {class: 'trash', index: `${index}`, data: 'trash', id: `trash-${index}`}));
            document.querySelector(`#trash-${index}`).appendChild(elementFactory('img', {src: '../src/trash.svg', index: `${index}`, data: 'trash' }))

    });
}

taskDOM();



/***/ }),

/***/ "./src/completed.js":
/*!**************************!*\
  !*** ./src/completed.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "completed": () => (/* binding */ completed)
/* harmony export */ });
/* harmony import */ var _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskobjectfunctions */ "./src/taskobjectfunctions.js");


let doneTask = [];

function completed() {
    const changeCheck = (id, index) => {
        const button = document.getElementById(`${id}`);
        const theTask = document.getElementById(`task-${index}`);

        if (button.classList.contains('check')) {
            button.classList.toggle('check');
            theTask.classList.toggle('completed-task');
            button.removeAttribute('data');
            button.setAttribute('data', 'non-completed');
        } else {
            button.classList.add('check');
            theTask.classList.add('completed-task');
            button.removeAttribute('data');
            button.setAttribute('data', 'completed');
            
        }   
    }

    const completedArray = (index) => {
        doneTask.push(_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr[index]);
        _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr.splice(index, 1);
        console.log(_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr);
        console.log(doneTask);
    }

    const uncompletedArray = (index) => {
        _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr.push(doneTask[index]);
        doneTask.splice(index, 1);
        console.log(_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr);
        console.log(doneTask);
    }

    return {
        changeCheck,
        completedArray,
        uncompletedArray
    }
}



/***/ }),

/***/ "./src/editanddeleteDOM.js":
/*!*********************************!*\
  !*** ./src/editanddeleteDOM.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskIconFunctions": () => (/* binding */ taskIconFunctions)
/* harmony export */ });
/* harmony import */ var _taskPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskPopUp */ "./src/taskPopUp.js");
/* harmony import */ var _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskobjectfunctions */ "./src/taskobjectfunctions.js");



const taskPop = (0,_taskPopUp__WEBPACK_IMPORTED_MODULE_0__.addTaskProjects)();

function taskIconFunctions() {
    const trash = (index) => {
        const target = document.querySelector(`#task-${index}`);
        const container = document.getElementById(`task-${index}`);
        const num = document.getElementById(`task-${index}`).childElementCount;
        for (let i = 0; i < num; i++) {
            let child = target.lastElementChild;
            while (child) {
                target.removeChild(child);
                child = target.lastElementChild;
            }
        }
        container.remove();
    }
    
    const edit = (index) => {
        const title = document.getElementById('title');
        const description = document.getElementById('description');
        const date = document.getElementById('date');
        
        trash(index);
        (0,_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_1__.deleteObject)(index);
        
        title.value = `${_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_1__.arr[index].title}`
        description.value = `${_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_1__.arr[index].description}`
        date.value = `${_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_1__.arr[index].date}`
        taskPop.task();

    }
    
    return {
        trash,
        edit
    }
}



/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusEffects": () => (/* binding */ focusEffects)
/* harmony export */ });
// switching the active highlights

let iconClass = [{
    id: 'all',
    class: 'icons-active'
}, {
    id: 'important',
    class: 'icons'
}, {
    id: 'today',
    class: 'icons'
}, {
    id: 'upcoming',
    class: 'icons'
}];

function focusEffects(click) {
    const icon = document.getElementById(click);
    const active = iconClass.find(e => e.class === 'icons-active');
    const nowActive = iconClass.find(e => e.id === `${click}`);
    const highlight = document.getElementById(`${active.id}`);
    
    icon.classList.add('icons-active');
    highlight.classList.toggle('icons-active');
    active.class = 'icons';
    nowActive.class = 'icons-active';

    // switch the category visually along with the focus effect
    
    const currentCat = document.getElementById(`cat-${nowActive.id}`);
    const pCat = document.getElementById(`cat-${active.id}`)
    
    currentCat.style.display = 'block';
    pCat.style.display = 'none';
    
}



/***/ }),

/***/ "./src/important.js":
/*!**************************!*\
  !*** ./src/important.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "important": () => (/* binding */ important)
/* harmony export */ });
/* harmony import */ var _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskobjectfunctions */ "./src/taskobjectfunctions.js");


function important() {
    const starDom = (index, data) => {
        const notImportant = document.getElementById(`star-${index}`);
        const isImportant = document.getElementById(`important-${index}`);

        if (data === 'not-important') {
            isImportant.classList.add('displayed');
            isImportant.classList.toggle('not-displayed');
            notImportant.classList.add('not-displayed');
            notImportant.classList.toggle('displayed');
        } else if (data === 'important') {
            notImportant.classList.add('displayed');
            notImportant.classList.toggle('not-displayed');
            isImportant.classList.add('not-displayed');
            isImportant.classList.toggle('displayed');
        }
    }

    const changePrio = (index, data) => {
        if (data === 'not-important') {
            _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr[index].importance = true;
            console.log('should be true')
        } else if (data === 'important') {
            _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr[index].importance = false;
            console.log('should be false')
        }
        console.log(_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr);
    }

    return {
        starDom,
        changePrio
    }
}



/***/ }),

/***/ "./src/taskPopUp.js":
/*!**************************!*\
  !*** ./src/taskPopUp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskProjects": () => (/* binding */ addTaskProjects)
/* harmony export */ });


//Dom pop ups for adding projects and tasks

const addTaskProjects = () => {
    const form = document.getElementById('new');
    const projectForm = document.getElementById('project-popup');

    
    const task = () => {
        form.style.display = 'flex';
    }

    const cancel = () => {
        const title = document.getElementById('title');
        const description = document.getElementById('description');
        const date = document.getElementById('date');
        const project = document.getElementById('project-input');
        
        console.log(title);
        console.log(description);
        console.log(date);
        console.log(project);

        form.style.display = 'none';
        projectForm.style.display = 'none';

        title.value = '';
        description.value = '';
        date.value = '';
        project.value = '';
    }

    const project = () => {
        projectForm.style.display = 'block';
    }
    
    return {
        task,
        cancel,
        project
    }
}



/***/ }),

/***/ "./src/taskobjectfunctions.js":
/*!************************************!*\
  !*** ./src/taskobjectfunctions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectAttribute": () => (/* binding */ addProjectAttribute),
/* harmony export */   "arr": () => (/* binding */ arr),
/* harmony export */   "deleteObject": () => (/* binding */ deleteObject),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
let arr = JSON.parse(localStorage.getItem('tasks')) || [];

function taskCreator(task, about, day, index) {
    return {
        title: task,
        description: about,
        date: day,
        importance: false,
    }
}

function getData(index) {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    
    arr.push(taskCreator(title, description, date));
    
    localStorage.setItem(`tasks${index}`, JSON.stringify(arr));

    console.log(arr);
}

function deleteObject(index) {
    arr.splice(index, 1);
}

function addProjectAttribute(title, index) {
    arr[index].project = title;
}





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskPopUp */ "./src/taskPopUp.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/icons.js");
/* harmony import */ var _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskobjectfunctions */ "./src/taskobjectfunctions.js");
/* harmony import */ var _addingtaskDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addingtaskDOM */ "./src/addingtaskDOM.js");
/* harmony import */ var _completed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./completed */ "./src/completed.js");
/* harmony import */ var _important__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./important */ "./src/important.js");
/* harmony import */ var _editanddeleteDOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editanddeleteDOM */ "./src/editanddeleteDOM.js");
/* harmony import */ var _addingProjectDOM__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addingProjectDOM */ "./src/addingProjectDOM.js");











const editDelete = (0,_editanddeleteDOM__WEBPACK_IMPORTED_MODULE_6__.taskIconFunctions)();
const priority = (0,_important__WEBPACK_IMPORTED_MODULE_5__.important)();
const check = (0,_completed__WEBPACK_IMPORTED_MODULE_4__.completed)();
const task = (0,_taskPopUp__WEBPACK_IMPORTED_MODULE_0__.addTaskProjects)();


// all button and event listeners

function deleteStorage() {
    localStorage.removeItem('tasks');
}

document.querySelector('body').addEventListener('click', function(e) {
    const id = e.target.id;
    const data = e.target.getAttribute('data');
    const index = e.target.getAttribute('index');

    console.log(data);

    switch (id) {
        case 'add-task':
            task.task();
            break;
        case 'cancel':
            task.cancel();
            break;
        case 'add':
            (0,_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_2__.getData)(index);
            task.cancel();
            (0,_addingtaskDOM__WEBPACK_IMPORTED_MODULE_3__.clear)();
            (0,_addingtaskDOM__WEBPACK_IMPORTED_MODULE_3__.taskDOM)();
            break;
        case 'project-add':
            task.project();
            break;
        case 'project-cancel':
            task.cancel();
            break;
        case 'add-project':
            (0,_addingProjectDOM__WEBPACK_IMPORTED_MODULE_7__.getProjects)();
            (0,_addingProjectDOM__WEBPACK_IMPORTED_MODULE_7__.projectDom)();
            task.cancel();
            break;
        case 'delete-local':
            deleteStorage();
            break;
        
    }

    switch (data) {
        case 'organize':
            (0,_icons__WEBPACK_IMPORTED_MODULE_1__.focusEffects)(id);
            break;
        case 'non-completed':
            check.changeCheck(id, index);
            check.completedArray(index);
            break;
        case 'completed':
            check.changeCheck(id, index);
            check.uncompletedArray(index);
            break;
        case 'not-important':
            priority.starDom(index, data);
            priority.changePrio(index, data);
            break;
        case 'important':
            priority.starDom(index, data);
            priority.changePrio(index, data);
            break;
        case 'trash':
            editDelete.trash(index);
            (0,_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_2__.deleteObject)(index);
            break;
        case 'edit':
            editDelete.edit(index);
            break;

    }
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvYWRkaW5nUHJvamVjdERPTS5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2FkZGluZ3Rhc2tET00uanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9jb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9lZGl0YW5kZGVsZXRlRE9NLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9pbXBvcnRhbnQuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy90YXNrUG9wVXAuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy90YXNrb2JqZWN0ZnVuY3Rpb25zLmpzIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tET00gfSBmcm9tIFwiLi9hZGRpbmd0YXNrRE9NXCJcblxuXG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIHByb2plY3RzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaW5wdXQnKS52YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3REb20oKSB7XG4gICAgY29uc3QgYnVpbGQgPSB0YXNrRE9NKCk7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdHMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zZWxlY3QnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWlucHV0Jyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGQuZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ25ldy1wcm9qZWN0JywgaWQ6IGBwcm9qZWN0LSR7aW5kZXh9YH0pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7aWQ6IGBuYW1lLSR7aW5kZXh9YCwgY2xhc3M6ICduYW1lJ30pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbmFtZS0ke2luZGV4fWApLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7aWQ6IGBncmlkLSR7aW5kZXh9YCwgaW5kZXg6IGAke2luZGV4fWAsIGNsYXNzOiAnZ3JpZCd9KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2dyaWQtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChidWlsZC5lbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogJy4uL3NyYy9ncmlkLnN2ZycsIGluZGV4OiBgJHtpbmRleH1gfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNuYW1lLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoYnVpbGQuZWxlbWVudEZhY3RvcnkoJ3AnLCAnbm9uZScsIGAke3RpdGxlLnZhbHVlfWApKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7aWQ6IGB0cmFzaC0ke2luZGV4fWAsIGNsYXNzOiAndHJhc2gnfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0cmFzaC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdpbWcnLCB7c3JjOiAnLi4vc3JjL3RyYXNoLnN2ZycsIGluZGV4OiBgJHtpbmRleH1gfSkpO1xuXG5cbn1cblxuZXhwb3J0IHsgcHJvamVjdERvbSwgZ2V0UHJvamVjdHMgfSIsImltcG9ydCB7IGFyciB9IGZyb20gXCIuL3Rhc2tvYmplY3RmdW5jdGlvbnNcIlxuXG4vLyBhZGRpbmcgdGFza3MgdG8gdGhlIGRvbVxuY29uc3QgZWxlbWVudEZhY3RvcnkgPSAodHlwZSwgYXR0cmlidXRlcywgdGV4dCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgY3JlYXRlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpZiAoYXR0cmlidXRlcyAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBjcmVhdGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlO1xufVxuXG5jb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICBjb25zdCBudW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKS5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZCA9IGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0YXNrRE9NKCkge1xuICAgIGFyci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICduZXctdGFzaycsIGlkOiBgdGFzay0ke2luZGV4fWAsIGluZGV4OiBgJHtpbmRleH1gfSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnbGVmdC1zaWRlJywgaWQ6IGBsZWZ0LSR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2luZm8nLCBpZDogYGluZm8tJHtpbmRleH1gfSkpXG5cbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGVmdC0ke2luZGV4fWApO1xuICAgICAgICAgICAgbGVmdC5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnYnV0dG9uJywge3R5cGU6ICdidXR0b24nLCBpZDogYGNoZWNrLSR7aW5kZXh9YCwgZGF0YTogJ25vbi1jb21wbGV0ZWQnLCBpbmRleDogYCR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ3Byb2plY3QtdGV4dCcsIGlkOiBgcHJvamVjdC0ke2luZGV4fWB9KSlcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7YXJyW2luZGV4XS50aXRsZX1gKSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHthcnJbaW5kZXhdLmRlc2NyaXB0aW9ufWApKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbmZvLSR7aW5kZXh9YCk7XG4gICAgICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHthcnJbaW5kZXhdLmRhdGV9YCkpO1xuICAgICAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiBgc3Rhci0ke2luZGV4fWAsIGNsYXNzOiAnZGlzcGxheWVkJywgZGF0YTogJ25vdC1pbXBvcnRhbnQnfSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N0YXItJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogXCIuLi9zcmMvc3Rhci5zdmdcIiwgaW5kZXg6IGAke2luZGV4fWAsIGRhdGE6ICdub3QtaW1wb3J0YW50J30pKTtcbiAgICAgICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogYGltcG9ydGFudC0ke2luZGV4fWAsIGNsYXNzOiAnbm90LWRpc3BsYXllZCcsIGRhdGE6ICdpbXBvcnRhbnQnfSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltcG9ydGFudC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdpbWcnLCB7c3JjOiBcIi4uL3NyYy9zdGFyLWNoZWNrLnN2Z1wiLCBpbmRleDogYCR7aW5kZXh9YCwgZGF0YTogJ2ltcG9ydGFudCd9KSk7XG4gICAgICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdlZGl0JywgaW5kZXg6IGAke2luZGV4fWAsIGRhdGE6ICdlZGl0JywgaWQ6IGBlZGl0LSR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0LSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2ltZycsIHtzcmM6ICcuLi9zcmMvcGVuY2lsLnN2ZycsIGluZGV4OiBgJHtpbmRleH1gLCBkYXRhOiAnZWRpdCcgfSkpXG4gICAgICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICd0cmFzaCcsIGluZGV4OiBgJHtpbmRleH1gLCBkYXRhOiAndHJhc2gnLCBpZDogYHRyYXNoLSR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0cmFzaC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdpbWcnLCB7c3JjOiAnLi4vc3JjL3RyYXNoLnN2ZycsIGluZGV4OiBgJHtpbmRleH1gLCBkYXRhOiAndHJhc2gnIH0pKVxuXG4gICAgfSk7XG59XG5cbnRhc2tET00oKTtcblxuZXhwb3J0IHsgdGFza0RPTSwgY2xlYXIsIGVsZW1lbnRGYWN0b3J5IH0iLCJpbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcblxubGV0IGRvbmVUYXNrID0gW107XG5cbmZ1bmN0aW9uIGNvbXBsZXRlZCgpIHtcbiAgICBjb25zdCBjaGFuZ2VDaGVjayA9IChpZCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XG4gICAgICAgIGNvbnN0IHRoZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFzay0ke2luZGV4fWApO1xuXG4gICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2snKTtcbiAgICAgICAgICAgIHRoZVRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkLXRhc2snKTtcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCAnbm9uLWNvbXBsZXRlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgICAgICAgICB0aGVUYXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrJyk7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhJywgJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZWRBcnJheSA9IChpbmRleCkgPT4ge1xuICAgICAgICBkb25lVGFzay5wdXNoKGFycltpbmRleF0pO1xuICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coYXJyKTtcbiAgICAgICAgY29uc29sZS5sb2coZG9uZVRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IHVuY29tcGxldGVkQXJyYXkgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgYXJyLnB1c2goZG9uZVRhc2tbaW5kZXhdKTtcbiAgICAgICAgZG9uZVRhc2suc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coYXJyKTtcbiAgICAgICAgY29uc29sZS5sb2coZG9uZVRhc2spO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNoYW5nZUNoZWNrLFxuICAgICAgICBjb21wbGV0ZWRBcnJheSxcbiAgICAgICAgdW5jb21wbGV0ZWRBcnJheVxuICAgIH1cbn1cblxuZXhwb3J0IHsgY29tcGxldGVkIH0iLCJpbXBvcnQgeyBhZGRUYXNrUHJvamVjdHMgfSBmcm9tIFwiLi90YXNrUG9wVXBcIlxuaW1wb3J0IHsgYXJyLCBkZWxldGVPYmplY3QgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcblxuY29uc3QgdGFza1BvcCA9IGFkZFRhc2tQcm9qZWN0cygpO1xuXG5mdW5jdGlvbiB0YXNrSWNvbkZ1bmN0aW9ucygpIHtcbiAgICBjb25zdCB0cmFzaCA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2luZGV4fWApO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFzay0ke2luZGV4fWApO1xuICAgICAgICBjb25zdCBudW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFzay0ke2luZGV4fWApLmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0YXJnZXQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgY2hpbGQgPSB0YXJnZXQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGVkaXQgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgICAgIFxuICAgICAgICB0cmFzaChpbmRleCk7XG4gICAgICAgIGRlbGV0ZU9iamVjdChpbmRleCk7XG4gICAgICAgIFxuICAgICAgICB0aXRsZS52YWx1ZSA9IGAke2FycltpbmRleF0udGl0bGV9YFxuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IGAke2FycltpbmRleF0uZGVzY3JpcHRpb259YFxuICAgICAgICBkYXRlLnZhbHVlID0gYCR7YXJyW2luZGV4XS5kYXRlfWBcbiAgICAgICAgdGFza1BvcC50YXNrKCk7XG5cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHJhc2gsXG4gICAgICAgIGVkaXRcbiAgICB9XG59XG5cbmV4cG9ydCB7IHRhc2tJY29uRnVuY3Rpb25zIH0iLCIvLyBzd2l0Y2hpbmcgdGhlIGFjdGl2ZSBoaWdobGlnaHRzXG5cbmxldCBpY29uQ2xhc3MgPSBbe1xuICAgIGlkOiAnYWxsJyxcbiAgICBjbGFzczogJ2ljb25zLWFjdGl2ZSdcbn0sIHtcbiAgICBpZDogJ2ltcG9ydGFudCcsXG4gICAgY2xhc3M6ICdpY29ucydcbn0sIHtcbiAgICBpZDogJ3RvZGF5JyxcbiAgICBjbGFzczogJ2ljb25zJ1xufSwge1xuICAgIGlkOiAndXBjb21pbmcnLFxuICAgIGNsYXNzOiAnaWNvbnMnXG59XTtcblxuZnVuY3Rpb24gZm9jdXNFZmZlY3RzKGNsaWNrKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNsaWNrKTtcbiAgICBjb25zdCBhY3RpdmUgPSBpY29uQ2xhc3MuZmluZChlID0+IGUuY2xhc3MgPT09ICdpY29ucy1hY3RpdmUnKTtcbiAgICBjb25zdCBub3dBY3RpdmUgPSBpY29uQ2xhc3MuZmluZChlID0+IGUuaWQgPT09IGAke2NsaWNrfWApO1xuICAgIGNvbnN0IGhpZ2hsaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FjdGl2ZS5pZH1gKTtcbiAgICBcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zLWFjdGl2ZScpO1xuICAgIGhpZ2hsaWdodC5jbGFzc0xpc3QudG9nZ2xlKCdpY29ucy1hY3RpdmUnKTtcbiAgICBhY3RpdmUuY2xhc3MgPSAnaWNvbnMnO1xuICAgIG5vd0FjdGl2ZS5jbGFzcyA9ICdpY29ucy1hY3RpdmUnO1xuXG4gICAgLy8gc3dpdGNoIHRoZSBjYXRlZ29yeSB2aXN1YWxseSBhbG9uZyB3aXRoIHRoZSBmb2N1cyBlZmZlY3RcbiAgICBcbiAgICBjb25zdCBjdXJyZW50Q2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhdC0ke25vd0FjdGl2ZS5pZH1gKTtcbiAgICBjb25zdCBwQ2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhdC0ke2FjdGl2ZS5pZH1gKVxuICAgIFxuICAgIGN1cnJlbnRDYXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgcENhdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIFxufVxuXG5leHBvcnQgeyBmb2N1c0VmZmVjdHMgfTsiLCJpbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcblxuZnVuY3Rpb24gaW1wb3J0YW50KCkge1xuICAgIGNvbnN0IHN0YXJEb20gPSAoaW5kZXgsIGRhdGEpID0+IHtcbiAgICAgICAgY29uc3Qgbm90SW1wb3J0YW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0YXItJHtpbmRleH1gKTtcbiAgICAgICAgY29uc3QgaXNJbXBvcnRhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaW1wb3J0YW50LSR7aW5kZXh9YCk7XG5cbiAgICAgICAgaWYgKGRhdGEgPT09ICdub3QtaW1wb3J0YW50Jykge1xuICAgICAgICAgICAgaXNJbXBvcnRhbnQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkJyk7XG4gICAgICAgICAgICBpc0ltcG9ydGFudC5jbGFzc0xpc3QudG9nZ2xlKCdub3QtZGlzcGxheWVkJyk7XG4gICAgICAgICAgICBub3RJbXBvcnRhbnQuY2xhc3NMaXN0LmFkZCgnbm90LWRpc3BsYXllZCcpO1xuICAgICAgICAgICAgbm90SW1wb3J0YW50LmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXllZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPT09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICBub3RJbXBvcnRhbnQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkJyk7XG4gICAgICAgICAgICBub3RJbXBvcnRhbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbm90LWRpc3BsYXllZCcpO1xuICAgICAgICAgICAgaXNJbXBvcnRhbnQuY2xhc3NMaXN0LmFkZCgnbm90LWRpc3BsYXllZCcpO1xuICAgICAgICAgICAgaXNJbXBvcnRhbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheWVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VQcmlvID0gKGluZGV4LCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhID09PSAnbm90LWltcG9ydGFudCcpIHtcbiAgICAgICAgICAgIGFycltpbmRleF0uaW1wb3J0YW5jZSA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkIGJlIHRydWUnKVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPT09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICBhcnJbaW5kZXhdLmltcG9ydGFuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgYmUgZmFsc2UnKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhckRvbSxcbiAgICAgICAgY2hhbmdlUHJpb1xuICAgIH1cbn1cblxuZXhwb3J0IHsgaW1wb3J0YW50IH0iLCJcblxuLy9Eb20gcG9wIHVwcyBmb3IgYWRkaW5nIHByb2plY3RzIGFuZCB0YXNrc1xuXG5jb25zdCBhZGRUYXNrUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXcnKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXBvcHVwJyk7XG5cbiAgICBcbiAgICBjb25zdCB0YXNrID0gKCkgPT4ge1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWlucHV0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuXG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlLnZhbHVlID0gJyc7XG4gICAgICAgIHByb2plY3QudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFzayxcbiAgICAgICAgY2FuY2VsLFxuICAgICAgICBwcm9qZWN0XG4gICAgfVxufVxuXG5leHBvcnQgeyBhZGRUYXNrUHJvamVjdHMgfTsiLCJleHBvcnQgbGV0IGFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuXG5mdW5jdGlvbiB0YXNrQ3JlYXRvcih0YXNrLCBhYm91dCwgZGF5LCBpbmRleCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0YXNrLFxuICAgICAgICBkZXNjcmlwdGlvbjogYWJvdXQsXG4gICAgICAgIGRhdGU6IGRheSxcbiAgICAgICAgaW1wb3J0YW5jZTogZmFsc2UsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXRhKGluZGV4KSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgXG4gICAgYXJyLnB1c2godGFza0NyZWF0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSk7XG4gICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRhc2tzJHtpbmRleH1gLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcblxuICAgIGNvbnNvbGUubG9nKGFycik7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZU9iamVjdChpbmRleCkge1xuICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0QXR0cmlidXRlKHRpdGxlLCBpbmRleCkge1xuICAgIGFycltpbmRleF0ucHJvamVjdCA9IHRpdGxlO1xufVxuXG5cblxuZXhwb3J0IHsgZ2V0RGF0YSwgZGVsZXRlT2JqZWN0LCBhZGRQcm9qZWN0QXR0cmlidXRlIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZFRhc2tQcm9qZWN0cyB9IGZyb20gXCIuL3Rhc2tQb3BVcFwiXG5pbXBvcnQgeyBmb2N1c0VmZmVjdHMgfSBmcm9tIFwiLi9pY29uc1wiXG5pbXBvcnQgeyBkZWxldGVPYmplY3QsIGdldERhdGEgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcbmltcG9ydCB7IHRhc2tET00sIGNsZWFyIH0gZnJvbSBcIi4vYWRkaW5ndGFza0RPTVwiXG5pbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcbmltcG9ydCB7IGNvbXBsZXRlZCB9IGZyb20gXCIuL2NvbXBsZXRlZFwiXG5pbXBvcnQgeyBpbXBvcnRhbnQgfSBmcm9tIFwiLi9pbXBvcnRhbnRcIlxuaW1wb3J0IHsgdGFza0ljb25GdW5jdGlvbnMgfSBmcm9tIFwiLi9lZGl0YW5kZGVsZXRlRE9NXCJcbmltcG9ydCB7IHByb2plY3REb20sIGdldFByb2plY3RzIH0gZnJvbSBcIi4vYWRkaW5nUHJvamVjdERPTVwiXG5cblxuY29uc3QgZWRpdERlbGV0ZSA9IHRhc2tJY29uRnVuY3Rpb25zKCk7XG5jb25zdCBwcmlvcml0eSA9IGltcG9ydGFudCgpO1xuY29uc3QgY2hlY2sgPSBjb21wbGV0ZWQoKTtcbmNvbnN0IHRhc2sgPSBhZGRUYXNrUHJvamVjdHMoKTtcblxuXG4vLyBhbGwgYnV0dG9uIGFuZCBldmVudCBsaXN0ZW5lcnNcblxuZnVuY3Rpb24gZGVsZXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGFza3MnKTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQ7XG4gICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xuXG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgIGNhc2UgJ2FkZC10YXNrJzpcbiAgICAgICAgICAgIHRhc2sudGFzaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NhbmNlbCc6XG4gICAgICAgICAgICB0YXNrLmNhbmNlbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgICAgICBnZXREYXRhKGluZGV4KTtcbiAgICAgICAgICAgIHRhc2suY2FuY2VsKCk7XG4gICAgICAgICAgICBjbGVhcigpO1xuICAgICAgICAgICAgdGFza0RPTSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Byb2plY3QtYWRkJzpcbiAgICAgICAgICAgIHRhc2sucHJvamVjdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Byb2plY3QtY2FuY2VsJzpcbiAgICAgICAgICAgIHRhc2suY2FuY2VsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWRkLXByb2plY3QnOlxuICAgICAgICAgICAgZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgICAgIHByb2plY3REb20oKTtcbiAgICAgICAgICAgIHRhc2suY2FuY2VsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGVsZXRlLWxvY2FsJzpcbiAgICAgICAgICAgIGRlbGV0ZVN0b3JhZ2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGRhdGEpIHtcbiAgICAgICAgY2FzZSAnb3JnYW5pemUnOlxuICAgICAgICAgICAgZm9jdXNFZmZlY3RzKGlkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdub24tY29tcGxldGVkJzpcbiAgICAgICAgICAgIGNoZWNrLmNoYW5nZUNoZWNrKGlkLCBpbmRleCk7XG4gICAgICAgICAgICBjaGVjay5jb21wbGV0ZWRBcnJheShpbmRleCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29tcGxldGVkJzpcbiAgICAgICAgICAgIGNoZWNrLmNoYW5nZUNoZWNrKGlkLCBpbmRleCk7XG4gICAgICAgICAgICBjaGVjay51bmNvbXBsZXRlZEFycmF5KGluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdub3QtaW1wb3J0YW50JzpcbiAgICAgICAgICAgIHByaW9yaXR5LnN0YXJEb20oaW5kZXgsIGRhdGEpO1xuICAgICAgICAgICAgcHJpb3JpdHkuY2hhbmdlUHJpbyhpbmRleCwgZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaW1wb3J0YW50JzpcbiAgICAgICAgICAgIHByaW9yaXR5LnN0YXJEb20oaW5kZXgsIGRhdGEpO1xuICAgICAgICAgICAgcHJpb3JpdHkuY2hhbmdlUHJpbyhpbmRleCwgZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndHJhc2gnOlxuICAgICAgICAgICAgZWRpdERlbGV0ZS50cmFzaChpbmRleCk7XG4gICAgICAgICAgICBkZWxldGVPYmplY3QoaW5kZXgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAgICAgZWRpdERlbGV0ZS5lZGl0KGluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgfVxufSlcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==