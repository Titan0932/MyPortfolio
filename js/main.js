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
    duration:2000,
    reset:true
})

sr.reveal('.home-title',{})
sr.reveal('.button',{delay:100})
sr.reveal('.home-img',{delay:300})
sr.reveal('.home-social-icon',{interval:100})

sr.reveal('.section-title',{})
sr.reveal('.about-img',{delay:100})
sr.reveal('.about-text',{delay:300})

sr.reveal('.section-title',{})
sr.reveal('.skills-subtitle',{delay:100})
sr.reveal('.skills-text',{delay:300})
sr.reveal('.skills-names',{interval:100})

const sr2=ScrollReveal({
    origin:'left',
    distance:'80px',
    duration:2000,
    reset:true
})

sr2.reveal('.section-title',{})
sr2.reveal('.experience-each',{interval:100})

const sr3=ScrollReveal({
    origin:'center',
    distance:'110px',
    duration:2000,
    reset:true
})

sr3.reveal('.section-title',{})
sr3.reveal('.contact-input',{interval:200})
sr3.reveal('.Submit-button',{delay:100})







