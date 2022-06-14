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
        info.appendChild(elementFactory('svg', {style: "width:24px;height:24px", viewBox: "0 0 24 24", id: `star-${index}`}));
        document.querySelector(`#star-${index}`).appendChild(elementFactory('path', {fill: "currentColor", d: "M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17.8 21.2L15 18.2L16.2 17L17.8 18.6L21.4 15L22.6 16.4L17.8 21.2"}))
        info.appendChild(elementFactory('svg', {style: "width:24px;height:24px", viewBox: "0 0 24 24", id: `important-${index}`}))
        document.querySelector(`#important-${index}`).appendChild(elementFactory('path', {fill: "currentColor", d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"}))
        
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
        console.log('complete run')
        doneTask.push(_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr[index]);
        _addingtask__WEBPACK_IMPORTED_MODULE_0__.arr.splice(index, 1);
        console.log(_addingtask__WEBPACK_IMPORTED_MODULE_0__.arr);
        console.log(doneTask);
    }

    const uncompletedArray = (index) => {
        console.log('uncomplete run')
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









const priority = (0,_completed__WEBPACK_IMPORTED_MODULE_4__.completed)();
const task = (0,_taskPopUp__WEBPACK_IMPORTED_MODULE_0__.addTaskProjects)();

// all button and event listeners

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
            priority.changeCheck(id, index);
            priority.completedArray(index);
            break;
        case 'completed':
            priority.changeCheck(id, index);
            priority.uncompletedArray(index);
            break;
    }
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBTztBQUNuQixZQUFZLHVEQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG9EQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvLURvLUxpc3QvLi9zcmMvYWRkaW5ndGFzay5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2FkZGluZ3Rhc2tET00uanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9jb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL3Rhc2tQb3BVcC5qcyIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvLURvLUxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Uby1Eby1MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG8tRG8tTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbGV0IGFyciA9IFtdO1xuXG5mdW5jdGlvbiB0YXNrQ3JlYXRvcih0YXNrLCBhYm91dCwgZGF5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRhc2ssXG4gICAgICAgIGRlc2NyaXB0aW9uOiBhYm91dCxcbiAgICAgICAgZGF0ZTogZGF5LFxuICAgICAgICBpbXBvcnRhbmNlOiBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICBhcnIucHVzaCh0YXNrQ3JlYXRvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpKTtcbn1cblxuXG5cbmV4cG9ydCB7IGdldERhdGEgfSIsImltcG9ydCB7IGFyciB9IGZyb20gXCIuL2FkZGluZ3Rhc2tcIlxuXG4vLyBhZGRpbmcgdGFza3MgdG8gdGhlIGRvbVxuXG5mdW5jdGlvbiB0YXNrRE9NKCkge1xuICAgIGNvbnN0IGVsZW1lbnRGYWN0b3J5ID0gKHR5cGUsIGF0dHJpYnV0ZXMsIHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgY3JlYXRlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMgIT09ICdub25lJykge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjcmVhdGU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ25ldy10YXNrJywgaWQ6IGB0YXNrLSR7aW5kZXh9YCwgaW5kZXg6IGAke2luZGV4fWB9KSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2xlZnQtc2lkZScsIGlkOiBgbGVmdC0ke2luZGV4fWB9KSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCkuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2luZm8nLCBpZDogYGluZm8tJHtpbmRleH1gfSkpXG5cbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsZWZ0LSR7aW5kZXh9YCk7XG4gICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsIHt0eXBlOiAnYnV0dG9uJywgaWQ6IGBjaGVjay0ke2luZGV4fWAsIGRhdGE6ICdub24tY29tcGxldGVkJywgaW5kZXg6IGAke2luZGV4fWB9KSk7XG4gICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ3Byb2plY3QtdGV4dCcsIGlkOiBgcHJvamVjdC0ke2luZGV4fWB9KSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywgJ25vbmUnLCBgJHthcnJbaW5kZXhdLnRpdGxlfWApKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7YXJyW2luZGV4XS5kZXNjcmlwdGlvbn1gKSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2luZm8tJHtpbmRleH1gKTtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsICdub25lJywgYCR7YXJyW2luZGV4XS5kYXRlfWApKTtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnc3ZnJywge3N0eWxlOiBcIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiwgdmlld0JveDogXCIwIDAgMjQgMjRcIiwgaWQ6IGBzdGFyLSR7aW5kZXh9YH0pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N0YXItJHtpbmRleH1gKS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncGF0aCcsIHtmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBkOiBcIk01LjggMjFMNy40IDE0TDIgOS4yTDkuMiA4LjZMMTIgMkwxNC44IDguNkwyMiA5LjJMMTguOCAxMkgxOEMxNy4zIDEyIDE2LjYgMTIuMSAxNS45IDEyLjRMMTguMSAxMC41TDEzLjcgMTAuMUwxMiA2LjFMMTAuMyAxMC4xTDUuOSAxMC41TDkuMiAxMy40TDguMiAxNy43TDEyIDE1LjRMMTIuNSAxNS43QzEyLjMgMTYuMiAxMi4xIDE2LjggMTIuMSAxNy4zTDUuOCAyMU0xNy44IDIxLjJMMTUgMTguMkwxNi4yIDE3TDE3LjggMTguNkwyMS40IDE1TDIyLjYgMTYuNEwxNy44IDIxLjJcIn0pKVxuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdzdmcnLCB7c3R5bGU6IFwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCBpZDogYGltcG9ydGFudC0ke2luZGV4fWB9KSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ltcG9ydGFudC0ke2luZGV4fWApLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwYXRoJywge2ZpbGw6IFwiY3VycmVudENvbG9yXCIsIGQ6IFwiTTEyLDE1LjM5TDguMjQsMTcuNjZMOS4yMywxMy4zOEw1LjkxLDEwLjVMMTAuMjksMTAuMTNMMTIsNi4wOUwxMy43MSwxMC4xM0wxOC4wOSwxMC41TDE0Ljc3LDEzLjM4TDE1Ljc2LDE3LjY2TTIyLDkuMjRMMTQuODEsOC42M0wxMiwyTDkuMTksOC42M0wyLDkuMjRMNy40NSwxMy45N0w1LjgyLDIxTDEyLDE3LjI3TDE4LjE4LDIxTDE2LjU0LDEzLjk3TDIyLDkuMjRaXCJ9KSlcbiAgICAgICAgXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgdGFza0RPTSB9IiwiaW1wb3J0IHsgYXJyIH0gZnJvbSBcIi4vYWRkaW5ndGFza1wiXG5cbmxldCBkb25lVGFzayA9IFtdO1xuXG5mdW5jdGlvbiBjb21wbGV0ZWQoKSB7XG4gICAgY29uc3QgY2hhbmdlQ2hlY2sgPSAoaWQsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xuICAgICAgICBjb25zdCB0aGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2stJHtpbmRleH1gKTtcblxuICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrJyk7XG4gICAgICAgICAgICB0aGVUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZC10YXNrJyk7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhJywgJ25vbi1jb21wbGV0ZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuICAgICAgICAgICAgdGhlVGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdGFzaycpO1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YScsICdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVkQXJyYXkgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlIHJ1bicpXG4gICAgICAgIGRvbmVUYXNrLnB1c2goYXJyW2luZGV4XSk7XG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgICAgICBjb25zb2xlLmxvZyhkb25lVGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5jb21wbGV0ZWRBcnJheSA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndW5jb21wbGV0ZSBydW4nKVxuICAgICAgICBhcnIucHVzaChkb25lVGFza1tpbmRleF0pO1xuICAgICAgICBkb25lVGFzay5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgICAgICBjb25zb2xlLmxvZyhkb25lVGFzayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hhbmdlQ2hlY2ssXG4gICAgICAgIGNvbXBsZXRlZEFycmF5LFxuICAgICAgICB1bmNvbXBsZXRlZEFycmF5XG4gICAgfVxufVxuXG5leHBvcnQgeyBjb21wbGV0ZWQgfSIsIi8vIHN3aXRjaGluZyB0aGUgYWN0aXZlIGhpZ2hsaWdodHNcblxubGV0IGljb25DbGFzcyA9IFt7XG4gICAgaWQ6ICdhbGwnLFxuICAgIGNsYXNzOiAnaWNvbnMtYWN0aXZlJ1xufSwge1xuICAgIGlkOiAnaW1wb3J0YW50JyxcbiAgICBjbGFzczogJ2ljb25zJ1xufSwge1xuICAgIGlkOiAndG9kYXknLFxuICAgIGNsYXNzOiAnaWNvbnMnXG59LCB7XG4gICAgaWQ6ICd1cGNvbWluZycsXG4gICAgY2xhc3M6ICdpY29ucydcbn1dO1xuXG5mdW5jdGlvbiBmb2N1c0VmZmVjdHMoY2xpY2spIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xpY2spO1xuICAgIGNvbnN0IGFjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5jbGFzcyA9PT0gJ2ljb25zLWFjdGl2ZScpO1xuICAgIGNvbnN0IG5vd0FjdGl2ZSA9IGljb25DbGFzcy5maW5kKGUgPT4gZS5pZCA9PT0gYCR7Y2xpY2t9YCk7XG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YWN0aXZlLmlkfWApO1xuICAgIFxuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMtYWN0aXZlJyk7XG4gICAgaGlnaGxpZ2h0LmNsYXNzTGlzdC50b2dnbGUoJ2ljb25zLWFjdGl2ZScpO1xuICAgIGFjdGl2ZS5jbGFzcyA9ICdpY29ucyc7XG4gICAgbm93QWN0aXZlLmNsYXNzID0gJ2ljb25zLWFjdGl2ZSc7XG59XG5cbmV4cG9ydCB7IGZvY3VzRWZmZWN0cyB9OyIsIlxuXG4vL0RvbSBwb3AgdXBzIGZvciBhZGRpbmcgcHJvamVjdHMgYW5kIHRhc2tzXG5cbmNvbnN0IGFkZFRhc2tQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldycpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtcG9wdXAnKTtcblxuICAgIFxuICAgIGNvbnN0IHRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG5cbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtcG9wdXAnKTtcbiAgICAgICAgXG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlLnZhbHVlID0gJyc7XG4gICAgICAgIHByb2plY3QudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFzayxcbiAgICAgICAgY2FuY2VsLFxuICAgICAgICBwcm9qZWN0XG4gICAgfVxufVxuXG5leHBvcnQgeyBhZGRUYXNrUHJvamVjdHMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZFRhc2tQcm9qZWN0cyB9IGZyb20gXCIuL3Rhc2tQb3BVcFwiXG5pbXBvcnQgeyBmb2N1c0VmZmVjdHMgfSBmcm9tIFwiLi9pY29uc1wiXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4vYWRkaW5ndGFza1wiXG5pbXBvcnQgeyB0YXNrRE9NIH0gZnJvbSBcIi4vYWRkaW5ndGFza0RPTVwiXG5pbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi9hZGRpbmd0YXNrXCJcbmltcG9ydCB7IGNvbXBsZXRlZCB9IGZyb20gXCIuL2NvbXBsZXRlZFwiXG5cblxuXG5jb25zdCBwcmlvcml0eSA9IGNvbXBsZXRlZCgpO1xuY29uc3QgdGFzayA9IGFkZFRhc2tQcm9qZWN0cygpO1xuXG4vLyBhbGwgYnV0dG9uIGFuZCBldmVudCBsaXN0ZW5lcnNcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQ7XG4gICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIFxuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgICAgY2FzZSAnYWRkLXRhc2snOlxuICAgICAgICAgICAgdGFzay50YXNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgICAgIHRhc2suY2FuY2VsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgICAgIGdldERhdGEoKTtcbiAgICAgICAgICAgIHRhc2tET00oKTtcbiAgICAgICAgICAgIHRhc2suY2FuY2VsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJvamVjdC1hZGQnOlxuICAgICAgICAgICAgdGFzay5wcm9qZWN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJvamVjdC1jYW5jZWwnOlxuICAgICAgICAgICAgdGFzay5jYW5jZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGRhdGEpIHtcbiAgICAgICAgY2FzZSAnb3JnYW5pemUnOlxuICAgICAgICAgICAgZm9jdXNFZmZlY3RzKGlkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdub24tY29tcGxldGVkJzpcbiAgICAgICAgICAgIHByaW9yaXR5LmNoYW5nZUNoZWNrKGlkLCBpbmRleCk7XG4gICAgICAgICAgICBwcmlvcml0eS5jb21wbGV0ZWRBcnJheShpbmRleCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29tcGxldGVkJzpcbiAgICAgICAgICAgIHByaW9yaXR5LmNoYW5nZUNoZWNrKGlkLCBpbmRleCk7XG4gICAgICAgICAgICBwcmlvcml0eS51bmNvbXBsZXRlZEFycmF5KGluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=