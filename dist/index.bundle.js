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
/* harmony export */   "completed": () => (/* binding */ completed),
/* harmony export */   "doneTask": () => (/* binding */ doneTask)
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
        localStorage.clear();
        (0,_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.addToStorage)();
    }

    const uncompletedArray = (index) => {
        _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr.push(doneTask[index]);
        doneTask.splice(index, 1);
        localStorage.clear();
        (0,_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.addToStorage)();
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
        checkPrio();
    }
 
    const checkPrio = () => {
        for (let i = 0; i < _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr.length; i++) {
            const notImportant = document.getElementById(`star-${i}`);
            const isImportant = document.getElementById(`important-${i}`);
            if (_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr[i].importance === true) {
                notImportant.style.display = 'none';
                isImportant.style.display = 'block';
            } else if (_taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr[i].importance === false) {
                notImportant.style.display = 'block';
                isImportant.style.display = 'none';
            }
        }
    }

    return {
        changePrio,
        checkPrio
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

function printCompleted() {
    console.log(_completed__WEBPACK_IMPORTED_MODULE_4__.doneTask);
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
        case 'print-done':
            printCompleted();
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
            priority.changePrio(index, data);
            break;
        case 'important':
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

priority.checkPrio();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0RBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0VBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9hZGRpbmdQcm9qZWN0RE9NLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvYWRkaW5ndGFza0RPTS5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2NvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2VkaXRhbmRkZWxldGVET00uanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2ltcG9ydGFudC5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL3Rhc2tQb3BVcC5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL3Rhc2tvYmplY3RmdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza0RPTSB9IGZyb20gXCIuL2FkZGluZ3Rhc2tET01cIlxuXG5cblxubGV0IHByb2plY3RzID0gW107XG5cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcHJvamVjdHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbnB1dCcpLnZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdERvbSgpIHtcbiAgICBjb25zdCBidWlsZCA9IHRhc2tET00oKTtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0cy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXNlbGVjdCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaW5wdXQnKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZC5lbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnbmV3LXByb2plY3QnLCBpZDogYHByb2plY3QtJHtpbmRleH1gfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoYnVpbGQuZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogYG5hbWUtJHtpbmRleH1gLCBjbGFzczogJ25hbWUnfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNuYW1lLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoYnVpbGQuZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogYGdyaWQtJHtpbmRleH1gLCBpbmRleDogYCR7aW5kZXh9YCwgY2xhc3M6ICdncmlkJ30pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZ3JpZC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdpbWcnLCB7c3JjOiAnLi4vc3JjL2dyaWQuc3ZnJywgaW5kZXg6IGAke2luZGV4fWB9KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI25hbWUtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChidWlsZC5lbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7dGl0bGUudmFsdWV9YCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoYnVpbGQuZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogYHRyYXNoLSR7aW5kZXh9YCwgY2xhc3M6ICd0cmFzaCd9KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RyYXNoLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoYnVpbGQuZWxlbWVudEZhY3RvcnkoJ2ltZycsIHtzcmM6ICcuLi9zcmMvdHJhc2guc3ZnJywgaW5kZXg6IGAke2luZGV4fWB9KSk7XG5cblxufVxuXG5leHBvcnQgeyBwcm9qZWN0RG9tLCBnZXRQcm9qZWN0cyB9IiwiaW1wb3J0IHsgYXJyIH0gZnJvbSBcIi4vdGFza29iamVjdGZ1bmN0aW9uc1wiXG5cblxuXG4vLyBhZGRpbmcgdGFza3MgdG8gdGhlIGRvbVxuY29uc3QgZWxlbWVudEZhY3RvcnkgPSAodHlwZSwgYXR0cmlidXRlcywgdGV4dCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgY3JlYXRlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpZiAoYXR0cmlidXRlcyAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBjcmVhdGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlO1xufVxuXG5jb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICBjb25zdCBudW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKS5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZCA9IGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0YXNrRE9NKCkge1xuICAgIFxuICAgICAgICBhcnIuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+ICB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnbmV3LXRhc2snLCBpZDogYHRhc2stJHtpbmRleH1gLCBpbmRleDogYCR7aW5kZXh9YH0pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2xlZnQtc2lkZScsIGlkOiBgbGVmdC0ke2luZGV4fWB9KSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdpbmZvJywgaWQ6IGBpbmZvLSR7aW5kZXh9YH0pKVxuXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xlZnQtJHtpbmRleH1gKTtcbiAgICAgICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsIHt0eXBlOiAnYnV0dG9uJywgaWQ6IGBjaGVjay0ke2luZGV4fWAsIGRhdGE6ICdub24tY29tcGxldGVkJywgaW5kZXg6IGAke2luZGV4fWB9KSk7XG4gICAgICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdwcm9qZWN0LXRleHQnLCBpZDogYHByb2plY3QtJHtpbmRleH1gfSkpXG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLCAnbm9uZScsIGAke2FycltpbmRleF0udGl0bGV9YCkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7YXJyW2luZGV4XS5kZXNjcmlwdGlvbn1gKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjaW5mby0ke2luZGV4fWApO1xuICAgICAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7YXJyW2luZGV4XS5kYXRlfWApKTtcbiAgICAgICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogYHN0YXItJHtpbmRleH1gLCBjbGFzczogJ2Rpc3BsYXllZCcsIGRhdGE6ICdub3QtaW1wb3J0YW50J30pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzdGFyLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2ltZycsIHtzcmM6IFwiLi4vc3JjL3N0YXIuc3ZnXCIsIGluZGV4OiBgJHtpbmRleH1gLCBkYXRhOiAnbm90LWltcG9ydGFudCd9KSk7XG4gICAgICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7aWQ6IGBpbXBvcnRhbnQtJHtpbmRleH1gLCBjbGFzczogJ25vdC1kaXNwbGF5ZWQnLCBkYXRhOiAnaW1wb3J0YW50J30pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbXBvcnRhbnQtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogXCIuLi9zcmMvc3Rhci1jaGVjay5zdmdcIiwgaW5kZXg6IGAke2luZGV4fWAsIGRhdGE6ICdpbXBvcnRhbnQnfSkpO1xuICAgICAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnZWRpdCcsIGluZGV4OiBgJHtpbmRleH1gLCBkYXRhOiAnZWRpdCcsIGlkOiBgZWRpdC0ke2luZGV4fWB9KSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdpbWcnLCB7c3JjOiAnLi4vc3JjL3BlbmNpbC5zdmcnLCBpbmRleDogYCR7aW5kZXh9YCwgZGF0YTogJ2VkaXQnIH0pKVxuICAgICAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAndHJhc2gnLCBpbmRleDogYCR7aW5kZXh9YCwgZGF0YTogJ3RyYXNoJywgaWQ6IGB0cmFzaC0ke2luZGV4fWB9KSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdHJhc2gtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogJy4uL3NyYy90cmFzaC5zdmcnLCBpbmRleDogYCR7aW5kZXh9YCwgZGF0YTogJ3RyYXNoJyB9KSlcbiAgICAgICAgICAgIH0pO1xuICAgIFxufVxuXG50YXNrRE9NKCk7XG5cbmV4cG9ydCB7IHRhc2tET00sIGNsZWFyLCBlbGVtZW50RmFjdG9yeSB9IiwiaW1wb3J0IHsgYXJyIH0gZnJvbSBcIi4vdGFza29iamVjdGZ1bmN0aW9uc1wiXG5pbXBvcnQgeyBhZGRUb1N0b3JhZ2UgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcblxuXG5leHBvcnQgbGV0IGRvbmVUYXNrID0gW107XG5cbmZ1bmN0aW9uIGNvbXBsZXRlZCgpIHtcbiAgICBjb25zdCBjaGFuZ2VDaGVjayA9IChpZCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XG4gICAgICAgIGNvbnN0IHRoZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFzay0ke2luZGV4fWApO1xuXG4gICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2snKTtcbiAgICAgICAgICAgIHRoZVRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkLXRhc2snKTtcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCAnbm9uLWNvbXBsZXRlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgICAgICAgICB0aGVUYXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrJyk7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhJywgJ2NvbXBsZXRlZCcpO1xuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVkQXJyYXkgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgZG9uZVRhc2sucHVzaChhcnJbaW5kZXhdKTtcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBhZGRUb1N0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmNvbXBsZXRlZEFycmF5ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGFyci5wdXNoKGRvbmVUYXNrW2luZGV4XSk7XG4gICAgICAgIGRvbmVUYXNrLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBhZGRUb1N0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGFuZ2VDaGVjayxcbiAgICAgICAgY29tcGxldGVkQXJyYXksXG4gICAgICAgIHVuY29tcGxldGVkQXJyYXlcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNvbXBsZXRlZCB9IiwiaW1wb3J0IHsgYWRkVGFza1Byb2plY3RzIH0gZnJvbSBcIi4vdGFza1BvcFVwXCJcbmltcG9ydCB7IGFyciwgZGVsZXRlT2JqZWN0IH0gZnJvbSBcIi4vdGFza29iamVjdGZ1bmN0aW9uc1wiXG5cblxuXG5jb25zdCB0YXNrUG9wID0gYWRkVGFza1Byb2plY3RzKCk7XG5cbmZ1bmN0aW9uIHRhc2tJY29uRnVuY3Rpb25zKCkge1xuICAgIGNvbnN0IHRyYXNoID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrLSR7aW5kZXh9YCk7XG4gICAgICAgIGNvbnN0IG51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrLSR7aW5kZXh9YCkuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRhcmdldC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBjaGlsZCA9IHRhcmdldC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZWRpdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICAgICAgXG4gICAgICAgIHRyYXNoKGluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIHRpdGxlLnZhbHVlID0gYCR7YXJyW2luZGV4XS50aXRsZX1gXG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gYCR7YXJyW2luZGV4XS5kZXNjcmlwdGlvbn1gXG4gICAgICAgIGRhdGUudmFsdWUgPSBgJHthcnJbaW5kZXhdLmRhdGV9YFxuICAgICAgICB0YXNrUG9wLnRhc2soKTtcbiAgICAgICAgZGVsZXRlT2JqZWN0KGluZGV4KTtcblxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICB0cmFzaCxcbiAgICAgICAgZWRpdFxuICAgIH1cbn1cblxuZXhwb3J0IHsgdGFza0ljb25GdW5jdGlvbnMgfSIsIi8vIHN3aXRjaGluZyB0aGUgYWN0aXZlIGhpZ2hsaWdodHNcblxubGV0IGljb25DbGFzcyA9IFt7XG4gICAgaWQ6ICdhbGwnLFxuICAgIGNsYXNzOiAnaWNvbnMtYWN0aXZlJ1xufSwge1xuICAgIGlkOiAnaW1wb3J0YW50JyxcbiAgICBjbGFzczogJ2ljb25zJ1xufSwge1xuICAgIGlkOiAndG9kYXknLFxuICAgIGNsYXNzOiAnaWNvbnMnXG59LCB7XG4gICAgaWQ6ICd1cGNvbWluZycsXG4gICAgY2xhc3M6ICdpY29ucydcbn1dO1xuXG5mdW5jdGlvbiBmb2N1c0VmZmVjdHMoY2xpY2spIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xpY2spO1xuICAgIGNvbnN0IGFjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5jbGFzcyA9PT0gJ2ljb25zLWFjdGl2ZScpO1xuICAgIGNvbnN0IG5vd0FjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5pZCA9PT0gYCR7Y2xpY2t9YCk7XG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YWN0aXZlLmlkfWApO1xuICAgIFxuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMtYWN0aXZlJyk7XG4gICAgaGlnaGxpZ2h0LmNsYXNzTGlzdC50b2dnbGUoJ2ljb25zLWFjdGl2ZScpO1xuICAgIGFjdGl2ZS5jbGFzcyA9ICdpY29ucyc7XG4gICAgbm93QWN0aXZlLmNsYXNzID0gJ2ljb25zLWFjdGl2ZSc7XG5cbiAgICAvLyBzd2l0Y2ggdGhlIGNhdGVnb3J5IHZpc3VhbGx5IGFsb25nIHdpdGggdGhlIGZvY3VzIGVmZmVjdFxuICAgIFxuICAgIGNvbnN0IGN1cnJlbnRDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2F0LSR7bm93QWN0aXZlLmlkfWApO1xuICAgIGNvbnN0IHBDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2F0LSR7YWN0aXZlLmlkfWApXG4gICAgXG4gICAgY3VycmVudENhdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBwQ2F0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXG59XG5cbmV4cG9ydCB7IGZvY3VzRWZmZWN0cyB9OyIsImltcG9ydCB7IGFkZFRvU3RvcmFnZSwgYXJyIH0gZnJvbSBcIi4vdGFza29iamVjdGZ1bmN0aW9uc1wiXG5cbmZ1bmN0aW9uIGltcG9ydGFudCgpIHtcbiAgICBjb25zdCBjaGFuZ2VQcmlvID0gKGluZGV4LCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhID09PSAnbm90LWltcG9ydGFudCcpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgYXJyW2luZGV4XS5pbXBvcnRhbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZFRvU3RvcmFnZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPT09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIGFycltpbmRleF0uaW1wb3J0YW5jZSA9IGZhbHNlO1xuICAgICAgICAgICAgYWRkVG9TdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tQcmlvKCk7XG4gICAgfVxuIFxuICAgIGNvbnN0IGNoZWNrUHJpbyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdEltcG9ydGFudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGFyLSR7aX1gKTtcbiAgICAgICAgICAgIGNvbnN0IGlzSW1wb3J0YW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGltcG9ydGFudC0ke2l9YCk7XG4gICAgICAgICAgICBpZiAoYXJyW2ldLmltcG9ydGFuY2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBub3RJbXBvcnRhbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpc0ltcG9ydGFudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyW2ldLmltcG9ydGFuY2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbm90SW1wb3J0YW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGlzSW1wb3J0YW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGFuZ2VQcmlvLFxuICAgICAgICBjaGVja1ByaW9cbiAgICB9XG59XG5cblxuXG5leHBvcnQgeyBpbXBvcnRhbnQgfSIsIlxuXG4vL0RvbSBwb3AgdXBzIGZvciBhZGRpbmcgcHJvamVjdHMgYW5kIHRhc2tzXG5cbmNvbnN0IGFkZFRhc2tQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldycpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtcG9wdXAnKTtcblxuICAgIFxuICAgIGNvbnN0IHRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG5cbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaW5wdXQnKTtcblxuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgZGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICBwcm9qZWN0LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2ssXG4gICAgICAgIGNhbmNlbCxcbiAgICAgICAgcHJvamVjdFxuICAgIH1cbn1cblxuZXhwb3J0IHsgYWRkVGFza1Byb2plY3RzIH07IiwiZXhwb3J0IGxldCBhcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcblxuXG5mdW5jdGlvbiB0YXNrQ3JlYXRvcih0YXNrLCBhYm91dCwgZGF5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRhc2ssXG4gICAgICAgIGRlc2NyaXB0aW9uOiBhYm91dCxcbiAgICAgICAgZGF0ZTogZGF5LFxuICAgICAgICBpbXBvcnRhbmNlOiBmYWxzZSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgXG4gICAgYXJyLnB1c2godGFza0NyZWF0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0KGluZGV4KSB7XG4gICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgYWRkVG9TdG9yYWdlKCk7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RBdHRyaWJ1dGUodGl0bGUsIGluZGV4KSB7XG4gICAgYXJyW2luZGV4XS5wcm9qZWN0ID0gdGl0bGU7XG59XG5cblxuXG5leHBvcnQgeyBnZXREYXRhLCBkZWxldGVPYmplY3QsIGFkZFByb2plY3RBdHRyaWJ1dGUsIGFkZFRvU3RvcmFnZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGRUYXNrUHJvamVjdHMgfSBmcm9tIFwiLi90YXNrUG9wVXBcIlxuaW1wb3J0IHsgZm9jdXNFZmZlY3RzIH0gZnJvbSBcIi4vaWNvbnNcIlxuaW1wb3J0IHsgZGVsZXRlT2JqZWN0LCBnZXREYXRhLCBhZGRUb1N0b3JhZ2UgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcbmltcG9ydCB7IHRhc2tET00sIGNsZWFyIH0gZnJvbSBcIi4vYWRkaW5ndGFza0RPTVwiXG5pbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcbmltcG9ydCB7IGNvbXBsZXRlZCB9IGZyb20gXCIuL2NvbXBsZXRlZFwiXG5pbXBvcnQgeyBpbXBvcnRhbnQgfSBmcm9tIFwiLi9pbXBvcnRhbnRcIlxuaW1wb3J0IHsgdGFza0ljb25GdW5jdGlvbnMgfSBmcm9tIFwiLi9lZGl0YW5kZGVsZXRlRE9NXCJcbmltcG9ydCB7IHByb2plY3REb20sIGdldFByb2plY3RzIH0gZnJvbSBcIi4vYWRkaW5nUHJvamVjdERPTVwiXG5pbXBvcnQgeyBkb25lVGFzayB9IGZyb20gXCIuL2NvbXBsZXRlZFwiXG5cbmNvbnN0IGVkaXREZWxldGUgPSB0YXNrSWNvbkZ1bmN0aW9ucygpO1xuY29uc3QgcHJpb3JpdHkgPSBpbXBvcnRhbnQoKTtcbmNvbnN0IGNoZWNrID0gY29tcGxldGVkKCk7XG5jb25zdCB0YXNrID0gYWRkVGFza1Byb2plY3RzKCk7XG5cblxuLy8gYWxsIGJ1dHRvbiBhbmQgZXZlbnQgbGlzdGVuZXJzXG5cbmZ1bmN0aW9uIGRlbGV0ZVN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG59XG5cbmZ1bmN0aW9uIHByaW50KCkge1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcbn1cblxuZnVuY3Rpb24gcHJpbnRBcnJheSgpIHtcbiAgICBjb25zb2xlLmxvZyhhcnIpO1xufVxuXG5mdW5jdGlvbiBwcmludENvbXBsZXRlZCgpIHtcbiAgICBjb25zb2xlLmxvZyhkb25lVGFzayk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xuICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcblxuXG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgICBjYXNlICdhZGQtdGFzayc6XG4gICAgICAgICAgICB0YXNrLnRhc2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgICAgICAgdGFzay5jYW5jZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgICAgZ2V0RGF0YSgpO1xuICAgICAgICAgICAgdGFzay5jYW5jZWwoKTtcbiAgICAgICAgICAgIGNsZWFyKCk7XG4gICAgICAgICAgICB0YXNrRE9NKCk7XG4gICAgICAgICAgICBhZGRUb1N0b3JhZ2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcm9qZWN0LWFkZCc6XG4gICAgICAgICAgICB0YXNrLnByb2plY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcm9qZWN0LWNhbmNlbCc6XG4gICAgICAgICAgICB0YXNrLmNhbmNlbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FkZC1wcm9qZWN0JzpcbiAgICAgICAgICAgIGdldFByb2plY3RzKCk7XG4gICAgICAgICAgICBwcm9qZWN0RG9tKCk7XG4gICAgICAgICAgICB0YXNrLmNhbmNlbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RlbGV0ZS1sb2NhbCc6XG4gICAgICAgICAgICBkZWxldGVTdG9yYWdlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJpbnQtbG9jYWwnOlxuICAgICAgICAgICAgcHJpbnQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcmludC1hcnJheSc6XG4gICAgICAgICAgICBwcmludEFycmF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJpbnQtZG9uZSc6XG4gICAgICAgICAgICBwcmludENvbXBsZXRlZCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN3aXRjaCAoZGF0YSkge1xuICAgICAgICBjYXNlICdvcmdhbml6ZSc6XG4gICAgICAgICAgICBmb2N1c0VmZmVjdHMoaWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25vbi1jb21wbGV0ZWQnOlxuICAgICAgICAgICAgY2hlY2suY2hhbmdlQ2hlY2soaWQsIGluZGV4KTtcbiAgICAgICAgICAgIGNoZWNrLmNvbXBsZXRlZEFycmF5KGluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgICAgICAgY2hlY2suY2hhbmdlQ2hlY2soaWQsIGluZGV4KTtcbiAgICAgICAgICAgIGNoZWNrLnVuY29tcGxldGVkQXJyYXkoaW5kZXgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25vdC1pbXBvcnRhbnQnOlxuICAgICAgICAgICAgcHJpb3JpdHkuY2hhbmdlUHJpbyhpbmRleCwgZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaW1wb3J0YW50JzpcbiAgICAgICAgICAgIHByaW9yaXR5LmNoYW5nZVByaW8oaW5kZXgsIGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RyYXNoJzpcbiAgICAgICAgICAgIGVkaXREZWxldGUudHJhc2goaW5kZXgpO1xuICAgICAgICAgICAgZGVsZXRlT2JqZWN0KGluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgICAgIGVkaXREZWxldGUuZWRpdChpbmRleCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgIH1cbn0pXG5cbnByaW9yaXR5LmNoZWNrUHJpbygpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=