import { format, compareAsc, addDays, formatDistanceToNow, isWithinInterval } from 'date-fns'
import { formatDistance, subDays, add } from 'date-fns'
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
    
    
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    const tomorrow = add((new Date()), {
        days: 1
    })

    const weekLater = add((new Date()), {
        weeks: 1
    })

    const weekLaterFormat = format(weekLater, 'yyy-MM-dd');

   

    



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
            console.log({year, month, day})
            
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

    return {
        all,
        stared,
        today,
        upcoming
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
    } else if (nowActive.id === 'today') {
        cat.today();
    } else if (nowActive.id === 'upcoming') {
        cat.upcoming();
    }
    
}

export { focusEffects, catagories };