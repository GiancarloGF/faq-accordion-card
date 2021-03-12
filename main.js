
let containerFaqs= document.querySelector('.container-faqs');

let myTarget;

containerFaqs.addEventListener('click', (e)=>{
    myTarget=e.target;
    if (myTarget.classList[0]!='container-faqs'  && myTarget.classList[0]!='faqs' && myTarget.classList[0]!='faqs-top' ) {//aseguramos: Que el elemento del evento solo sea <p> o <i>.
        myTarget.parentElement.parentElement.children[1].classList.toggle('active')
        myTarget.parentElement.children[1].classList.toggle('fa-angle-down');
        myTarget.parentElement.children[1].classList.toggle('fa-angle-up');
        
    } else {
        return;
    }
})





myTarget.parentElement.parentElement.children[1].classList.toggle('active')