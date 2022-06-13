// switching the active styles 

function focusEffects(click) {
    let iconClass = [{
        clickid: 'all',
        class: 'icons-active'
    }, {
        clickid: 'inbox',
        class: 'icons'
    }, {
        clickid: 'today',
        class: 'icons'
    }, {
        clickid: 'upcoming',
        class: 'icons'
    }];
    
    
    const icon = document.getElementById(click);
    const active = iconClass.find(e => e.class === 'icons-active');
    
    icon.class = 'icons-active';
    active.class = 'icons';
}

export { focusEffects };