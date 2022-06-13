// switching the active styles 
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

function focusEffects(click) {
    
    
    const icon = document.getElementById(click);
    const active = iconClass.find(e => e.class === 'icons-active');
    const nowActive = iconClass.find(e => e.clickid === `${click}`);
    const highlight = document.getElementById(`${active.clickid}`);
    
    icon.classList.add('icons-active');
    highlight.classList.toggle('icons-active');
    active.class = 'icons';
    nowActive.class = 'icons-active';

    console.log(iconClass);
    console.log(active.clickid);

}

export { focusEffects };