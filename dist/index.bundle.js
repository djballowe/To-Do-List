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
        left.appendChild(elementFactory('button', {type: 'button', id: `check-${index}`, data: 'importance', index: `${index}`}));
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

/***/ "./src/importance.js":
/*!***************************!*\
  !*** ./src/importance.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "importance": () => (/* binding */ importance)
/* harmony export */ });
/* harmony import */ var _addingtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addingtask */ "./src/addingtask.js");


function importance() {
    const changeCheck = (id) => {
        const element = document.getElementById(`${id}`);
        if (element.classList.contains('check')) {
            element.classList.toggle('check');
        } else {
            element.classList.add('check');
        }   
    }

    const importantArray = (index) => {
        
        if (_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index].importance === true) {
            _addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index].importance = false;
        } else {
            _addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index].importance = true;
        }
        console.log(_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr);
    }
    return {
        changeCheck,
        importantArray
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
/* harmony import */ var _importance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./importance */ "./src/importance.js");









const priority = (0,_importance__WEBPACK_IMPORTED_MODULE_4__.importance)();
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
        case 'importance':
            priority.changeCheck(id);
            
    }
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0RBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2FkZGluZ3Rhc2suanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9hZGRpbmd0YXNrRE9NLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9pbXBvcnRhbmNlLmpzIiwid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvdGFza1BvcFVwLmpzIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBsZXQgYXJyID0gW107XG5cbmZ1bmN0aW9uIHRhc2tDcmVhdG9yKHRhc2ssIGFib3V0LCBkYXkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogdGFzayxcbiAgICAgICAgZGVzY3JpcHRpb246IGFib3V0LFxuICAgICAgICBkYXRlOiBkYXksXG4gICAgICAgIGltcG9ydGFuY2U6IGZhbHNlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXRhKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWVcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGFyci5wdXNoKHRhc2tDcmVhdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkpO1xufVxuXG5cblxuZXhwb3J0IHsgZ2V0RGF0YSB9IiwiaW1wb3J0IHsgYXJyIH0gZnJvbSBcIi4vYWRkaW5ndGFza1wiXG5cbi8vIGFkZGluZyB0YXNrcyB0byB0aGUgZG9tXG5cbmZ1bmN0aW9uIHRhc2tET00oKSB7XG4gICAgY29uc3QgZWxlbWVudEZhY3RvcnkgPSAodHlwZSwgYXR0cmlidXRlcywgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBjcmVhdGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBpZiAoYXR0cmlidXRlcyAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIGNyZWF0ZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNyZWF0ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnbmV3LXRhc2snLCBpZDogYHRhc2stJHtpbmRleH1gfSkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdsZWZ0LXNpZGUnLCBpZDogYGxlZnQtJHtpbmRleH1gfSkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdpbmZvJywgaWQ6IGBpbmZvLSR7aW5kZXh9YH0pKVxuXG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGVmdC0ke2luZGV4fWApO1xuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdidXR0b24nLCB7dHlwZTogJ2J1dHRvbicsIGlkOiBgY2hlY2stJHtpbmRleH1gLCBkYXRhOiAnaW1wb3J0YW5jZScsIGluZGV4OiBgJHtpbmRleH1gfSkpO1xuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdwcm9qZWN0LXRleHQnLCBpZDogYHByb2plY3QtJHtpbmRleH1gfSkpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7YXJyW2luZGV4XS50aXRsZX1gKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLCAnbm9uZScsIGAke2FycltpbmRleF0uZGVzY3JpcHRpb259YCkpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbmZvLSR7aW5kZXh9YCk7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLCAnbm9uZScsIGAke2FycltpbmRleF0uZGF0ZX1gKSk7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3N2ZycsIHtzdHlsZTogXCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsIGlkOiBgc3Rhci0ke2luZGV4fWB9KSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzdGFyLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3BhdGgnLCB7ZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgZDogXCJNNS44IDIxTDcuNCAxNEwyIDkuMkw5LjIgOC42TDEyIDJMMTQuOCA4LjZMMjIgOS4yTDE4LjggMTJIMThDMTcuMyAxMiAxNi42IDEyLjEgMTUuOSAxMi40TDE4LjEgMTAuNUwxMy43IDEwLjFMMTIgNi4xTDEwLjMgMTAuMUw1LjkgMTAuNUw5LjIgMTMuNEw4LjIgMTcuN0wxMiAxNS40TDEyLjUgMTUuN0MxMi4zIDE2LjIgMTIuMSAxNi44IDEyLjEgMTcuM0w1LjggMjFNMTcuOCAyMS4yTDE1IDE4LjJMMTYuMiAxN0wxNy44IDE4LjZMMjEuNCAxNUwyMi42IDE2LjRMMTcuOCAyMS4yXCJ9KSlcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnc3ZnJywge3N0eWxlOiBcIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiwgdmlld0JveDogXCIwIDAgMjQgMjRcIiwgaWQ6IGBpbXBvcnRhbnQtJHtpbmRleH1gfSkpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpbXBvcnRhbnQtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncGF0aCcsIHtmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBkOiBcIk0xMiwxNS4zOUw4LjI0LDE3LjY2TDkuMjMsMTMuMzhMNS45MSwxMC41TDEwLjI5LDEwLjEzTDEyLDYuMDlMMTMuNzEsMTAuMTNMMTguMDksMTAuNUwxNC43NywxMy4zOEwxNS43NiwxNy42Nk0yMiw5LjI0TDE0LjgxLDguNjNMMTIsMkw5LjE5LDguNjNMMiw5LjI0TDcuNDUsMTMuOTdMNS44MiwyMUwxMiwxNy4yN0wxOC4xOCwyMUwxNi41NCwxMy45N0wyMiw5LjI0WlwifSkpXG4gICAgICAgIFxuICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCB7IHRhc2tET00gfSIsIi8vIHN3aXRjaGluZyB0aGUgYWN0aXZlIGhpZ2hsaWdodHNcblxubGV0IGljb25DbGFzcyA9IFt7XG4gICAgaWQ6ICdhbGwnLFxuICAgIGNsYXNzOiAnaWNvbnMtYWN0aXZlJ1xufSwge1xuICAgIGlkOiAnaW1wb3J0YW50JyxcbiAgICBjbGFzczogJ2ljb25zJ1xufSwge1xuICAgIGlkOiAndG9kYXknLFxuICAgIGNsYXNzOiAnaWNvbnMnXG59LCB7XG4gICAgaWQ6ICd1cGNvbWluZycsXG4gICAgY2xhc3M6ICdpY29ucydcbn1dO1xuXG5mdW5jdGlvbiBmb2N1c0VmZmVjdHMoY2xpY2spIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xpY2spO1xuICAgIGNvbnN0IGFjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5jbGFzcyA9PT0gJ2ljb25zLWFjdGl2ZScpO1xuICAgIGNvbnN0IG5vd0FjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5pZCA9PT0gYCR7Y2xpY2t9YCk7XG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YWN0aXZlLmlkfWApO1xuICAgIFxuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMtYWN0aXZlJyk7XG4gICAgaGlnaGxpZ2h0LmNsYXNzTGlzdC50b2dnbGUoJ2ljb25zLWFjdGl2ZScpO1xuICAgIGFjdGl2ZS5jbGFzcyA9ICdpY29ucyc7XG4gICAgbm93QWN0aXZlLmNsYXNzID0gJ2ljb25zLWFjdGl2ZSc7XG59XG5cbmV4cG9ydCB7IGZvY3VzRWZmZWN0cyB9OyIsImltcG9ydCB7IGFyciB9IGZyb20gXCIuL2FkZGluZ3Rhc2tcIlxuXG5mdW5jdGlvbiBpbXBvcnRhbmNlKCkge1xuICAgIGNvbnN0IGNoYW5nZUNoZWNrID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBjb25zdCBpbXBvcnRhbnRBcnJheSA9IChpbmRleCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgaWYgKGFycltpbmRleF0uaW1wb3J0YW5jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYXJyW2luZGV4XS5pbXBvcnRhbmNlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJbaW5kZXhdLmltcG9ydGFuY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNoYW5nZUNoZWNrLFxuICAgICAgICBpbXBvcnRhbnRBcnJheVxuICAgIH1cbn1cblxuZXhwb3J0IHsgaW1wb3J0YW5jZSB9IiwiXG5cbi8vRG9tIHBvcCB1cHMgZm9yIGFkZGluZyBwcm9qZWN0cyBhbmQgdGFza3NcblxuY29uc3QgYWRkVGFza1Byb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Jyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1wb3B1cCcpO1xuXG4gICAgXG4gICAgY29uc3QgdGFzayA9ICgpID0+IHtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1wb3B1cCcpO1xuICAgICAgICBcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICAgICAgcHJvamVjdC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrLFxuICAgICAgICBjYW5jZWwsXG4gICAgICAgIHByb2plY3RcbiAgICB9XG59XG5cbmV4cG9ydCB7IGFkZFRhc2tQcm9qZWN0cyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkVGFza1Byb2plY3RzIH0gZnJvbSBcIi4vdGFza1BvcFVwXCJcbmltcG9ydCB7IGZvY3VzRWZmZWN0cyB9IGZyb20gXCIuL2ljb25zXCJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi9hZGRpbmd0YXNrXCJcbmltcG9ydCB7IHRhc2tET00gfSBmcm9tIFwiLi9hZGRpbmd0YXNrRE9NXCJcbmltcG9ydCB7IGFyciB9IGZyb20gXCIuL2FkZGluZ3Rhc2tcIlxuaW1wb3J0IHsgaW1wb3J0YW5jZSB9IGZyb20gXCIuL2ltcG9ydGFuY2VcIlxuXG5cblxuY29uc3QgcHJpb3JpdHkgPSBpbXBvcnRhbmNlKCk7XG5jb25zdCB0YXNrID0gYWRkVGFza1Byb2plY3RzKCk7XG5cbi8vIGFsbCBidXR0b24gYW5kIGV2ZW50IGxpc3RlbmVyc1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZDtcbiAgICBjb25zdCBkYXRhID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XG4gICAgXG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgICBjYXNlICdhZGQtdGFzayc6XG4gICAgICAgICAgICB0YXNrLnRhc2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgICAgICAgdGFzay5jYW5jZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgICAgZ2V0RGF0YSgpO1xuICAgICAgICAgICAgdGFza0RPTSgpO1xuICAgICAgICAgICAgdGFzay5jYW5jZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcm9qZWN0LWFkZCc6XG4gICAgICAgICAgICB0YXNrLnByb2plY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcm9qZWN0LWNhbmNlbCc6XG4gICAgICAgICAgICB0YXNrLmNhbmNlbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN3aXRjaCAoZGF0YSkge1xuICAgICAgICBjYXNlICdvcmdhbml6ZSc6XG4gICAgICAgICAgICBmb2N1c0VmZmVjdHMoaWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ltcG9ydGFuY2UnOlxuICAgICAgICAgICAgcHJpb3JpdHkuY2hhbmdlQ2hlY2soaWQpO1xuICAgICAgICAgICAgXG4gICAgfVxufSlcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==