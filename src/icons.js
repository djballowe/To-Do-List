import { format, isWithinInterval } from 'date-fns'
import { add } from 'date-fns'
import { arr } from "./addingtaskDOM"
import { projects } from "./addingProjectDOM"
import { addProjectToStorage } from './addingProjectDOM'

// switching the active highlights

export let iconClass = JSON.parse(localStorage.getItem('categories')) || [{
    id: 'project-all',
    class: 'icons'
}, {
    id: 'project-important',
    class: 'icons'
}, {
    id: 'project-today',
    class: 'icons'
}, {
    id: 'project-upcoming',
    class: 'icons'
}];

function catagories() {
    
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    const tomorrow = add((new Date()), {
        days: 1
    })

    const weekLater = add((new Date()), {
        weeks: 1
    })

    const all = () => {
        for (let i = 0; i < arr.length; i++) {
            document.getElementById(`task-${i}`).style.display = 'flex';
        }
    }

    const stared = () => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].importance === false) {
                document.getElementById(`task-${i}`).style.display = 'none';
            } else if (arr[i].importance === true) {
                document.getElementById(`task-${i}`).style.display = 'flex';
            }
        }
    }

    const today = () => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].date !== currentDate) {
                document.getElementById(`task-${i}`).style.display = 'none';
            } else if (arr[i].date === currentDate) {
                document.getElementById(`task-${i}`).style.display = 'flex';
            }
        }
    }

    const upcoming = () => {
        for (let i = 0; i < arr.length; i++) {
            let year = parseInt(arr[i].date);
            let month = parseInt(arr[i].date[5] + arr[i].date[6]) - 1;
            let day = parseInt(arr[i].date[8] + arr[i].date[9]);
            
            if (isWithinInterval(new Date(year, month, day), {
                start: tomorrow,
                end: weekLater
            }) === true) {
                document.getElementById(`task-${i}`).style.display = 'flex';
            } else {
                document.getElementById(`task-${i}`).style.display = 'none';
            }
        }
    }

    const dynamicProjects = (project) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].project === project) {
                document.getElementById(`task-${i}`).style.display = 'flex';
            } else {
                document.getElementById(`task-${i}`).style.display = 'none';
            }
        }
    }

    return {
        all,
        stared,
        today,
        upcoming,
        dynamicProjects
    }
}

const cat = catagories();

function focusEffects(click, index) {
    if (iconClass.indexOf('icons-active') === -1) {
        console.log('test');
    }
    
    
    const icon = document.getElementById(click);
    const active = iconClass.find(e => e.class === 'icons-active');
    const nowActive = iconClass.find(e => e.id === `${click}`);
    const highlight = document.getElementById(`${active.id}`);

    console.log(icon)
    console.log(highlight)
    console.log(active)

    
        
        active.class = 'icons';
        nowActive.class = 'icons-active';
        icon.removeAttribute('class');
        icon.classList.add(nowActive.class);
        
        if (highlight !== null) {
            highlight.removeAttribute('class');
            highlight.classList.add(active.class);
        }

        if (highlight !== null && highlight.getAttribute('type') === 'project' && icon.getAttribute('type') === 'project') {
            highlight.classList.add('new-project');
            icon.classList.add('new-project');
        } else if (highlight !== null && highlight.getAttribute('type') === 'project') {
            highlight.classList.add('new-project');
        } else if (highlight !== null && icon.getAttribute('type') === 'project') {
            icon.classList.add('new-project');
        }

        // switch the category visually along with the focus effect
        
        const currentCat = document.getElementById(`cat-${nowActive.id}`);
        const pCat = document.getElementById(`cat-${active.id}`);

        if (currentCat === pCat) {
            currentCat.style.display = 'block';
            pCat.style.display = 'block';
        } else if (currentCat !== pCat && pCat !== null){
            currentCat.style.display = 'block';
            pCat.style.display = 'none';
        }

        if (nowActive.id === 'project-important') {
            cat.stared();
        } else if (nowActive.id === 'project-all') {
            cat.all();
        } else if (nowActive.id === 'project-today') {
            cat.today();
        } else if (nowActive.id === 'project-upcoming') {
            cat.upcoming();
        } else if (nowActive.id === `project-${projects[index]}`) {
            cat.dynamicProjects(projects[index]);
        } 
}

function focusOnStart() {
    let click = 'project-all'
    if (iconClass.indexOf('icons-active') === -1) {
        iconClass[0].class = 'icons-active';
        focusEffects(click);
    }
}

focusOnStart();

export { focusEffects, catagories };