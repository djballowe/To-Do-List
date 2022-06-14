/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addingtask.js":
/*!***************************!*\
  !*** ./src/addingtask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arr": () => (/* binding */ arr),
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
/* harmony import */ var _addingtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addingtask */ "./src/addingtask.js");


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

    for (let i = 0; i < _addingtask__WEBPACK_IMPORTED_MODULE_0__.arr.length; i++) {
        let index = _addingtask__WEBPACK_IMPORTED_MODULE_0__.arr.length - 1;

        document.querySelector('.tasks').appendChild(elementFactory('div', {class: 'new-task', id: `task-${index}`, index: `${index}`}));
        document.querySelector(`#task-${index}`).appendChild(elementFactory('div', {class: 'left-side', id: `left-${index}`}));
        document.querySelector(`#task-${index}`).appendChild(elementFactory('div', {class: 'info', id: `info-${index}`}))

        const left = document.querySelector(`#left-${index}`);
        left.appendChild(elementFactory('button', {type: 'button', id: `check-${index}`, data: 'non-completed', index: `${index}`}));
        left.appendChild(elementFactory('div', {class: 'project-text', id: `project-${index}`}))

        document.querySelector(`#project-${index}`).appendChild(elementFactory('p', 'none', `${_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index].title}`));
        document.querySelector(`#project-${index}`).appendChild(elementFactory('p', 'none', `${_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index].description}`));
        
        const info = document.querySelector(`#info-${index}`);
        info.appendChild(elementFactory('p', 'none', `${_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index].date}`));
        info.appendChild(elementFactory('div', {id: `star-${index}`, class: 'displayed', data: 'not-important'}));
        document.querySelector(`#star-${index}`).appendChild(elementFactory('img', {src: "../src/star.svg", index: `${index}`, data: 'not-important'}));
        info.appendChild(elementFactory('div', {id: `important-${index}`, class: 'not-displayed'}));
        document.querySelector(`#important-${index}`).appendChild(elementFactory('img', {src: "../src/star-check.svg"}));
        info.appendChild(elementFactory('div', {id: `dots-${index}`}));
        document.querySelector(`#dots-${index}`).appendChild(elementFactory('img', {src: "../src/dots.svg", index: `${index}`}));
        
        break;
    }
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
/* harmony import */ var _addingtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addingtask */ "./src/addingtask.js");


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
        doneTask.push(_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index]);
        _addingtask__WEBPACK_IMPORTED_MODULE_0__.arr.splice(index, 1);
        console.log(_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr);
        console.log(doneTask);
    }

    const uncompletedArray = (index) => {
        _addingtask__WEBPACK_IMPORTED_MODULE_0__.arr.push(doneTask[index]);
        doneTask.splice(index, 1);
        console.log(_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr);
        console.log(doneTask);
    }

    return {
        changeCheck,
        completedArray,
        uncompletedArray
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
/* harmony import */ var _addingtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addingtask */ "./src/addingtask.js");


function important() {
    const starDom = (index) => {
        const notImportant = document.getElementById(`star-${index}`);
        const isImportant = document.getElementById(`important-${index}`);

        if (notImportant.classList.contains('displayed')) {
            notImportant.classList.toggle('displayed');
            notImportant.classList.add('not-displayed');
            isImportant.classList.toggle('not-displayed');
            isImportant.classList.add('displayed');
        } else {
            notImportant.classList.toggle('displayed');
            notImportant.classList.toggle('not-displayed');
            isImportant.classList.toggle('displayed');
            isImportant.classList.toggle('not-displayed');
            
        }
    }
    return {
        starDom
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
        const project = document.getElementById('project-popup');
        
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
/* harmony import */ var _addingtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addingtask */ "./src/addingtask.js");
/* harmony import */ var _addingtaskDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addingtaskDOM */ "./src/addingtaskDOM.js");
/* harmony import */ var _completed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./completed */ "./src/completed.js");
/* harmony import */ var _important__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./important */ "./src/important.js");









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
            (0,_addingtask__WEBPACK_IMPORTED_MODULE_2__.getData)();
            (0,_addingtaskDOM__WEBPACK_IMPORTED_MODULE_3__.taskDOM)();
            task.cancel();
            break;
        case 'project-add':
            task.project();
            break;
        case 'project-cancel':
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
            priority.starDom(index);
        case 'important':
            priority.starDom(index);
    }
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ1A7QUFDQTtBQUNHO0FBQ1A7QUFDSztBQUNBOzs7QUFHdkMsaUJBQWlCLHFEQUFTO0FBQzFCLGNBQWMscURBQVM7QUFDdkIsYUFBYSwyREFBZTs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFPO0FBQ25CLFlBQVksdURBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0RBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2FkZGluZ3Rhc2suanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9hZGRpbmd0YXNrRE9NLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvY29tcGxldGVkLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9pbXBvcnRhbnQuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy90YXNrUG9wVXAuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBhcnIgPSBbXTtcblxuZnVuY3Rpb24gdGFza0NyZWF0b3IodGFzaywgYWJvdXQsIGRheSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0YXNrLFxuICAgICAgICBkZXNjcmlwdGlvbjogYWJvdXQsXG4gICAgICAgIGRhdGU6IGRheSxcbiAgICAgICAgaW1wb3J0YW5jZTogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgYXJyLnB1c2godGFza0NyZWF0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSk7XG59XG5cblxuXG5leHBvcnQgeyBnZXREYXRhIH0iLCJpbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi9hZGRpbmd0YXNrXCJcblxuLy8gYWRkaW5nIHRhc2tzIHRvIHRoZSBkb21cblxuZnVuY3Rpb24gdGFza0RPTSgpIHtcbiAgICBjb25zdCBlbGVtZW50RmFjdG9yeSA9ICh0eXBlLCBhdHRyaWJ1dGVzLCB0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY3JlYXRlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGFyci5sZW5ndGggLSAxO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICduZXctdGFzaycsIGlkOiBgdGFzay0ke2luZGV4fWAsIGluZGV4OiBgJHtpbmRleH1gfSkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdsZWZ0LXNpZGUnLCBpZDogYGxlZnQtJHtpbmRleH1gfSkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdpbmZvJywgaWQ6IGBpbmZvLSR7aW5kZXh9YH0pKVxuXG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGVmdC0ke2luZGV4fWApO1xuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdidXR0b24nLCB7dHlwZTogJ2J1dHRvbicsIGlkOiBgY2hlY2stJHtpbmRleH1gLCBkYXRhOiAnbm9uLWNvbXBsZXRlZCcsIGluZGV4OiBgJHtpbmRleH1gfSkpO1xuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdwcm9qZWN0LXRleHQnLCBpZDogYHByb2plY3QtJHtpbmRleH1gfSkpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7YXJyW2luZGV4XS50aXRsZX1gKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLCAnbm9uZScsIGAke2FycltpbmRleF0uZGVzY3JpcHRpb259YCkpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbmZvLSR7aW5kZXh9YCk7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLCAnbm9uZScsIGAke2FycltpbmRleF0uZGF0ZX1gKSk7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogYHN0YXItJHtpbmRleH1gLCBjbGFzczogJ2Rpc3BsYXllZCcsIGRhdGE6ICdub3QtaW1wb3J0YW50J30pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N0YXItJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogXCIuLi9zcmMvc3Rhci5zdmdcIiwgaW5kZXg6IGAke2luZGV4fWAsIGRhdGE6ICdub3QtaW1wb3J0YW50J30pKTtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiBgaW1wb3J0YW50LSR7aW5kZXh9YCwgY2xhc3M6ICdub3QtZGlzcGxheWVkJ30pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltcG9ydGFudC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdpbWcnLCB7c3JjOiBcIi4uL3NyYy9zdGFyLWNoZWNrLnN2Z1wifSkpO1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7aWQ6IGBkb3RzLSR7aW5kZXh9YH0pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2RvdHMtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW1nJywge3NyYzogXCIuLi9zcmMvZG90cy5zdmdcIiwgaW5kZXg6IGAke2luZGV4fWB9KSk7XG4gICAgICAgIFxuICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCB7IHRhc2tET00gfSIsImltcG9ydCB7IGFyciB9IGZyb20gXCIuL2FkZGluZ3Rhc2tcIlxuXG5sZXQgZG9uZVRhc2sgPSBbXTtcblxuZnVuY3Rpb24gY29tcGxldGVkKCkge1xuICAgIGNvbnN0IGNoYW5nZUNoZWNrID0gKGlkLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKTtcbiAgICAgICAgY29uc3QgdGhlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrLSR7aW5kZXh9YCk7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrJykpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdjaGVjaycpO1xuICAgICAgICAgICAgdGhlVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YScsICdub24tY29tcGxldGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICAgICAgICAgIHRoZVRhc2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLXRhc2snKTtcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCAnY29tcGxldGVkJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSAgIFxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlZEFycmF5ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGRvbmVUYXNrLnB1c2goYXJyW2luZGV4XSk7XG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgICAgICBjb25zb2xlLmxvZyhkb25lVGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5jb21wbGV0ZWRBcnJheSA9IChpbmRleCkgPT4ge1xuICAgICAgICBhcnIucHVzaChkb25lVGFza1tpbmRleF0pO1xuICAgICAgICBkb25lVGFzay5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgICAgICBjb25zb2xlLmxvZyhkb25lVGFzayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hhbmdlQ2hlY2ssXG4gICAgICAgIGNvbXBsZXRlZEFycmF5LFxuICAgICAgICB1bmNvbXBsZXRlZEFycmF5XG4gICAgfVxufVxuXG5leHBvcnQgeyBjb21wbGV0ZWQgfSIsIi8vIHN3aXRjaGluZyB0aGUgYWN0aXZlIGhpZ2hsaWdodHNcblxubGV0IGljb25DbGFzcyA9IFt7XG4gICAgaWQ6ICdhbGwnLFxuICAgIGNsYXNzOiAnaWNvbnMtYWN0aXZlJ1xufSwge1xuICAgIGlkOiAnaW1wb3J0YW50JyxcbiAgICBjbGFzczogJ2ljb25zJ1xufSwge1xuICAgIGlkOiAndG9kYXknLFxuICAgIGNsYXNzOiAnaWNvbnMnXG59LCB7XG4gICAgaWQ6ICd1cGNvbWluZycsXG4gICAgY2xhc3M6ICdpY29ucydcbn1dO1xuXG5mdW5jdGlvbiBmb2N1c0VmZmVjdHMoY2xpY2spIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xpY2spO1xuICAgIGNvbnN0IGFjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5jbGFzcyA9PT0gJ2ljb25zLWFjdGl2ZScpO1xuICAgIGNvbnN0IG5vd0FjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5pZCA9PT0gYCR7Y2xpY2t9YCk7XG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YWN0aXZlLmlkfWApO1xuICAgIFxuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMtYWN0aXZlJyk7XG4gICAgaGlnaGxpZ2h0LmNsYXNzTGlzdC50b2dnbGUoJ2ljb25zLWFjdGl2ZScpO1xuICAgIGFjdGl2ZS5jbGFzcyA9ICdpY29ucyc7XG4gICAgbm93QWN0aXZlLmNsYXNzID0gJ2ljb25zLWFjdGl2ZSc7XG59XG5cbmV4cG9ydCB7IGZvY3VzRWZmZWN0cyB9OyIsImltcG9ydCB7IGFyciB9IGZyb20gXCIuL2FkZGluZ3Rhc2tcIlxuXG5mdW5jdGlvbiBpbXBvcnRhbnQoKSB7XG4gICAgY29uc3Qgc3RhckRvbSA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBub3RJbXBvcnRhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3Rhci0ke2luZGV4fWApO1xuICAgICAgICBjb25zdCBpc0ltcG9ydGFudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbXBvcnRhbnQtJHtpbmRleH1gKTtcblxuICAgICAgICBpZiAobm90SW1wb3J0YW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheWVkJykpIHtcbiAgICAgICAgICAgIG5vdEltcG9ydGFudC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIG5vdEltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdub3QtZGlzcGxheWVkJyk7XG4gICAgICAgICAgICBpc0ltcG9ydGFudC5jbGFzc0xpc3QudG9nZ2xlKCdub3QtZGlzcGxheWVkJyk7XG4gICAgICAgICAgICBpc0ltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vdEltcG9ydGFudC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIG5vdEltcG9ydGFudC5jbGFzc0xpc3QudG9nZ2xlKCdub3QtZGlzcGxheWVkJyk7XG4gICAgICAgICAgICBpc0ltcG9ydGFudC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIGlzSW1wb3J0YW50LmNsYXNzTGlzdC50b2dnbGUoJ25vdC1kaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJEb21cbiAgICB9XG59XG5cbmV4cG9ydCB7IGltcG9ydGFudCB9IiwiXG5cbi8vRG9tIHBvcCB1cHMgZm9yIGFkZGluZyBwcm9qZWN0cyBhbmQgdGFza3NcblxuY29uc3QgYWRkVGFza1Byb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Jyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1wb3B1cCcpO1xuXG4gICAgXG4gICAgY29uc3QgdGFzayA9ICgpID0+IHtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1wb3B1cCcpO1xuICAgICAgICBcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICAgICAgcHJvamVjdC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrLFxuICAgICAgICBjYW5jZWwsXG4gICAgICAgIHByb2plY3RcbiAgICB9XG59XG5cbmV4cG9ydCB7IGFkZFRhc2tQcm9qZWN0cyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkVGFza1Byb2plY3RzIH0gZnJvbSBcIi4vdGFza1BvcFVwXCJcbmltcG9ydCB7IGZvY3VzRWZmZWN0cyB9IGZyb20gXCIuL2ljb25zXCJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi9hZGRpbmd0YXNrXCJcbmltcG9ydCB7IHRhc2tET00gfSBmcm9tIFwiLi9hZGRpbmd0YXNrRE9NXCJcbmltcG9ydCB7IGFyciB9IGZyb20gXCIuL2FkZGluZ3Rhc2tcIlxuaW1wb3J0IHsgY29tcGxldGVkIH0gZnJvbSBcIi4vY29tcGxldGVkXCJcbmltcG9ydCB7IGltcG9ydGFudCB9IGZyb20gXCIuL2ltcG9ydGFudFwiXG5cblxuY29uc3QgcHJpb3JpdHkgPSBpbXBvcnRhbnQoKTtcbmNvbnN0IGNoZWNrID0gY29tcGxldGVkKCk7XG5jb25zdCB0YXNrID0gYWRkVGFza1Byb2plY3RzKCk7XG5cbi8vIGFsbCBidXR0b24gYW5kIGV2ZW50IGxpc3RlbmVyc1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZDtcbiAgICBjb25zdCBkYXRhID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XG4gICAgXG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgICBjYXNlICdhZGQtdGFzayc6XG4gICAgICAgICAgICB0YXNrLnRhc2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgICAgICAgdGFzay5jYW5jZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgICAgZ2V0RGF0YSgpO1xuICAgICAgICAgICAgdGFza0RPTSgpO1xuICAgICAgICAgICAgdGFzay5jYW5jZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcm9qZWN0LWFkZCc6XG4gICAgICAgICAgICB0YXNrLnByb2plY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcm9qZWN0LWNhbmNlbCc6XG4gICAgICAgICAgICB0YXNrLmNhbmNlbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN3aXRjaCAoZGF0YSkge1xuICAgICAgICBjYXNlICdvcmdhbml6ZSc6XG4gICAgICAgICAgICBmb2N1c0VmZmVjdHMoaWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25vbi1jb21wbGV0ZWQnOlxuICAgICAgICAgICAgY2hlY2suY2hhbmdlQ2hlY2soaWQsIGluZGV4KTtcbiAgICAgICAgICAgIGNoZWNrLmNvbXBsZXRlZEFycmF5KGluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgICAgICAgY2hlY2suY2hhbmdlQ2hlY2soaWQsIGluZGV4KTtcbiAgICAgICAgICAgIGNoZWNrLnVuY29tcGxldGVkQXJyYXkoaW5kZXgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25vdC1pbXBvcnRhbnQnOlxuICAgICAgICAgICAgcHJpb3JpdHkuc3RhckRvbShpbmRleCk7XG4gICAgICAgIGNhc2UgJ2ltcG9ydGFudCc6XG4gICAgICAgICAgICBwcmlvcml0eS5zdGFyRG9tKGluZGV4KTtcbiAgICB9XG59KVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9