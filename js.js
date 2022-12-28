const list = document.getElementById(`list`)
const list__item = document.querySelectorAll(`.list__item`);
const principal = document.querySelectorAll(`.principal`)

list.addEventListener(`click`, (e) =>{
    if(e.target.classList.contains(`list__item`)){

        for(const item of list__item){
            item.classList.remove(`list__item--active`)
        }

        e.target.classList.add(`list__item--active`)

        for(const p of principal){
            p.classList.remove(`principal--active`)
        }

        principal[e.target.id].classList.add(`principal--active`)
    }

    if(e.target.classList.contains(`list__link`)){
        for(const item of list__item){
            item.classList.remove(`list__item--active`)
        }

        e.target.parentElement.classList.add(`list__item--active`)

        for(const p of principal){
            p.classList.remove(`principal--active`)
        }

        principal[e.target.parentElement.id].classList.add(`principal--active`)
    }

    if(e.target.classList.contains(`rotate`)){
        for(const item of list__item){
            item.classList.remove(`list__item--active`)
        }

        e.target.parentElement.classList.add(`list__item--active`)

        for(const p of principal){
            p.classList.remove(`principal--active`)
        }

        principal[e.target.parentElement.id].classList.add(`principal--active`)
    }
})

