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


const build = (0,_addingtaskDOM__WEBPACK_IMPORTED_MODULE_0__.taskDOM)();

let projects = [];


function getProjects() {
    projects.push(document.getElementById('project-input').value);
}

function projectDom() {
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
/* harmony export */   "taskDOM": () => (/* binding */ taskDOM)
/* harmony export */ });
/* harmony import */ var _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskobjectfunctions */ "./src/taskobjectfunctions.js");


// adding tasks to the dom

function taskDOM() {
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

    for (let i = 0; i < _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr.length; i++) {
        let index = _taskobjectfunctions__WEBPACK_IMPORTED_MODULE_0__.arr.length - 1;

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
        
        break;
    }
    return { elementFactory }
}



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


    console.log(active.id);
    
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
/* harmony export */   "arr": () => (/* binding */ arr),
/* harmony export */   "deleteObject": () => (/* binding */ deleteObject),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
let arr = [];

function taskCreator(task, about, day) {
    return {
        title: task,
        description: about,
        date: day,
        importance: false
    }
}

function getData() {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    arr.push(taskCreator(title, description, date));
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
            (0,_addingtaskDOM__WEBPACK_IMPORTED_MODULE_3__.taskDOM)();
            task.cancel();
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
        case 'edit':
            editDelete.edit(index);

    }
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ1A7QUFDUztBQUNOO0FBQ0U7QUFDSjtBQUNBO0FBQ2U7QUFDTTs7O0FBRzVELG1CQUFtQixvRUFBaUI7QUFDcEMsaUJBQWlCLHFEQUFTO0FBQzFCLGNBQWMscURBQVM7QUFDdkIsYUFBYSwyREFBZTs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQU87QUFDbkIsWUFBWSx1REFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFXO0FBQ3ZCLFlBQVksNkRBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0RBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvYWRkaW5nUHJvamVjdERPTS5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2FkZGluZ3Rhc2tET00uanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9jb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9lZGl0YW5kZGVsZXRlRE9NLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9pbXBvcnRhbnQuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy90YXNrUG9wVXAuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy90YXNrb2JqZWN0ZnVuY3Rpb25zLmpzIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tET00gfSBmcm9tIFwiLi9hZGRpbmd0YXNrRE9NXCJcblxuY29uc3QgYnVpbGQgPSB0YXNrRE9NKCk7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIHByb2plY3RzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaW5wdXQnKS52YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3REb20oKSB7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdHMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zZWxlY3QnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWlucHV0Jyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGQuZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ25ldy1wcm9qZWN0JywgaWQ6IGBwcm9qZWN0LSR7aW5kZXh9YH0pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7aWQ6IGBuYW1lLSR7aW5kZXh9YCwgY2xhc3M6ICduYW1lJ30pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbmFtZS0ke2luZGV4fWApLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7aWQ6IGBncmlkLSR7aW5kZXh9YCwgaW5kZXg6IGAke2luZGV4fWAsIGNsYXNzOiAnZ3JpZCd9KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2dyaWQtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChidWlsZC5lbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogJy4uL3NyYy9ncmlkLnN2ZycsIGluZGV4OiBgJHtpbmRleH1gfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNuYW1lLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoYnVpbGQuZWxlbWVudEZhY3RvcnkoJ3AnLCAnbm9uZScsIGAke3RpdGxlLnZhbHVlfWApKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7aWQ6IGB0cmFzaC0ke2luZGV4fWAsIGNsYXNzOiAndHJhc2gnfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0cmFzaC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGJ1aWxkLmVsZW1lbnRGYWN0b3J5KCdpbWcnLCB7c3JjOiAnLi4vc3JjL3RyYXNoLnN2ZycsIGluZGV4OiBgJHtpbmRleH1gfSkpO1xuXG59XG5cbmV4cG9ydCB7IHByb2plY3REb20sIGdldFByb2plY3RzIH0iLCJpbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi90YXNrb2JqZWN0ZnVuY3Rpb25zXCJcblxuLy8gYWRkaW5nIHRhc2tzIHRvIHRoZSBkb21cblxuZnVuY3Rpb24gdGFza0RPTSgpIHtcbiAgICBjb25zdCBlbGVtZW50RmFjdG9yeSA9ICh0eXBlLCBhdHRyaWJ1dGVzLCB0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY3JlYXRlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGFyci5sZW5ndGggLSAxO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICduZXctdGFzaycsIGlkOiBgdGFzay0ke2luZGV4fWAsIGluZGV4OiBgJHtpbmRleH1gfSkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdsZWZ0LXNpZGUnLCBpZDogYGxlZnQtJHtpbmRleH1gfSkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdpbmZvJywgaWQ6IGBpbmZvLSR7aW5kZXh9YH0pKVxuXG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGVmdC0ke2luZGV4fWApO1xuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdidXR0b24nLCB7dHlwZTogJ2J1dHRvbicsIGlkOiBgY2hlY2stJHtpbmRleH1gLCBkYXRhOiAnbm9uLWNvbXBsZXRlZCcsIGluZGV4OiBgJHtpbmRleH1gfSkpO1xuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdwcm9qZWN0LXRleHQnLCBpZDogYHByb2plY3QtJHtpbmRleH1gfSkpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7YXJyW2luZGV4XS50aXRsZX1gKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLCAnbm9uZScsIGAke2FycltpbmRleF0uZGVzY3JpcHRpb259YCkpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbmZvLSR7aW5kZXh9YCk7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLCAnbm9uZScsIGAke2FycltpbmRleF0uZGF0ZX1gKSk7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogYHN0YXItJHtpbmRleH1gLCBjbGFzczogJ2Rpc3BsYXllZCcsIGRhdGE6ICdub3QtaW1wb3J0YW50J30pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N0YXItJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogXCIuLi9zcmMvc3Rhci5zdmdcIiwgaW5kZXg6IGAke2luZGV4fWAsIGRhdGE6ICdub3QtaW1wb3J0YW50J30pKTtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiBgaW1wb3J0YW50LSR7aW5kZXh9YCwgY2xhc3M6ICdub3QtZGlzcGxheWVkJywgZGF0YTogJ2ltcG9ydGFudCd9KSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbXBvcnRhbnQtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogXCIuLi9zcmMvc3Rhci1jaGVjay5zdmdcIiwgaW5kZXg6IGAke2luZGV4fWAsIGRhdGE6ICdpbXBvcnRhbnQnfSkpO1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdlZGl0JywgaW5kZXg6IGAke2luZGV4fWAsIGRhdGE6ICdlZGl0JywgaWQ6IGBlZGl0LSR7aW5kZXh9YH0pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXQtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogJy4uL3NyYy9wZW5jaWwuc3ZnJywgaW5kZXg6IGAke2luZGV4fWAsIGRhdGE6ICdlZGl0JyB9KSlcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAndHJhc2gnLCBpbmRleDogYCR7aW5kZXh9YCwgZGF0YTogJ3RyYXNoJywgaWQ6IGB0cmFzaC0ke2luZGV4fWB9KSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0cmFzaC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdpbWcnLCB7c3JjOiAnLi4vc3JjL3RyYXNoLnN2ZycsIGluZGV4OiBgJHtpbmRleH1gLCBkYXRhOiAndHJhc2gnIH0pKVxuICAgICAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB7IGVsZW1lbnRGYWN0b3J5IH1cbn1cblxuZXhwb3J0IHsgdGFza0RPTSB9IiwiaW1wb3J0IHsgYXJyIH0gZnJvbSBcIi4vdGFza29iamVjdGZ1bmN0aW9uc1wiXG5cbmxldCBkb25lVGFzayA9IFtdO1xuXG5mdW5jdGlvbiBjb21wbGV0ZWQoKSB7XG4gICAgY29uc3QgY2hhbmdlQ2hlY2sgPSAoaWQsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xuICAgICAgICBjb25zdCB0aGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2stJHtpbmRleH1gKTtcblxuICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrJyk7XG4gICAgICAgICAgICB0aGVUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZC10YXNrJyk7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhJywgJ25vbi1jb21wbGV0ZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuICAgICAgICAgICAgdGhlVGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YScsICdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVkQXJyYXkgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgZG9uZVRhc2sucHVzaChhcnJbaW5kZXhdKTtcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvbmVUYXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmNvbXBsZXRlZEFycmF5ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGFyci5wdXNoKGRvbmVUYXNrW2luZGV4XSk7XG4gICAgICAgIGRvbmVUYXNrLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvbmVUYXNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGFuZ2VDaGVjayxcbiAgICAgICAgY29tcGxldGVkQXJyYXksXG4gICAgICAgIHVuY29tcGxldGVkQXJyYXlcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNvbXBsZXRlZCB9IiwiaW1wb3J0IHsgYWRkVGFza1Byb2plY3RzIH0gZnJvbSBcIi4vdGFza1BvcFVwXCJcbmltcG9ydCB7IGFyciwgZGVsZXRlT2JqZWN0IH0gZnJvbSBcIi4vdGFza29iamVjdGZ1bmN0aW9uc1wiXG5cbmNvbnN0IHRhc2tQb3AgPSBhZGRUYXNrUHJvamVjdHMoKTtcblxuZnVuY3Rpb24gdGFza0ljb25GdW5jdGlvbnMoKSB7XG4gICAgY29uc3QgdHJhc2ggPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtpbmRleH1gKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2stJHtpbmRleH1gKTtcbiAgICAgICAgY29uc3QgbnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2stJHtpbmRleH1gKS5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGFyZ2V0Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIGNoaWxkID0gdGFyZ2V0Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBlZGl0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgICAgICBcbiAgICAgICAgdHJhc2goaW5kZXgpO1xuICAgICAgICBkZWxldGVPYmplY3QoaW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgdGl0bGUudmFsdWUgPSBgJHthcnJbaW5kZXhdLnRpdGxlfWBcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBgJHthcnJbaW5kZXhdLmRlc2NyaXB0aW9ufWBcbiAgICAgICAgZGF0ZS52YWx1ZSA9IGAke2FycltpbmRleF0uZGF0ZX1gXG4gICAgICAgIHRhc2tQb3AudGFzaygpO1xuXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHRyYXNoLFxuICAgICAgICBlZGl0XG4gICAgfVxufVxuXG5leHBvcnQgeyB0YXNrSWNvbkZ1bmN0aW9ucyB9IiwiLy8gc3dpdGNoaW5nIHRoZSBhY3RpdmUgaGlnaGxpZ2h0c1xuXG5sZXQgaWNvbkNsYXNzID0gW3tcbiAgICBpZDogJ2FsbCcsXG4gICAgY2xhc3M6ICdpY29ucy1hY3RpdmUnXG59LCB7XG4gICAgaWQ6ICdpbXBvcnRhbnQnLFxuICAgIGNsYXNzOiAnaWNvbnMnXG59LCB7XG4gICAgaWQ6ICd0b2RheScsXG4gICAgY2xhc3M6ICdpY29ucydcbn0sIHtcbiAgICBpZDogJ3VwY29taW5nJyxcbiAgICBjbGFzczogJ2ljb25zJ1xufV07XG5cbmZ1bmN0aW9uIGZvY3VzRWZmZWN0cyhjbGljaykge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbGljayk7XG4gICAgY29uc3QgYWN0aXZlID0gaWNvbkNsYXNzLmZpbmQoZSA9PiBlLmNsYXNzID09PSAnaWNvbnMtYWN0aXZlJyk7XG4gICAgY29uc3Qgbm93QWN0aXZlID0gaWNvbkNsYXNzLmZpbmQoZSA9PiBlLmlkID09PSBgJHtjbGlja31gKTtcbiAgICBjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthY3RpdmUuaWR9YCk7XG4gICAgXG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucy1hY3RpdmUnKTtcbiAgICBoaWdobGlnaHQuY2xhc3NMaXN0LnRvZ2dsZSgnaWNvbnMtYWN0aXZlJyk7XG4gICAgYWN0aXZlLmNsYXNzID0gJ2ljb25zJztcbiAgICBub3dBY3RpdmUuY2xhc3MgPSAnaWNvbnMtYWN0aXZlJztcblxuXG4gICAgY29uc29sZS5sb2coYWN0aXZlLmlkKTtcbiAgICBcbiAgICAgICAgY29uc3QgY3VycmVudENhdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXQtJHtub3dBY3RpdmUuaWR9YCk7XG4gICAgICAgIGNvbnN0IHBDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2F0LSR7YWN0aXZlLmlkfWApXG4gICAgICAgIGN1cnJlbnRDYXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHBDYXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBcbn1cblxuZXhwb3J0IHsgZm9jdXNFZmZlY3RzIH07IiwiaW1wb3J0IHsgYXJyIH0gZnJvbSBcIi4vdGFza29iamVjdGZ1bmN0aW9uc1wiXG5cbmZ1bmN0aW9uIGltcG9ydGFudCgpIHtcbiAgICBjb25zdCBzdGFyRG9tID0gKGluZGV4LCBkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdEltcG9ydGFudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGFyLSR7aW5kZXh9YCk7XG4gICAgICAgIGNvbnN0IGlzSW1wb3J0YW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGltcG9ydGFudC0ke2luZGV4fWApO1xuXG4gICAgICAgIGlmIChkYXRhID09PSAnbm90LWltcG9ydGFudCcpIHtcbiAgICAgICAgICAgIGlzSW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZCcpO1xuICAgICAgICAgICAgaXNJbXBvcnRhbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbm90LWRpc3BsYXllZCcpO1xuICAgICAgICAgICAgbm90SW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ25vdC1kaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIG5vdEltcG9ydGFudC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhID09PSAnaW1wb3J0YW50Jykge1xuICAgICAgICAgICAgbm90SW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZCcpO1xuICAgICAgICAgICAgbm90SW1wb3J0YW50LmNsYXNzTGlzdC50b2dnbGUoJ25vdC1kaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIGlzSW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ25vdC1kaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIGlzSW1wb3J0YW50LmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXllZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlUHJpbyA9IChpbmRleCwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSA9PT0gJ25vdC1pbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICBhcnJbaW5kZXhdLmltcG9ydGFuY2UgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZCBiZSB0cnVlJylcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhID09PSAnaW1wb3J0YW50Jykge1xuICAgICAgICAgICAgYXJyW2luZGV4XS5pbXBvcnRhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkIGJlIGZhbHNlJylcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJEb20sXG4gICAgICAgIGNoYW5nZVByaW9cbiAgICB9XG59XG5cbmV4cG9ydCB7IGltcG9ydGFudCB9IiwiXG5cbi8vRG9tIHBvcCB1cHMgZm9yIGFkZGluZyBwcm9qZWN0cyBhbmQgdGFza3NcblxuY29uc3QgYWRkVGFza1Byb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Jyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1wb3B1cCcpO1xuXG4gICAgXG4gICAgY29uc3QgdGFzayA9ICgpID0+IHtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbnB1dCcpO1xuICAgICAgICBcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICAgICAgcHJvamVjdC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrLFxuICAgICAgICBjYW5jZWwsXG4gICAgICAgIHByb2plY3RcbiAgICB9XG59XG5cbmV4cG9ydCB7IGFkZFRhc2tQcm9qZWN0cyB9OyIsImV4cG9ydCBsZXQgYXJyID0gW107XG5cbmZ1bmN0aW9uIHRhc2tDcmVhdG9yKHRhc2ssIGFib3V0LCBkYXkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogdGFzayxcbiAgICAgICAgZGVzY3JpcHRpb246IGFib3V0LFxuICAgICAgICBkYXRlOiBkYXksXG4gICAgICAgIGltcG9ydGFuY2U6IGZhbHNlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXRhKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWVcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGFyci5wdXNoKHRhc2tDcmVhdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVPYmplY3QoaW5kZXgpIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEF0dHJpYnV0ZSh0aXRsZSwgaW5kZXgpIHtcbiAgICBhcnJbaW5kZXhdLnByb2plY3QgPSB0aXRsZTtcbn1cblxuXG5cbmV4cG9ydCB7IGdldERhdGEsIGRlbGV0ZU9iamVjdCwgYWRkUHJvamVjdEF0dHJpYnV0ZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGRUYXNrUHJvamVjdHMgfSBmcm9tIFwiLi90YXNrUG9wVXBcIlxuaW1wb3J0IHsgZm9jdXNFZmZlY3RzIH0gZnJvbSBcIi4vaWNvbnNcIlxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuL3Rhc2tvYmplY3RmdW5jdGlvbnNcIlxuaW1wb3J0IHsgdGFza0RPTSB9IGZyb20gXCIuL2FkZGluZ3Rhc2tET01cIlxuaW1wb3J0IHsgYXJyIH0gZnJvbSBcIi4vdGFza29iamVjdGZ1bmN0aW9uc1wiXG5pbXBvcnQgeyBjb21wbGV0ZWQgfSBmcm9tIFwiLi9jb21wbGV0ZWRcIlxuaW1wb3J0IHsgaW1wb3J0YW50IH0gZnJvbSBcIi4vaW1wb3J0YW50XCJcbmltcG9ydCB7IHRhc2tJY29uRnVuY3Rpb25zIH0gZnJvbSBcIi4vZWRpdGFuZGRlbGV0ZURPTVwiXG5pbXBvcnQgeyBwcm9qZWN0RG9tLCBnZXRQcm9qZWN0cyB9IGZyb20gXCIuL2FkZGluZ1Byb2plY3RET01cIlxuXG5cbmNvbnN0IGVkaXREZWxldGUgPSB0YXNrSWNvbkZ1bmN0aW9ucygpO1xuY29uc3QgcHJpb3JpdHkgPSBpbXBvcnRhbnQoKTtcbmNvbnN0IGNoZWNrID0gY29tcGxldGVkKCk7XG5jb25zdCB0YXNrID0gYWRkVGFza1Byb2plY3RzKCk7XG5cbi8vIGFsbCBidXR0b24gYW5kIGV2ZW50IGxpc3RlbmVyc1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZDtcbiAgICBjb25zdCBkYXRhID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XG5cbiAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgIGNhc2UgJ2FkZC10YXNrJzpcbiAgICAgICAgICAgIHRhc2sudGFzaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NhbmNlbCc6XG4gICAgICAgICAgICB0YXNrLmNhbmNlbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgICAgICBnZXREYXRhKCk7XG4gICAgICAgICAgICB0YXNrRE9NKCk7XG4gICAgICAgICAgICB0YXNrLmNhbmNlbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Byb2plY3QtYWRkJzpcbiAgICAgICAgICAgIHRhc2sucHJvamVjdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Byb2plY3QtY2FuY2VsJzpcbiAgICAgICAgICAgIHRhc2suY2FuY2VsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWRkLXByb2plY3QnOlxuICAgICAgICAgICAgZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgICAgIHByb2plY3REb20oKTtcbiAgICAgICAgICAgIHRhc2suY2FuY2VsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3dpdGNoIChkYXRhKSB7XG4gICAgICAgIGNhc2UgJ29yZ2FuaXplJzpcbiAgICAgICAgICAgIGZvY3VzRWZmZWN0cyhpZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbm9uLWNvbXBsZXRlZCc6XG4gICAgICAgICAgICBjaGVjay5jaGFuZ2VDaGVjayhpZCwgaW5kZXgpO1xuICAgICAgICAgICAgY2hlY2suY29tcGxldGVkQXJyYXkoaW5kZXgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbXBsZXRlZCc6XG4gICAgICAgICAgICBjaGVjay5jaGFuZ2VDaGVjayhpZCwgaW5kZXgpO1xuICAgICAgICAgICAgY2hlY2sudW5jb21wbGV0ZWRBcnJheShpbmRleCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbm90LWltcG9ydGFudCc6XG4gICAgICAgICAgICBwcmlvcml0eS5zdGFyRG9tKGluZGV4LCBkYXRhKTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNoYW5nZVByaW8oaW5kZXgsIGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ltcG9ydGFudCc6XG4gICAgICAgICAgICBwcmlvcml0eS5zdGFyRG9tKGluZGV4LCBkYXRhKTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNoYW5nZVByaW8oaW5kZXgsIGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RyYXNoJzpcbiAgICAgICAgICAgIGVkaXREZWxldGUudHJhc2goaW5kZXgpO1xuICAgICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgICAgIGVkaXREZWxldGUuZWRpdChpbmRleCk7XG5cbiAgICB9XG59KVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9