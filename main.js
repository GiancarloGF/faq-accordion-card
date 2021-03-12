
let containerFaqs= document.querySelector('.container-faqs');

let myTarget;

containerFaqs.addEventListener('click', (e)=>{
    myTarget=e.target;
<<<<<<< HEAD
    if (myTarget.classList[0]!='container-faqs'  && myTarget.classList[0]!='faqs' && myTarget.classList[0]!='faqs-top' ) {//aseguramos: Que el elemento del evento solo sea <p> o <i>.
=======
    if (myTarget.classList[0]!='container-faqs'  || myTarget.classList[0]!='faqs' || myTarget.classList[0]!='faqs-top') {//aseguramos: Que el elemento del evento solo sea <p> o <i>.
>>>>>>> 5dbebe6fbbb41e7ea1b690344338de3f83f02f1e
        myTarget.parentElement.parentElement.children[1].classList.toggle('active')
        myTarget.parentElement.children[1].classList.toggle('fa-angle-down');
        myTarget.parentElement.children[1].classList.toggle('fa-angle-up');
        
    } else {
        return;
    }
})





myTarget.parentElement.parentElement.children[1].classList.toggle('active')
