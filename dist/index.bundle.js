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
        
        title.value = `${_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_1__.arr[index].title}`
        description.value = `${_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_1__.arr[index].description}`
        date.value = `${_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_1__.arr[index].date}`
        taskPop.task();
        (0,_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_1__.deleteObject)(index);

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
            localStorage.clear();
            _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr[index].importance = true;
            (0,_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.addToStorage)();
        } else if (data === 'important') {
            localStorage.clear();
            _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr[index].importance = false;
            (0,_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.addToStorage)();
        }
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
/* harmony export */   "addToStorage": () => (/* binding */ addToStorage),
/* harmony export */   "arr": () => (/* binding */ arr),
/* harmony export */   "deleteObject": () => (/* binding */ deleteObject),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
let arr = JSON.parse(localStorage.getItem('tasks')) || [];


function taskCreator(task, about, day) {
    return {
        title: task,
        description: about,
        date: day,
        importance: false,
    }
}

function getData() {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    
    arr.push(taskCreator(title, description, date));
}

function addToStorage() {
    localStorage.setItem('tasks', JSON.stringify(arr));
}

function deleteObject(index) {
    arr.splice(index, 1);
    localStorage.clear();
    addToStorage();
    
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
    localStorage.clear();
}

function print() {
    console.log(localStorage)
}

function printArray() {
    console.log(_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_2__.arr);
}

document.querySelector('body').addEventListener('click', function(e) {
    const id = e.target.id;
    const data = e.target.getAttribute('data');
    const index = e.target.getAttribute('index');


    switch (id) {
        case 'add-task':
            task.task();
            break;
        case 'cancel':
            task.cancel();
            break;
        case 'add':
            (0,_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_2__.getData)();
            task.cancel();
            (0,_addingtaskDOM__WEBPACK_IMPORTED_MODULE_3__.clear)();
            (0,_addingtaskDOM__WEBPACK_IMPORTED_MODULE_3__.taskDOM)();
            (0,_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_2__.addToStorage)();
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
        case 'print-local':
            print();
            break;
        case 'print-array':
            printArray();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrRUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2FkZGluZ1Byb2plY3RET00uanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9hZGRpbmd0YXNrRE9NLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvY29tcGxldGVkLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvZWRpdGFuZGRlbGV0ZURPTS5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2ljb25zLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvaW1wb3J0YW50LmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvdGFza1BvcFVwLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvdGFza29iamVjdGZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrRE9NIH0gZnJvbSBcIi4vYWRkaW5ndGFza0RPTVwiXG5cblxuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICBwcm9qZWN0cy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWlucHV0JykudmFsdWUpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0RG9tKCkge1xuICAgIGNvbnN0IGJ1aWxkID0gdGFza0RPTSgpO1xuICAgIGxldCBpbmRleCA9IHByb2plY3RzLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc2VsZWN0Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbnB1dCcpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICduZXctcHJvamVjdCcsIGlkOiBgcHJvamVjdC0ke2luZGV4fWB9KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChidWlsZC5lbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiBgbmFtZS0ke2luZGV4fWAsIGNsYXNzOiAnbmFtZSd9KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI25hbWUtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChidWlsZC5lbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiBgZ3JpZC0ke2luZGV4fWAsIGluZGV4OiBgJHtpbmRleH1gLCBjbGFzczogJ2dyaWQnfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNncmlkLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoYnVpbGQuZWxlbWVudEZhY3RvcnkoJ2ltZycsIHtzcmM6ICcuLi9zcmMvZ3JpZC5zdmcnLCBpbmRleDogYCR7aW5kZXh9YH0pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbmFtZS0ke2luZGV4fWApLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHt0aXRsZS52YWx1ZX1gKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChidWlsZC5lbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiBgdHJhc2gtJHtpbmRleH1gLCBjbGFzczogJ3RyYXNoJ30pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdHJhc2gtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChidWlsZC5lbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogJy4uL3NyYy90cmFzaC5zdmcnLCBpbmRleDogYCR7aW5kZXh9YH0pKTtcblxuXG59XG5cbmV4cG9ydCB7IHByb2plY3REb20sIGdldFByb2plY3RzIH0iLCJpbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcblxuXG5cbi8vIGFkZGluZyB0YXNrcyB0byB0aGUgZG9tXG5jb25zdCBlbGVtZW50RmFjdG9yeSA9ICh0eXBlLCBhdHRyaWJ1dGVzLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBjcmVhdGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGlmIChhdHRyaWJ1dGVzICE9PSAnbm9uZScpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGNyZWF0ZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGU7XG59XG5cbmNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgIGNvbnN0IG51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpLmNoaWxkRWxlbWVudENvdW50O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkID0gY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRhc2tET00oKSB7XG4gICAgXG4gICAgICAgIGFyci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICduZXctdGFzaycsIGlkOiBgdGFzay0ke2luZGV4fWAsIGluZGV4OiBgJHtpbmRleH1gfSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnbGVmdC1zaWRlJywgaWQ6IGBsZWZ0LSR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2luZm8nLCBpZDogYGluZm8tJHtpbmRleH1gfSkpXG5cbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGVmdC0ke2luZGV4fWApO1xuICAgICAgICAgICAgbGVmdC5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnYnV0dG9uJywge3R5cGU6ICdidXR0b24nLCBpZDogYGNoZWNrLSR7aW5kZXh9YCwgZGF0YTogJ25vbi1jb21wbGV0ZWQnLCBpbmRleDogYCR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ3Byb2plY3QtdGV4dCcsIGlkOiBgcHJvamVjdC0ke2luZGV4fWB9KSlcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7YXJyW2luZGV4XS50aXRsZX1gKSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHthcnJbaW5kZXhdLmRlc2NyaXB0aW9ufWApKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbmZvLSR7aW5kZXh9YCk7XG4gICAgICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHthcnJbaW5kZXhdLmRhdGV9YCkpO1xuICAgICAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiBgc3Rhci0ke2luZGV4fWAsIGNsYXNzOiAnZGlzcGxheWVkJywgZGF0YTogJ25vdC1pbXBvcnRhbnQnfSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N0YXItJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogXCIuLi9zcmMvc3Rhci5zdmdcIiwgaW5kZXg6IGAke2luZGV4fWAsIGRhdGE6ICdub3QtaW1wb3J0YW50J30pKTtcbiAgICAgICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogYGltcG9ydGFudC0ke2luZGV4fWAsIGNsYXNzOiAnbm90LWRpc3BsYXllZCcsIGRhdGE6ICdpbXBvcnRhbnQnfSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltcG9ydGFudC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdpbWcnLCB7c3JjOiBcIi4uL3NyYy9zdGFyLWNoZWNrLnN2Z1wiLCBpbmRleDogYCR7aW5kZXh9YCwgZGF0YTogJ2ltcG9ydGFudCd9KSk7XG4gICAgICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdlZGl0JywgaW5kZXg6IGAke2luZGV4fWAsIGRhdGE6ICdlZGl0JywgaWQ6IGBlZGl0LSR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0LSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2ltZycsIHtzcmM6ICcuLi9zcmMvcGVuY2lsLnN2ZycsIGluZGV4OiBgJHtpbmRleH1gLCBkYXRhOiAnZWRpdCcgfSkpXG4gICAgICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICd0cmFzaCcsIGluZGV4OiBgJHtpbmRleH1gLCBkYXRhOiAndHJhc2gnLCBpZDogYHRyYXNoLSR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0cmFzaC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdpbWcnLCB7c3JjOiAnLi4vc3JjL3RyYXNoLnN2ZycsIGluZGV4OiBgJHtpbmRleH1gLCBkYXRhOiAndHJhc2gnIH0pKVxuICAgICAgICAgICAgfSk7XG4gICAgXG59XG5cbnRhc2tET00oKTtcblxuZXhwb3J0IHsgdGFza0RPTSwgY2xlYXIsIGVsZW1lbnRGYWN0b3J5IH0iLCJpbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcblxuXG5cbmxldCBkb25lVGFzayA9IFtdO1xuXG5mdW5jdGlvbiBjb21wbGV0ZWQoKSB7XG4gICAgY29uc3QgY2hhbmdlQ2hlY2sgPSAoaWQsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xuICAgICAgICBjb25zdCB0aGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2stJHtpbmRleH1gKTtcblxuICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrJyk7XG4gICAgICAgICAgICB0aGVUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZC10YXNrJyk7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhJywgJ25vbi1jb21wbGV0ZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuICAgICAgICAgICAgdGhlVGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YScsICdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVkQXJyYXkgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgZG9uZVRhc2sucHVzaChhcnJbaW5kZXhdKTtcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvbmVUYXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmNvbXBsZXRlZEFycmF5ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGFyci5wdXNoKGRvbmVUYXNrW2luZGV4XSk7XG4gICAgICAgIGRvbmVUYXNrLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvbmVUYXNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGFuZ2VDaGVjayxcbiAgICAgICAgY29tcGxldGVkQXJyYXksXG4gICAgICAgIHVuY29tcGxldGVkQXJyYXlcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNvbXBsZXRlZCB9IiwiaW1wb3J0IHsgYWRkVGFza1Byb2plY3RzIH0gZnJvbSBcIi4vdGFza1BvcFVwXCJcbmltcG9ydCB7IGFyciwgZGVsZXRlT2JqZWN0IH0gZnJvbSBcIi4vdGFza29iamVjdGZ1bmN0aW9uc1wiXG5cblxuXG5jb25zdCB0YXNrUG9wID0gYWRkVGFza1Byb2plY3RzKCk7XG5cbmZ1bmN0aW9uIHRhc2tJY29uRnVuY3Rpb25zKCkge1xuICAgIGNvbnN0IHRyYXNoID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrLSR7aW5kZXh9YCk7XG4gICAgICAgIGNvbnN0IG51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrLSR7aW5kZXh9YCkuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRhcmdldC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBjaGlsZCA9IHRhcmdldC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZWRpdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICAgICAgXG4gICAgICAgIHRyYXNoKGluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIHRpdGxlLnZhbHVlID0gYCR7YXJyW2luZGV4XS50aXRsZX1gXG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gYCR7YXJyW2luZGV4XS5kZXNjcmlwdGlvbn1gXG4gICAgICAgIGRhdGUudmFsdWUgPSBgJHthcnJbaW5kZXhdLmRhdGV9YFxuICAgICAgICB0YXNrUG9wLnRhc2soKTtcbiAgICAgICAgZGVsZXRlT2JqZWN0KGluZGV4KTtcblxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICB0cmFzaCxcbiAgICAgICAgZWRpdFxuICAgIH1cbn1cblxuZXhwb3J0IHsgdGFza0ljb25GdW5jdGlvbnMgfSIsIi8vIHN3aXRjaGluZyB0aGUgYWN0aXZlIGhpZ2hsaWdodHNcblxubGV0IGljb25DbGFzcyA9IFt7XG4gICAgaWQ6ICdhbGwnLFxuICAgIGNsYXNzOiAnaWNvbnMtYWN0aXZlJ1xufSwge1xuICAgIGlkOiAnaW1wb3J0YW50JyxcbiAgICBjbGFzczogJ2ljb25zJ1xufSwge1xuICAgIGlkOiAndG9kYXknLFxuICAgIGNsYXNzOiAnaWNvbnMnXG59LCB7XG4gICAgaWQ6ICd1cGNvbWluZycsXG4gICAgY2xhc3M6ICdpY29ucydcbn1dO1xuXG5mdW5jdGlvbiBmb2N1c0VmZmVjdHMoY2xpY2spIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xpY2spO1xuICAgIGNvbnN0IGFjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5jbGFzcyA9PT0gJ2ljb25zLWFjdGl2ZScpO1xuICAgIGNvbnN0IG5vd0FjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5pZCA9PT0gYCR7Y2xpY2t9YCk7XG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YWN0aXZlLmlkfWApO1xuICAgIFxuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMtYWN0aXZlJyk7XG4gICAgaGlnaGxpZ2h0LmNsYXNzTGlzdC50b2dnbGUoJ2ljb25zLWFjdGl2ZScpO1xuICAgIGFjdGl2ZS5jbGFzcyA9ICdpY29ucyc7XG4gICAgbm93QWN0aXZlLmNsYXNzID0gJ2ljb25zLWFjdGl2ZSc7XG5cbiAgICAvLyBzd2l0Y2ggdGhlIGNhdGVnb3J5IHZpc3VhbGx5IGFsb25nIHdpdGggdGhlIGZvY3VzIGVmZmVjdFxuICAgIFxuICAgIGNvbnN0IGN1cnJlbnRDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2F0LSR7bm93QWN0aXZlLmlkfWApO1xuICAgIGNvbnN0IHBDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2F0LSR7YWN0aXZlLmlkfWApXG4gICAgXG4gICAgY3VycmVudENhdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBwQ2F0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXG59XG5cbmV4cG9ydCB7IGZvY3VzRWZmZWN0cyB9OyIsImltcG9ydCB7IGFkZFRvU3RvcmFnZSwgYXJyIH0gZnJvbSBcIi4vdGFza29iamVjdGZ1bmN0aW9uc1wiXG5cbmZ1bmN0aW9uIGltcG9ydGFudCgpIHtcbiAgICBjb25zdCBzdGFyRG9tID0gKGluZGV4LCBkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdEltcG9ydGFudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGFyLSR7aW5kZXh9YCk7XG4gICAgICAgIGNvbnN0IGlzSW1wb3J0YW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGltcG9ydGFudC0ke2luZGV4fWApO1xuXG4gICAgICAgIGlmIChkYXRhID09PSAnbm90LWltcG9ydGFudCcpIHtcbiAgICAgICAgICAgIGlzSW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZCcpO1xuICAgICAgICAgICAgaXNJbXBvcnRhbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbm90LWRpc3BsYXllZCcpO1xuICAgICAgICAgICAgbm90SW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ25vdC1kaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIG5vdEltcG9ydGFudC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhID09PSAnaW1wb3J0YW50Jykge1xuICAgICAgICAgICAgbm90SW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZCcpO1xuICAgICAgICAgICAgbm90SW1wb3J0YW50LmNsYXNzTGlzdC50b2dnbGUoJ25vdC1kaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIGlzSW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ25vdC1kaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIGlzSW1wb3J0YW50LmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXllZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlUHJpbyA9IChpbmRleCwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSA9PT0gJ25vdC1pbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIGFycltpbmRleF0uaW1wb3J0YW5jZSA9IHRydWU7XG4gICAgICAgICAgICBhZGRUb1N0b3JhZ2UoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhID09PSAnaW1wb3J0YW50Jykge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICBhcnJbaW5kZXhdLmltcG9ydGFuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGFkZFRvU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhckRvbSxcbiAgICAgICAgY2hhbmdlUHJpb1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IGltcG9ydGFudCB9IiwiXG5cbi8vRG9tIHBvcCB1cHMgZm9yIGFkZGluZyBwcm9qZWN0cyBhbmQgdGFza3NcblxuY29uc3QgYWRkVGFza1Byb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Jyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1wb3B1cCcpO1xuXG4gICAgXG4gICAgY29uc3QgdGFzayA9ICgpID0+IHtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbnB1dCcpO1xuXG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlLnZhbHVlID0gJyc7XG4gICAgICAgIHByb2plY3QudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFzayxcbiAgICAgICAgY2FuY2VsLFxuICAgICAgICBwcm9qZWN0XG4gICAgfVxufVxuXG5leHBvcnQgeyBhZGRUYXNrUHJvamVjdHMgfTsiLCJleHBvcnQgbGV0IGFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuXG5cbmZ1bmN0aW9uIHRhc2tDcmVhdG9yKHRhc2ssIGFib3V0LCBkYXkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogdGFzayxcbiAgICAgICAgZGVzY3JpcHRpb246IGFib3V0LFxuICAgICAgICBkYXRlOiBkYXksXG4gICAgICAgIGltcG9ydGFuY2U6IGZhbHNlLFxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICBcbiAgICBhcnIucHVzaCh0YXNrQ3JlYXRvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9TdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGFycikpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVPYmplY3QoaW5kZXgpIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBhZGRUb1N0b3JhZ2UoKTtcbiAgICBcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEF0dHJpYnV0ZSh0aXRsZSwgaW5kZXgpIHtcbiAgICBhcnJbaW5kZXhdLnByb2plY3QgPSB0aXRsZTtcbn1cblxuXG5cbmV4cG9ydCB7IGdldERhdGEsIGRlbGV0ZU9iamVjdCwgYWRkUHJvamVjdEF0dHJpYnV0ZSwgYWRkVG9TdG9yYWdlIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZFRhc2tQcm9qZWN0cyB9IGZyb20gXCIuL3Rhc2tQb3BVcFwiXG5pbXBvcnQgeyBmb2N1c0VmZmVjdHMgfSBmcm9tIFwiLi9pY29uc1wiXG5pbXBvcnQgeyBkZWxldGVPYmplY3QsIGdldERhdGEsIGFkZFRvU3RvcmFnZSB9IGZyb20gXCIuL3Rhc2tvYmplY3RmdW5jdGlvbnNcIlxuaW1wb3J0IHsgdGFza0RPTSwgY2xlYXIgfSBmcm9tIFwiLi9hZGRpbmd0YXNrRE9NXCJcbmltcG9ydCB7IGFyciB9IGZyb20gXCIuL3Rhc2tvYmplY3RmdW5jdGlvbnNcIlxuaW1wb3J0IHsgY29tcGxldGVkIH0gZnJvbSBcIi4vY29tcGxldGVkXCJcbmltcG9ydCB7IGltcG9ydGFudCB9IGZyb20gXCIuL2ltcG9ydGFudFwiXG5pbXBvcnQgeyB0YXNrSWNvbkZ1bmN0aW9ucyB9IGZyb20gXCIuL2VkaXRhbmRkZWxldGVET01cIlxuaW1wb3J0IHsgcHJvamVjdERvbSwgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi9hZGRpbmdQcm9qZWN0RE9NXCJcblxuY29uc3QgZWRpdERlbGV0ZSA9IHRhc2tJY29uRnVuY3Rpb25zKCk7XG5jb25zdCBwcmlvcml0eSA9IGltcG9ydGFudCgpO1xuY29uc3QgY2hlY2sgPSBjb21wbGV0ZWQoKTtcbmNvbnN0IHRhc2sgPSBhZGRUYXNrUHJvamVjdHMoKTtcblxuXG4vLyBhbGwgYnV0dG9uIGFuZCBldmVudCBsaXN0ZW5lcnNcblxuZnVuY3Rpb24gZGVsZXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbn1cblxuZnVuY3Rpb24gcHJpbnQoKSB7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxufVxuXG5mdW5jdGlvbiBwcmludEFycmF5KCkge1xuICAgIGNvbnNvbGUubG9nKGFycik7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xuICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcblxuXG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgICBjYXNlICdhZGQtdGFzayc6XG4gICAgICAgICAgICB0YXNrLnRhc2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgICAgICAgdGFzay5jYW5jZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgICAgZ2V0RGF0YSgpO1xuICAgICAgICAgICAgdGFzay5jYW5jZWwoKTtcbiAgICAgICAgICAgIGNsZWFyKCk7XG4gICAgICAgICAgICB0YXNrRE9NKCk7XG4gICAgICAgICAgICBhZGRUb1N0b3JhZ2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcm9qZWN0LWFkZCc6XG4gICAgICAgICAgICB0YXNrLnByb2plY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcm9qZWN0LWNhbmNlbCc6XG4gICAgICAgICAgICB0YXNrLmNhbmNlbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FkZC1wcm9qZWN0JzpcbiAgICAgICAgICAgIGdldFByb2plY3RzKCk7XG4gICAgICAgICAgICBwcm9qZWN0RG9tKCk7XG4gICAgICAgICAgICB0YXNrLmNhbmNlbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RlbGV0ZS1sb2NhbCc6XG4gICAgICAgICAgICBkZWxldGVTdG9yYWdlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJpbnQtbG9jYWwnOlxuICAgICAgICAgICAgcHJpbnQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcmludC1hcnJheSc6XG4gICAgICAgICAgICBwcmludEFycmF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3dpdGNoIChkYXRhKSB7XG4gICAgICAgIGNhc2UgJ29yZ2FuaXplJzpcbiAgICAgICAgICAgIGZvY3VzRWZmZWN0cyhpZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbm9uLWNvbXBsZXRlZCc6XG4gICAgICAgICAgICBjaGVjay5jaGFuZ2VDaGVjayhpZCwgaW5kZXgpO1xuICAgICAgICAgICAgY2hlY2suY29tcGxldGVkQXJyYXkoaW5kZXgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbXBsZXRlZCc6XG4gICAgICAgICAgICBjaGVjay5jaGFuZ2VDaGVjayhpZCwgaW5kZXgpO1xuICAgICAgICAgICAgY2hlY2sudW5jb21wbGV0ZWRBcnJheShpbmRleCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbm90LWltcG9ydGFudCc6XG4gICAgICAgICAgICBwcmlvcml0eS5zdGFyRG9tKGluZGV4LCBkYXRhKTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNoYW5nZVByaW8oaW5kZXgsIGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ltcG9ydGFudCc6XG4gICAgICAgICAgICBwcmlvcml0eS5zdGFyRG9tKGluZGV4LCBkYXRhKTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNoYW5nZVByaW8oaW5kZXgsIGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RyYXNoJzpcbiAgICAgICAgICAgIGVkaXREZWxldGUudHJhc2goaW5kZXgpO1xuICAgICAgICAgICAgZGVsZXRlT2JqZWN0KGluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgICAgIGVkaXREZWxldGUuZWRpdChpbmRleCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgIH1cbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=