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


let arr = JSON.parse(localStorage.getItem(`task`)) || [];


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
    localStorage.setItem(`tasks`, JSON.stringify(arr));
}

function deleteObject(index) {
    console.log(localStorage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2FkZGluZ1Byb2plY3RET00uanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9hZGRpbmd0YXNrRE9NLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvY29tcGxldGVkLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvZWRpdGFuZGRlbGV0ZURPTS5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2ljb25zLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvaW1wb3J0YW50LmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvdGFza1BvcFVwLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvdGFza29iamVjdGZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrRE9NIH0gZnJvbSBcIi4vYWRkaW5ndGFza0RPTVwiXG5cblxuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICBwcm9qZWN0cy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWlucHV0JykudmFsdWUpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0RG9tKCkge1xuICAgIGNvbnN0IGJ1aWxkID0gdGFza0RPTSgpO1xuICAgIGxldCBpbmRleCA9IHByb2plY3RzLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc2VsZWN0Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbnB1dCcpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICduZXctcHJvamVjdCcsIGlkOiBgcHJvamVjdC0ke2luZGV4fWB9KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChidWlsZC5lbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiBgbmFtZS0ke2luZGV4fWAsIGNsYXNzOiAnbmFtZSd9KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI25hbWUtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChidWlsZC5lbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiBgZ3JpZC0ke2luZGV4fWAsIGluZGV4OiBgJHtpbmRleH1gLCBjbGFzczogJ2dyaWQnfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNncmlkLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoYnVpbGQuZWxlbWVudEZhY3RvcnkoJ2ltZycsIHtzcmM6ICcuLi9zcmMvZ3JpZC5zdmcnLCBpbmRleDogYCR7aW5kZXh9YH0pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbmFtZS0ke2luZGV4fWApLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHt0aXRsZS52YWx1ZX1gKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChidWlsZC5lbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiBgdHJhc2gtJHtpbmRleH1gLCBjbGFzczogJ3RyYXNoJ30pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdHJhc2gtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChidWlsZC5lbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogJy4uL3NyYy90cmFzaC5zdmcnLCBpbmRleDogYCR7aW5kZXh9YH0pKTtcblxuXG59XG5cbmV4cG9ydCB7IHByb2plY3REb20sIGdldFByb2plY3RzIH0iLCJpbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcblxuXG5cbi8vIGFkZGluZyB0YXNrcyB0byB0aGUgZG9tXG5jb25zdCBlbGVtZW50RmFjdG9yeSA9ICh0eXBlLCBhdHRyaWJ1dGVzLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBjcmVhdGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGlmIChhdHRyaWJ1dGVzICE9PSAnbm9uZScpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGNyZWF0ZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGU7XG59XG5cbmNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgIGNvbnN0IG51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpLmNoaWxkRWxlbWVudENvdW50O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkID0gY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRhc2tET00oKSB7XG4gICAgXG4gICAgICAgIGFyci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICduZXctdGFzaycsIGlkOiBgdGFzay0ke2luZGV4fWAsIGluZGV4OiBgJHtpbmRleH1gfSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnbGVmdC1zaWRlJywgaWQ6IGBsZWZ0LSR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2luZm8nLCBpZDogYGluZm8tJHtpbmRleH1gfSkpXG5cbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGVmdC0ke2luZGV4fWApO1xuICAgICAgICAgICAgbGVmdC5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnYnV0dG9uJywge3R5cGU6ICdidXR0b24nLCBpZDogYGNoZWNrLSR7aW5kZXh9YCwgZGF0YTogJ25vbi1jb21wbGV0ZWQnLCBpbmRleDogYCR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ3Byb2plY3QtdGV4dCcsIGlkOiBgcHJvamVjdC0ke2luZGV4fWB9KSlcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7YXJyW2luZGV4XS50aXRsZX1gKSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHthcnJbaW5kZXhdLmRlc2NyaXB0aW9ufWApKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbmZvLSR7aW5kZXh9YCk7XG4gICAgICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHthcnJbaW5kZXhdLmRhdGV9YCkpO1xuICAgICAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiBgc3Rhci0ke2luZGV4fWAsIGNsYXNzOiAnZGlzcGxheWVkJywgZGF0YTogJ25vdC1pbXBvcnRhbnQnfSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N0YXItJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogXCIuLi9zcmMvc3Rhci5zdmdcIiwgaW5kZXg6IGAke2luZGV4fWAsIGRhdGE6ICdub3QtaW1wb3J0YW50J30pKTtcbiAgICAgICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogYGltcG9ydGFudC0ke2luZGV4fWAsIGNsYXNzOiAnbm90LWRpc3BsYXllZCcsIGRhdGE6ICdpbXBvcnRhbnQnfSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltcG9ydGFudC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdpbWcnLCB7c3JjOiBcIi4uL3NyYy9zdGFyLWNoZWNrLnN2Z1wiLCBpbmRleDogYCR7aW5kZXh9YCwgZGF0YTogJ2ltcG9ydGFudCd9KSk7XG4gICAgICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdlZGl0JywgaW5kZXg6IGAke2luZGV4fWAsIGRhdGE6ICdlZGl0JywgaWQ6IGBlZGl0LSR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0LSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2ltZycsIHtzcmM6ICcuLi9zcmMvcGVuY2lsLnN2ZycsIGluZGV4OiBgJHtpbmRleH1gLCBkYXRhOiAnZWRpdCcgfSkpXG4gICAgICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICd0cmFzaCcsIGluZGV4OiBgJHtpbmRleH1gLCBkYXRhOiAndHJhc2gnLCBpZDogYHRyYXNoLSR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0cmFzaC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdpbWcnLCB7c3JjOiAnLi4vc3JjL3RyYXNoLnN2ZycsIGluZGV4OiBgJHtpbmRleH1gLCBkYXRhOiAndHJhc2gnIH0pKVxuICAgICAgICAgICAgfSk7XG4gICAgXG59XG5cbnRhc2tET00oKTtcblxuZXhwb3J0IHsgdGFza0RPTSwgY2xlYXIsIGVsZW1lbnRGYWN0b3J5IH0iLCJpbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcblxuXG5cbmxldCBkb25lVGFzayA9IFtdO1xuXG5mdW5jdGlvbiBjb21wbGV0ZWQoKSB7XG4gICAgY29uc3QgY2hhbmdlQ2hlY2sgPSAoaWQsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xuICAgICAgICBjb25zdCB0aGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2stJHtpbmRleH1gKTtcblxuICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrJyk7XG4gICAgICAgICAgICB0aGVUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZC10YXNrJyk7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhJywgJ25vbi1jb21wbGV0ZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuICAgICAgICAgICAgdGhlVGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YScsICdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVkQXJyYXkgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgZG9uZVRhc2sucHVzaChhcnJbaW5kZXhdKTtcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvbmVUYXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmNvbXBsZXRlZEFycmF5ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGFyci5wdXNoKGRvbmVUYXNrW2luZGV4XSk7XG4gICAgICAgIGRvbmVUYXNrLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvbmVUYXNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGFuZ2VDaGVjayxcbiAgICAgICAgY29tcGxldGVkQXJyYXksXG4gICAgICAgIHVuY29tcGxldGVkQXJyYXlcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNvbXBsZXRlZCB9IiwiaW1wb3J0IHsgYWRkVGFza1Byb2plY3RzIH0gZnJvbSBcIi4vdGFza1BvcFVwXCJcbmltcG9ydCB7IGFyciwgZGVsZXRlT2JqZWN0IH0gZnJvbSBcIi4vdGFza29iamVjdGZ1bmN0aW9uc1wiXG5cblxuXG5jb25zdCB0YXNrUG9wID0gYWRkVGFza1Byb2plY3RzKCk7XG5cbmZ1bmN0aW9uIHRhc2tJY29uRnVuY3Rpb25zKCkge1xuICAgIGNvbnN0IHRyYXNoID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrLSR7aW5kZXh9YCk7XG4gICAgICAgIGNvbnN0IG51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrLSR7aW5kZXh9YCkuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRhcmdldC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBjaGlsZCA9IHRhcmdldC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZWRpdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICAgICAgXG4gICAgICAgIHRyYXNoKGluZGV4KTtcbiAgICAgICAgZGVsZXRlT2JqZWN0KGluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIHRpdGxlLnZhbHVlID0gYCR7YXJyW2luZGV4XS50aXRsZX1gXG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gYCR7YXJyW2luZGV4XS5kZXNjcmlwdGlvbn1gXG4gICAgICAgIGRhdGUudmFsdWUgPSBgJHthcnJbaW5kZXhdLmRhdGV9YFxuICAgICAgICB0YXNrUG9wLnRhc2soKTtcblxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICB0cmFzaCxcbiAgICAgICAgZWRpdFxuICAgIH1cbn1cblxuZXhwb3J0IHsgdGFza0ljb25GdW5jdGlvbnMgfSIsIi8vIHN3aXRjaGluZyB0aGUgYWN0aXZlIGhpZ2hsaWdodHNcblxubGV0IGljb25DbGFzcyA9IFt7XG4gICAgaWQ6ICdhbGwnLFxuICAgIGNsYXNzOiAnaWNvbnMtYWN0aXZlJ1xufSwge1xuICAgIGlkOiAnaW1wb3J0YW50JyxcbiAgICBjbGFzczogJ2ljb25zJ1xufSwge1xuICAgIGlkOiAndG9kYXknLFxuICAgIGNsYXNzOiAnaWNvbnMnXG59LCB7XG4gICAgaWQ6ICd1cGNvbWluZycsXG4gICAgY2xhc3M6ICdpY29ucydcbn1dO1xuXG5mdW5jdGlvbiBmb2N1c0VmZmVjdHMoY2xpY2spIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xpY2spO1xuICAgIGNvbnN0IGFjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5jbGFzcyA9PT0gJ2ljb25zLWFjdGl2ZScpO1xuICAgIGNvbnN0IG5vd0FjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5pZCA9PT0gYCR7Y2xpY2t9YCk7XG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YWN0aXZlLmlkfWApO1xuICAgIFxuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMtYWN0aXZlJyk7XG4gICAgaGlnaGxpZ2h0LmNsYXNzTGlzdC50b2dnbGUoJ2ljb25zLWFjdGl2ZScpO1xuICAgIGFjdGl2ZS5jbGFzcyA9ICdpY29ucyc7XG4gICAgbm93QWN0aXZlLmNsYXNzID0gJ2ljb25zLWFjdGl2ZSc7XG5cbiAgICAvLyBzd2l0Y2ggdGhlIGNhdGVnb3J5IHZpc3VhbGx5IGFsb25nIHdpdGggdGhlIGZvY3VzIGVmZmVjdFxuICAgIFxuICAgIGNvbnN0IGN1cnJlbnRDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2F0LSR7bm93QWN0aXZlLmlkfWApO1xuICAgIGNvbnN0IHBDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2F0LSR7YWN0aXZlLmlkfWApXG4gICAgXG4gICAgY3VycmVudENhdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBwQ2F0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXG59XG5cbmV4cG9ydCB7IGZvY3VzRWZmZWN0cyB9OyIsImltcG9ydCB7IGFyciB9IGZyb20gXCIuL3Rhc2tvYmplY3RmdW5jdGlvbnNcIlxuXG5mdW5jdGlvbiBpbXBvcnRhbnQoKSB7XG4gICAgY29uc3Qgc3RhckRvbSA9IChpbmRleCwgZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBub3RJbXBvcnRhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3Rhci0ke2luZGV4fWApO1xuICAgICAgICBjb25zdCBpc0ltcG9ydGFudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbXBvcnRhbnQtJHtpbmRleH1gKTtcblxuICAgICAgICBpZiAoZGF0YSA9PT0gJ25vdC1pbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICBpc0ltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIGlzSW1wb3J0YW50LmNsYXNzTGlzdC50b2dnbGUoJ25vdC1kaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIG5vdEltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdub3QtZGlzcGxheWVkJyk7XG4gICAgICAgICAgICBub3RJbXBvcnRhbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheWVkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gJ2ltcG9ydGFudCcpIHtcbiAgICAgICAgICAgIG5vdEltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIG5vdEltcG9ydGFudC5jbGFzc0xpc3QudG9nZ2xlKCdub3QtZGlzcGxheWVkJyk7XG4gICAgICAgICAgICBpc0ltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdub3QtZGlzcGxheWVkJyk7XG4gICAgICAgICAgICBpc0ltcG9ydGFudC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZVByaW8gPSAoaW5kZXgsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgPT09ICdub3QtaW1wb3J0YW50Jykge1xuICAgICAgICAgICAgYXJyW2luZGV4XS5pbXBvcnRhbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgYmUgdHJ1ZScpXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gJ2ltcG9ydGFudCcpIHtcbiAgICAgICAgICAgIGFycltpbmRleF0uaW1wb3J0YW5jZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZCBiZSBmYWxzZScpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFyRG9tLFxuICAgICAgICBjaGFuZ2VQcmlvXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHsgaW1wb3J0YW50IH0iLCJcblxuLy9Eb20gcG9wIHVwcyBmb3IgYWRkaW5nIHByb2plY3RzIGFuZCB0YXNrc1xuXG5jb25zdCBhZGRUYXNrUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXcnKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXBvcHVwJyk7XG5cbiAgICBcbiAgICBjb25zdCB0YXNrID0gKCkgPT4ge1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWlucHV0Jyk7XG5cbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICAgICAgcHJvamVjdC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrLFxuICAgICAgICBjYW5jZWwsXG4gICAgICAgIHByb2plY3RcbiAgICB9XG59XG5cbmV4cG9ydCB7IGFkZFRhc2tQcm9qZWN0cyB9OyIsIlxuXG5leHBvcnQgbGV0IGFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRhc2tgKSkgfHwgW107XG5cblxuZnVuY3Rpb24gdGFza0NyZWF0b3IodGFzaywgYWJvdXQsIGRheSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0YXNrLFxuICAgICAgICBkZXNjcmlwdGlvbjogYWJvdXQsXG4gICAgICAgIGRhdGU6IGRheSxcbiAgICAgICAgaW1wb3J0YW5jZTogZmFsc2UsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXRhKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWVcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIFxuICAgIGFyci5wdXNoKHRhc2tDcmVhdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkpO1xufVxuXG5mdW5jdGlvbiBhZGRUb1N0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRhc2tzYCwgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZU9iamVjdChpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RBdHRyaWJ1dGUodGl0bGUsIGluZGV4KSB7XG4gICAgYXJyW2luZGV4XS5wcm9qZWN0ID0gdGl0bGU7XG59XG5cblxuXG5leHBvcnQgeyBnZXREYXRhLCBkZWxldGVPYmplY3QsIGFkZFByb2plY3RBdHRyaWJ1dGUsIGFkZFRvU3RvcmFnZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGRUYXNrUHJvamVjdHMgfSBmcm9tIFwiLi90YXNrUG9wVXBcIlxuaW1wb3J0IHsgZm9jdXNFZmZlY3RzIH0gZnJvbSBcIi4vaWNvbnNcIlxuaW1wb3J0IHsgZGVsZXRlT2JqZWN0LCBnZXREYXRhLCBhZGRUb1N0b3JhZ2UgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcbmltcG9ydCB7IHRhc2tET00sIGNsZWFyIH0gZnJvbSBcIi4vYWRkaW5ndGFza0RPTVwiXG5pbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcbmltcG9ydCB7IGNvbXBsZXRlZCB9IGZyb20gXCIuL2NvbXBsZXRlZFwiXG5pbXBvcnQgeyBpbXBvcnRhbnQgfSBmcm9tIFwiLi9pbXBvcnRhbnRcIlxuaW1wb3J0IHsgdGFza0ljb25GdW5jdGlvbnMgfSBmcm9tIFwiLi9lZGl0YW5kZGVsZXRlRE9NXCJcbmltcG9ydCB7IHByb2plY3REb20sIGdldFByb2plY3RzIH0gZnJvbSBcIi4vYWRkaW5nUHJvamVjdERPTVwiXG5cbmNvbnN0IGVkaXREZWxldGUgPSB0YXNrSWNvbkZ1bmN0aW9ucygpO1xuY29uc3QgcHJpb3JpdHkgPSBpbXBvcnRhbnQoKTtcbmNvbnN0IGNoZWNrID0gY29tcGxldGVkKCk7XG5jb25zdCB0YXNrID0gYWRkVGFza1Byb2plY3RzKCk7XG5cblxuLy8gYWxsIGJ1dHRvbiBhbmQgZXZlbnQgbGlzdGVuZXJzXG5cbmZ1bmN0aW9uIGRlbGV0ZVN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xuICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcblxuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgICAgY2FzZSAnYWRkLXRhc2snOlxuICAgICAgICAgICAgdGFzay50YXNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgICAgIHRhc2suY2FuY2VsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgICAgIGdldERhdGEoKTtcbiAgICAgICAgICAgIHRhc2suY2FuY2VsKCk7XG4gICAgICAgICAgICBjbGVhcigpO1xuICAgICAgICAgICAgdGFza0RPTSgpO1xuICAgICAgICAgICAgYWRkVG9TdG9yYWdlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJvamVjdC1hZGQnOlxuICAgICAgICAgICAgdGFzay5wcm9qZWN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJvamVjdC1jYW5jZWwnOlxuICAgICAgICAgICAgdGFzay5jYW5jZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhZGQtcHJvamVjdCc6XG4gICAgICAgICAgICBnZXRQcm9qZWN0cygpO1xuICAgICAgICAgICAgcHJvamVjdERvbSgpO1xuICAgICAgICAgICAgdGFzay5jYW5jZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkZWxldGUtbG9jYWwnOlxuICAgICAgICAgICAgZGVsZXRlU3RvcmFnZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN3aXRjaCAoZGF0YSkge1xuICAgICAgICBjYXNlICdvcmdhbml6ZSc6XG4gICAgICAgICAgICBmb2N1c0VmZmVjdHMoaWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25vbi1jb21wbGV0ZWQnOlxuICAgICAgICAgICAgY2hlY2suY2hhbmdlQ2hlY2soaWQsIGluZGV4KTtcbiAgICAgICAgICAgIGNoZWNrLmNvbXBsZXRlZEFycmF5KGluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgICAgICAgY2hlY2suY2hhbmdlQ2hlY2soaWQsIGluZGV4KTtcbiAgICAgICAgICAgIGNoZWNrLnVuY29tcGxldGVkQXJyYXkoaW5kZXgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25vdC1pbXBvcnRhbnQnOlxuICAgICAgICAgICAgcHJpb3JpdHkuc3RhckRvbShpbmRleCwgZGF0YSk7XG4gICAgICAgICAgICBwcmlvcml0eS5jaGFuZ2VQcmlvKGluZGV4LCBkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpbXBvcnRhbnQnOlxuICAgICAgICAgICAgcHJpb3JpdHkuc3RhckRvbShpbmRleCwgZGF0YSk7XG4gICAgICAgICAgICBwcmlvcml0eS5jaGFuZ2VQcmlvKGluZGV4LCBkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0cmFzaCc6XG4gICAgICAgICAgICBlZGl0RGVsZXRlLnRyYXNoKGluZGV4KTtcbiAgICAgICAgICAgIGRlbGV0ZU9iamVjdChpbmRleCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgICAgICBlZGl0RGVsZXRlLmVkaXQoaW5kZXgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICB9XG59KVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9