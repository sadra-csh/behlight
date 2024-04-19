let slideindex = 1 ;
function setSlide(input,bInput,index){
    slideindex=index;
    let item=document.querySelector(`#${input}`)
    let bitem=document.querySelector(`#${bInput}`)
    let slides=[...document.querySelector('.slides').children];
    let buttons=[...document.querySelector('.buttons').children];
    slides.forEach((element)=>{
        element.classList.remove('active');
    })
    buttons.forEach((element)=>{
        element.classList.remove('b-active');
    })
    item.classList.add('active');
    bitem.classList.add('b-active');
}

setInterval(()=>{
    slideindex +=1;
    if (slideindex==4) {
        slideindex=1;
    }
    setSlide(`slide${slideindex}`,`b${slideindex}`,slideindex)
} , 3500)