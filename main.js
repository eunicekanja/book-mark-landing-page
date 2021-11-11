'use strict'

const tabs=document.querySelectorAll('.tab-container');
const btns=document.querySelector('.section-b-buttonContainer');
const tabBtns=document.querySelectorAll('.tabBtn')

btns.addEventListener('click',function(e){
    e.preventDefault();
    const id=e.target.dataset.id;
    if(id){
        tabBtns.forEach(btn=>btn.classList.remove('active'));
        e.target.classList.add('active');
        tabs.forEach(tab=>tab.classList.remove('active'));
        document.querySelector(`#${id}`).classList.add('active')
    }
})

const questioncontainer=document.querySelectorAll('.question-container');

questioncontainer.forEach(question=>{
    const arrowBtns=question.querySelector('.arrow-box');
    const answer=question.querySelector('.awnser');
    const iconOpen=question.querySelector('.icon-arrow');
    const iconClose=question.querySelector('.icon-close')
    arrowBtns.addEventListener('click',function(e){
        const arrow=e.target.classList;
        console.log(arrow)
        if(arrow.contains('icon-arrow')){
            answer.classList.add('active');
        }
    })
})

//smooth scrolling
const navLinks=document.querySelector('.head-links');
navLinks.addEventListener('click',function(e){
    e.preventDefault();
   const href=e.target;
   if(href.classList.contains('head-links-item')){
       document.querySelector(`#${href.getAttribute('href')}`).scrollIntoView({behavior:'smooth'})
   }
})

//menu
const menuBtn=document.querySelector('.menu-button');
const headLinksContainer=document.querySelector('.head-linksContainer')
menuBtn.addEventListener('click',function(){
    document.body.style.overflowY='hidden'
    headLinksContainer.classList.toggle('show')
})

const headerObserver=new IntersectionObserver(function(entries,headerObserver){
    const[entry]=entries;
    if(!entry.isIntersecting){
        entry.target.classList.remove('show');
        document.body.style.overflowY='visible'
    }
},{
    root:null,
    threshold:0,
});

headerObserver.observe(headLinksContainer)