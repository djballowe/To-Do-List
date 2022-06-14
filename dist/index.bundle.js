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

        document.querySelector('.tasks').appendChild(elementFactory('div', {class: `new-task`, id: `task-${index}`}));
        document.querySelector('.new-task').appendChild(elementFactory('div', {class: 'left-side'}));
        document.querySelector('.new-task').appendChild(elementFactory('div', {class: 'info'}))

        const left = document.querySelector('.left-side');
        left.appendChild(elementFactory('button', {class: 'check', type: 'button'}));
        left.appendChild(elementFactory('div', {class: 'project-text'}))

        document.querySelector('.project-text').appendChild(elementFactory('p', 'none', `${_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index].title}`));
        document.querySelector('.project-text').appendChild(elementFactory('p', 'none', `${_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index].description}`));
        
        const info = document.querySelector('.info');
        info.appendChild(elementFactory('p', 'none', `${_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index].date}`));
        info.appendChild(elementFactory('svg', {style: "width:24px;height:24px", viewBox: "0 0 24 24", id:"star"}));
        document.querySelector('#star').appendChild(elementFactory('path', {fill: "currentColor", d: "M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17.8 21.2L15 18.2L16.2 17L17.8 18.6L21.4 15L22.6 16.4L17.8 21.2"}))
        info.appendChild(elementFactory('svg', {style: "width:24px;height:24px", viewBox: "0 0 24 24", id: "veryImportant"}))
        document.querySelector('#veryImportant').appendChild(elementFactory('path', {fill: "currentColor", d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"}))
        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJrQzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLElBQUksbURBQVUsRUFBRTtBQUNwQyxvQkFBb0IsbURBQVU7O0FBRTlCLDRFQUE0RSwrQkFBK0IsTUFBTSxFQUFFO0FBQ25ILCtFQUErRSxtQkFBbUI7QUFDbEcsK0VBQStFLGNBQWM7O0FBRTdGO0FBQ0EsbURBQW1ELCtCQUErQjtBQUNsRixnREFBZ0Qsc0JBQXNCOztBQUV0RSwyRkFBMkYsNENBQUcsY0FBYztBQUM1RywyRkFBMkYsNENBQUcsb0JBQW9CO0FBQ2xIO0FBQ0E7QUFDQSx3REFBd0QsNENBQUcsYUFBYTtBQUN4RSxnREFBZ0QsbUJBQW1CLDhDQUE4QztBQUNqSCw0RUFBNEUsMlNBQTJTO0FBQ3ZYLGdEQUFnRCxtQkFBbUIsd0RBQXdEO0FBQzNILHFGQUFxRiwyT0FBMk87QUFDaFU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsTUFBTTtBQUM1RCxpREFBaUQsVUFBVTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ1A7QUFDQTtBQUNHOzs7OztBQUt6QyxhQUFhLDJEQUFlOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQU87QUFDbkIsWUFBWSx1REFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0RBQVk7QUFDeEI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2FkZGluZ3Rhc2suanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9hZGRpbmd0YXNrRE9NLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy90YXNrUG9wVXAuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBhcnIgPSBbXTtcblxuZnVuY3Rpb24gdGFza0NyZWF0b3IodGFzaywgYWJvdXQsIGRheSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0YXNrLFxuICAgICAgICBkZXNjcmlwdGlvbjogYWJvdXQsXG4gICAgICAgIGRhdGU6IGRheSxcbiAgICAgICAgaW1wb3J0YW5jZTogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgYXJyLnB1c2godGFza0NyZWF0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSk7XG59XG5cblxuXG5leHBvcnQgeyBnZXREYXRhIH0iLCJpbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi9hZGRpbmd0YXNrXCJcblxuLy8gYWRkaW5nIHRhc2tzIHRvIHRoZSBkb21cblxuZnVuY3Rpb24gdGFza0RPTSgpIHtcbiAgICBjb25zdCBlbGVtZW50RmFjdG9yeSA9ICh0eXBlLCBhdHRyaWJ1dGVzLCB0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY3JlYXRlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGFyci5sZW5ndGggLSAxO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6IGBuZXctdGFza2AsIGlkOiBgdGFzay0ke2luZGV4fWB9KSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdsZWZ0LXNpZGUnfSkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnaW5mbyd9KSlcblxuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtc2lkZScpO1xuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdidXR0b24nLCB7Y2xhc3M6ICdjaGVjaycsIHR5cGU6ICdidXR0b24nfSkpO1xuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdwcm9qZWN0LXRleHQnfSkpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGV4dCcpLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHthcnJbaW5kZXhdLnRpdGxlfWApKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGV4dCcpLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHthcnJbaW5kZXhdLmRlc2NyaXB0aW9ufWApKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpO1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHthcnJbaW5kZXhdLmRhdGV9YCkpO1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdzdmcnLCB7c3R5bGU6IFwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCBpZDpcInN0YXJcIn0pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXInKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncGF0aCcsIHtmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBkOiBcIk01LjggMjFMNy40IDE0TDIgOS4yTDkuMiA4LjZMMTIgMkwxNC44IDguNkwyMiA5LjJMMTguOCAxMkgxOEMxNy4zIDEyIDE2LjYgMTIuMSAxNS45IDEyLjRMMTguMSAxMC41TDEzLjcgMTAuMUwxMiA2LjFMMTAuMyAxMC4xTDUuOSAxMC41TDkuMiAxMy40TDguMiAxNy43TDEyIDE1LjRMMTIuNSAxNS43QzEyLjMgMTYuMiAxMi4xIDE2LjggMTIuMSAxNy4zTDUuOCAyMU0xNy44IDIxLjJMMTUgMTguMkwxNi4yIDE3TDE3LjggMTguNkwyMS40IDE1TDIyLjYgMTYuNEwxNy44IDIxLjJcIn0pKVxuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdzdmcnLCB7c3R5bGU6IFwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCBpZDogXCJ2ZXJ5SW1wb3J0YW50XCJ9KSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZlcnlJbXBvcnRhbnQnKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncGF0aCcsIHtmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBkOiBcIk0xMiwxNS4zOUw4LjI0LDE3LjY2TDkuMjMsMTMuMzhMNS45MSwxMC41TDEwLjI5LDEwLjEzTDEyLDYuMDlMMTMuNzEsMTAuMTNMMTguMDksMTAuNUwxNC43NywxMy4zOEwxNS43NiwxNy42Nk0yMiw5LjI0TDE0LjgxLDguNjNMMTIsMkw5LjE5LDguNjNMMiw5LjI0TDcuNDUsMTMuOTdMNS44MiwyMUwxMiwxNy4yN0wxOC4xOCwyMUwxNi41NCwxMy45N0wyMiw5LjI0WlwifSkpXG4gICAgICAgIFxuICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCB7IHRhc2tET00gfSIsIi8vIHN3aXRjaGluZyB0aGUgYWN0aXZlIGhpZ2hsaWdodHNcblxubGV0IGljb25DbGFzcyA9IFt7XG4gICAgaWQ6ICdhbGwnLFxuICAgIGNsYXNzOiAnaWNvbnMtYWN0aXZlJ1xufSwge1xuICAgIGlkOiAnaW1wb3J0YW50JyxcbiAgICBjbGFzczogJ2ljb25zJ1xufSwge1xuICAgIGlkOiAndG9kYXknLFxuICAgIGNsYXNzOiAnaWNvbnMnXG59LCB7XG4gICAgaWQ6ICd1cGNvbWluZycsXG4gICAgY2xhc3M6ICdpY29ucydcbn1dO1xuXG5mdW5jdGlvbiBmb2N1c0VmZmVjdHMoY2xpY2spIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xpY2spO1xuICAgIGNvbnN0IGFjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5jbGFzcyA9PT0gJ2ljb25zLWFjdGl2ZScpO1xuICAgIGNvbnN0IG5vd0FjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5pZCA9PT0gYCR7Y2xpY2t9YCk7XG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YWN0aXZlLmlkfWApO1xuICAgIFxuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMtYWN0aXZlJyk7XG4gICAgaGlnaGxpZ2h0LmNsYXNzTGlzdC50b2dnbGUoJ2ljb25zLWFjdGl2ZScpO1xuICAgIGFjdGl2ZS5jbGFzcyA9ICdpY29ucyc7XG4gICAgbm93QWN0aXZlLmNsYXNzID0gJ2ljb25zLWFjdGl2ZSc7XG59XG5cbmV4cG9ydCB7IGZvY3VzRWZmZWN0cyB9OyIsIlxuXG4vL0RvbSBwb3AgdXBzIGZvciBhZGRpbmcgcHJvamVjdHMgYW5kIHRhc2tzXG5cbmNvbnN0IGFkZFRhc2tQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldycpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtcG9wdXAnKTtcblxuICAgIFxuICAgIGNvbnN0IHRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG5cbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtcG9wdXAnKTtcbiAgICAgICAgXG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlLnZhbHVlID0gJyc7XG4gICAgICAgIHByb2plY3QudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFzayxcbiAgICAgICAgY2FuY2VsLFxuICAgICAgICBwcm9qZWN0XG4gICAgfVxufVxuXG5leHBvcnQgeyBhZGRUYXNrUHJvamVjdHMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZFRhc2tQcm9qZWN0cyB9IGZyb20gXCIuL3Rhc2tQb3BVcFwiXG5pbXBvcnQgeyBmb2N1c0VmZmVjdHMgfSBmcm9tIFwiLi9pY29uc1wiXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4vYWRkaW5ndGFza1wiXG5pbXBvcnQgeyB0YXNrRE9NIH0gZnJvbSBcIi4vYWRkaW5ndGFza0RPTVwiXG5cblxuXG5cbmNvbnN0IHRhc2sgPSBhZGRUYXNrUHJvamVjdHMoKTtcblxuLy8gYWxsIGJ1dHRvbiBhbmQgZXZlbnQgbGlzdGVuZXJzXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xuICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICBcbiAgICBcbiAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgIGNhc2UgJ2FkZC10YXNrJzpcbiAgICAgICAgICAgIHRhc2sudGFzaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NhbmNlbCc6XG4gICAgICAgICAgICB0YXNrLmNhbmNlbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgICAgICBnZXREYXRhKCk7XG4gICAgICAgICAgICB0YXNrRE9NKCk7XG4gICAgICAgICAgICB0YXNrLmNhbmNlbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Byb2plY3QtYWRkJzpcbiAgICAgICAgICAgIHRhc2sucHJvamVjdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Byb2plY3QtY2FuY2VsJzpcbiAgICAgICAgICAgIHRhc2suY2FuY2VsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGRhdGEpIHtcbiAgICAgICAgY2FzZSAnb3JnYW5pemUnOlxuICAgICAgICAgICAgZm9jdXNFZmZlY3RzKGlkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=