const navbar = document.querySelector('.hamburger')
const menu = document.querySelector('.Header-nav')

let i = 0
navbar.addEventListener('click',()=>{
    if(i === 0){
        menu.classList += ' burger'
        i = 1
    }else{
        menu.classList = 'Header-nav'
        i = 0
    }
})