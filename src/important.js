import { arr } from "./addingtask"

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

export { important }