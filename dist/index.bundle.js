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

        document.querySelector('.tasks').appendChild(elementFactory('div', {class: 'new-task', id: `task-${index}`}));
        document.querySelector(`#task-${index}`).appendChild(elementFactory('div', {class: 'left-side', id: `left-${index}`}));
        document.querySelector(`#task-${index}`).appendChild(elementFactory('div', {class: 'info', id: `info-${index}`}))

        const left = document.querySelector(`#left-${index}`);
        left.appendChild(elementFactory('button', {class: 'check', type: 'button'}));
        left.appendChild(elementFactory('div', {class: 'project-text', id: `project-${index}`}))

        document.querySelector(`#project-${index}`).appendChild(elementFactory('p', 'none', `${_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index].title}`));
        document.querySelector(`#project-${index}`).appendChild(elementFactory('p', 'none', `${_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index].description}`));
        
        const info = document.querySelector(`#info-${index}`);
        info.appendChild(elementFactory('p', 'none', `${_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index].date}`));
        info.appendChild(elementFactory('svg', {style: "width:24px;height:24px", viewBox: "0 0 24 24", id: `star-${index}`}));
        document.querySelector(`#star-${index}`).appendChild(elementFactory('path', {fill: "currentColor", d: "M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17.8 21.2L15 18.2L16.2 17L17.8 18.6L21.4 15L22.6 16.4L17.8 21.2"}))
        info.appendChild(elementFactory('svg', {style: "width:24px;height:24px", viewBox: "0 0 24 24", id: `important-${index}`}))
        document.querySelector(`#important-${index}`).appendChild(elementFactory('path', {fill: "currentColor", d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"}))
        
        break;
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








const task = (0,_taskPopUp__WEBPACK_IMPORTED_MODULE_0__.addTaskProjects)();

// all button and event listeners

document.querySelector('body').addEventListener('click', function(e) {
    const id = e.target.id;
    const data = e.target.getAttribute('data');
    
    
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
    }
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJrQzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLElBQUksbURBQVUsRUFBRTtBQUNwQyxvQkFBb0IsbURBQVU7O0FBRTlCLDRFQUE0RSwrQkFBK0IsTUFBTSxFQUFFO0FBQ25ILHdDQUF3QyxNQUFNLHNDQUFzQyxnQ0FBZ0MsTUFBTSxFQUFFO0FBQzVILHdDQUF3QyxNQUFNLHNDQUFzQywyQkFBMkIsTUFBTSxFQUFFOztBQUV2SCxxREFBcUQsTUFBTTtBQUMzRCxtREFBbUQsK0JBQStCO0FBQ2xGLGdEQUFnRCxzQ0FBc0MsTUFBTSxFQUFFOztBQUU5RiwyQ0FBMkMsTUFBTSw4Q0FBOEMsNENBQUcsY0FBYztBQUNoSCwyQ0FBMkMsTUFBTSw4Q0FBOEMsNENBQUcsb0JBQW9CO0FBQ3RIO0FBQ0EscURBQXFELE1BQU07QUFDM0Qsd0RBQXdELDRDQUFHLGFBQWE7QUFDeEUsZ0RBQWdELG1CQUFtQixnREFBZ0QsTUFBTSxFQUFFO0FBQzNILHdDQUF3QyxNQUFNLHVDQUF1QywyU0FBMlM7QUFDaFksZ0RBQWdELG1CQUFtQixxREFBcUQsTUFBTSxFQUFFO0FBQ2hJLDZDQUE2QyxNQUFNLHVDQUF1QywyT0FBMk87QUFDclU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsTUFBTTtBQUM1RCxpREFBaUQsVUFBVTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ1A7QUFDQTtBQUNHOzs7OztBQUt6QyxhQUFhLDJEQUFlOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQU87QUFDbkIsWUFBWSx1REFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0RBQVk7QUFDeEI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2FkZGluZ3Rhc2suanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9hZGRpbmd0YXNrRE9NLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy90YXNrUG9wVXAuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBhcnIgPSBbXTtcblxuZnVuY3Rpb24gdGFza0NyZWF0b3IodGFzaywgYWJvdXQsIGRheSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0YXNrLFxuICAgICAgICBkZXNjcmlwdGlvbjogYWJvdXQsXG4gICAgICAgIGRhdGU6IGRheSxcbiAgICAgICAgaW1wb3J0YW5jZTogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgYXJyLnB1c2godGFza0NyZWF0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSk7XG59XG5cblxuXG5leHBvcnQgeyBnZXREYXRhIH0iLCJpbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi9hZGRpbmd0YXNrXCJcblxuLy8gYWRkaW5nIHRhc2tzIHRvIHRoZSBkb21cblxuZnVuY3Rpb24gdGFza0RPTSgpIHtcbiAgICBjb25zdCBlbGVtZW50RmFjdG9yeSA9ICh0eXBlLCBhdHRyaWJ1dGVzLCB0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY3JlYXRlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGFyci5sZW5ndGggLSAxO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICduZXctdGFzaycsIGlkOiBgdGFzay0ke2luZGV4fWB9KSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2xlZnQtc2lkZScsIGlkOiBgbGVmdC0ke2luZGV4fWB9KSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2luZm8nLCBpZDogYGluZm8tJHtpbmRleH1gfSkpXG5cbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsZWZ0LSR7aW5kZXh9YCk7XG4gICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsIHtjbGFzczogJ2NoZWNrJywgdHlwZTogJ2J1dHRvbid9KSk7XG4gICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ3Byb2plY3QtdGV4dCcsIGlkOiBgcHJvamVjdC0ke2luZGV4fWB9KSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHthcnJbaW5kZXhdLnRpdGxlfWApKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7YXJyW2luZGV4XS5kZXNjcmlwdGlvbn1gKSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2luZm8tJHtpbmRleH1gKTtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7YXJyW2luZGV4XS5kYXRlfWApKTtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnc3ZnJywge3N0eWxlOiBcIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiwgdmlld0JveDogXCIwIDAgMjQgMjRcIiwgaWQ6IGBzdGFyLSR7aW5kZXh9YH0pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N0YXItJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncGF0aCcsIHtmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBkOiBcIk01LjggMjFMNy40IDE0TDIgOS4yTDkuMiA4LjZMMTIgMkwxNC44IDguNkwyMiA5LjJMMTguOCAxMkgxOEMxNy4zIDEyIDE2LjYgMTIuMSAxNS45IDEyLjRMMTguMSAxMC41TDEzLjcgMTAuMUwxMiA2LjFMMTAuMyAxMC4xTDUuOSAxMC41TDkuMiAxMy40TDguMiAxNy43TDEyIDE1LjRMMTIuNSAxNS43QzEyLjMgMTYuMiAxMi4xIDE2LjggMTIuMSAxNy4zTDUuOCAyMU0xNy44IDIxLjJMMTUgMTguMkwxNi4yIDE3TDE3LjggMTguNkwyMS40IDE1TDIyLjYgMTYuNEwxNy44IDIxLjJcIn0pKVxuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdzdmcnLCB7c3R5bGU6IFwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCBpZDogYGltcG9ydGFudC0ke2luZGV4fWB9KSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltcG9ydGFudC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwYXRoJywge2ZpbGw6IFwiY3VycmVudENvbG9yXCIsIGQ6IFwiTTEyLDE1LjM5TDguMjQsMTcuNjZMOS4yMywxMy4zOEw1LjkxLDEwLjVMMTAuMjksMTAuMTNMMTIsNi4wOUwxMy43MSwxMC4xM0wxOC4wOSwxMC41TDE0Ljc3LDEzLjM4TDE1Ljc2LDE3LjY2TTIyLDkuMjRMMTQuODEsOC42M0wxMiwyTDkuMTksOC42M0wyLDkuMjRMNy40NSwxMy45N0w1LjgyLDIxTDEyLDE3LjI3TDE4LjE4LDIxTDE2LjU0LDEzLjk3TDIyLDkuMjRaXCJ9KSlcbiAgICAgICAgXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgdGFza0RPTSB9IiwiLy8gc3dpdGNoaW5nIHRoZSBhY3RpdmUgaGlnaGxpZ2h0c1xuXG5sZXQgaWNvbkNsYXNzID0gW3tcbiAgICBpZDogJ2FsbCcsXG4gICAgY2xhc3M6ICdpY29ucy1hY3RpdmUnXG59LCB7XG4gICAgaWQ6ICdpbXBvcnRhbnQnLFxuICAgIGNsYXNzOiAnaWNvbnMnXG59LCB7XG4gICAgaWQ6ICd0b2RheScsXG4gICAgY2xhc3M6ICdpY29ucydcbn0sIHtcbiAgICBpZDogJ3VwY29taW5nJyxcbiAgICBjbGFzczogJ2ljb25zJ1xufV07XG5cbmZ1bmN0aW9uIGZvY3VzRWZmZWN0cyhjbGljaykge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbGljayk7XG4gICAgY29uc3QgYWN0aXZlID0gaWNvbkNsYXNzLmZpbmQoZSA9PiBlLmNsYXNzID09PSAnaWNvbnMtYWN0aXZlJyk7XG4gICAgY29uc3Qgbm93QWN0aXZlID0gaWNvbkNsYXNzLmZpbmQoZSA9PiBlLmlkID09PSBgJHtjbGlja31gKTtcbiAgICBjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthY3RpdmUuaWR9YCk7XG4gICAgXG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucy1hY3RpdmUnKTtcbiAgICBoaWdobGlnaHQuY2xhc3NMaXN0LnRvZ2dsZSgnaWNvbnMtYWN0aXZlJyk7XG4gICAgYWN0aXZlLmNsYXNzID0gJ2ljb25zJztcbiAgICBub3dBY3RpdmUuY2xhc3MgPSAnaWNvbnMtYWN0aXZlJztcbn1cblxuZXhwb3J0IHsgZm9jdXNFZmZlY3RzIH07IiwiXG5cbi8vRG9tIHBvcCB1cHMgZm9yIGFkZGluZyBwcm9qZWN0cyBhbmQgdGFza3NcblxuY29uc3QgYWRkVGFza1Byb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Jyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1wb3B1cCcpO1xuXG4gICAgXG4gICAgY29uc3QgdGFzayA9ICgpID0+IHtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1wb3B1cCcpO1xuICAgICAgICBcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICAgICAgcHJvamVjdC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrLFxuICAgICAgICBjYW5jZWwsXG4gICAgICAgIHByb2plY3RcbiAgICB9XG59XG5cbmV4cG9ydCB7IGFkZFRhc2tQcm9qZWN0cyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkVGFza1Byb2plY3RzIH0gZnJvbSBcIi4vdGFza1BvcFVwXCJcbmltcG9ydCB7IGZvY3VzRWZmZWN0cyB9IGZyb20gXCIuL2ljb25zXCJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi9hZGRpbmd0YXNrXCJcbmltcG9ydCB7IHRhc2tET00gfSBmcm9tIFwiLi9hZGRpbmd0YXNrRE9NXCJcblxuXG5cblxuY29uc3QgdGFzayA9IGFkZFRhc2tQcm9qZWN0cygpO1xuXG4vLyBhbGwgYnV0dG9uIGFuZCBldmVudCBsaXN0ZW5lcnNcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQ7XG4gICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgIFxuICAgIFxuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgICAgY2FzZSAnYWRkLXRhc2snOlxuICAgICAgICAgICAgdGFzay50YXNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgICAgIHRhc2suY2FuY2VsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgICAgIGdldERhdGEoKTtcbiAgICAgICAgICAgIHRhc2tET00oKTtcbiAgICAgICAgICAgIHRhc2suY2FuY2VsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJvamVjdC1hZGQnOlxuICAgICAgICAgICAgdGFzay5wcm9qZWN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJvamVjdC1jYW5jZWwnOlxuICAgICAgICAgICAgdGFzay5jYW5jZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZGF0YSkge1xuICAgICAgICBjYXNlICdvcmdhbml6ZSc6XG4gICAgICAgICAgICBmb2N1c0VmZmVjdHMoaWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSlcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==