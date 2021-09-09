const showMenu=(toggleID, navID) => {

    const toggle=document.getElementById(toggleID),
    nav=document.getElementById(navID)

    if(toggle && nav){

        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

const navLink=document.querySelectorAll('.nav-link')

function  linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    const navMenu =document.getElementById('nav-menu')
     navMenu.classList.remove('show')
}

navLink.forEach(n=> n.addEventListener('click',linkAction))



const sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2200,
    reset:false
})

sr.reveal('.section-title',{})
sr.reveal('.home-title',{})
sr.reveal('.button',{delay:100})
sr.reveal('.home-img',{delay:400})
sr.reveal('.home-social-icon',{interval:150})


sr.reveal('.about-img',{})
sr.reveal('.about-text',{delay:400})

/* sr.reveal('.section-title',{delay:100}) */
sr.reveal('.skills-subtitle',{delay:100})
sr.reveal('.skills-text',{delay:400})
sr.reveal('.skills-names',{delay:200,interval:300})


/* sr.reveal('.section-title',{delay:100}) */
sr.reveal('.education-rounder',{delay:100,interval:200})
sr.reveal('.education-line',{delay:100,interval:200})

const sr2=ScrollReveal({
    origin:'left',
    distance:'80px',
    duration:2500,
    reset:false
})

/* sr.reveal('.section-title',{delay:100}) */
sr2.reveal('.experience-each',{interval:100})

/* sr.reveal('.section-title',{delay:100}) */
sr2.reveal('.education-year',{interval:200})
sr2.reveal('.education-school',{interval:200})

/* sr.reveal('.section-title',{delay:100}) */
sr2.reveal('.project',{delay:200,interval:400})

/* sr.reveal('.section-title',{delay:100}) */
sr2.reveal('.contact-input',{interval:200})
sr2.reveal('.Submit-button',{delay:100})


var win= window.screen.width;

if(win>=1290){
const sr3=ScrollReveal({
    origin:'right',
    distance:'80px',
    duration:2500,
    reset:false
})
sr3.reveal('.education-boards',{interval:200})
sr3.reveal('.education-grades',{interval:200})

}
else{
    const sr3=ScrollReveal({
    origin:'bottom',
    distance:'80px',
    duration:2000,
    reset:false
})
    sr3.reveal('.education-boards',{interval:200})
    sr3.reveal('.education-grades',{interval:200})
    
}




const themeButton=document.getElementById('change-theme')
const iconTheme= 'bxs-sun'
const darkTheme='dark-theme'

const selectedTheme= localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurTheme= () => {
        if (document.body.classList.contains(darkTheme)){
            return 'dark-theme'
        } 
        else{
            return 'light-theme'
        }
        }

const getCurIcon= () => {
        if (themeButton.classList.contains(iconTheme)){
            return 'bxs-sun'
        } 
        else{
            return 'bxs-moon'
        }
        }

if (selectedTheme){
    
    
    if(selectedIcon === 'bxs-moon'){ 
        change_icon= 'add'}
    else{
        change_icon= 'remove'}
                      
    themeButton.classList[change_icon](iconTheme);
    
    if(selectedTheme === 'dark-theme'){
        change_theme= 'add'} 
    else{   
        change_theme= 'remove'};
                     
    document.body.classList[change_theme](darkTheme)

}
    



themeButton.addEventListener('click', () =>{

        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);

        localStorage.setItem('selected-theme',getCurTheme())
        localStorage.setItem('selected-icon', getCurIcon()) 
})

function video1(){var media1 = document.createElement('video');
  media1.preload = true;
  media1.id = 'media1'; 
  document.getElementsByClassName('proj1')[0].appendChild(media1)
return media1}


