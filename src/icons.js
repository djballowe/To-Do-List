import { format, compareAsc } from 'date-fns'
import { formatDistance, subDays } from 'date-fns'
import { taskDOM } from './addingtaskDOM';
import { arr } from "./taskobjectfunctions"

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

function catagories() {
    const all = () => {
        for (let i = 0; i < arr.length; i++) {
            document.getElementById(`task-${i}`).style.display = 'flex';
        }
    }

    const stared = () => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].importance === false) {
                document.getElementById(`task-${i}`).style.display = 'none';
            }
        }
    }
    return {
        all,
        stared
    }
}

const cat = catagories();

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
    const pCat = document.getElementById(`cat-${active.id}`);
    
    currentCat.style.display = 'block';
    pCat.style.display = 'none';

    if (nowActive.id === 'important') {
        cat.stared();
    } else if (nowActive.id === 'all') {
        cat.all();
    }
    
}

export { focusEffects, catagories };