
const newVaraible =()=> {
    const navMobile=document.querySelector(".nav-mobile");
    const navBar=document.querySelector(".nav-links");
    const navlinks=document.querySelectorAll(".nav-links li");

    navMobile.addEventListener('click', ()=> {
        navBar.classList.toggle("nav-active");
        navlinks.forEach((link,index)=>{
            if (link.style.animation){
                link.style.animation="";
            }else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index /7+0.4}s`

            }
        });
    });
}
newVaraible();