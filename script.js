
const menuBtn = document.getElementById("menu-line");
const navLinks = document.getElementById("ul-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("translate-y-0");
    navLinks.classList.toggle("-translate-y-full");

    const isOpen = navLinks.classList.contains("translate-y-0");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.add("-translate-y-full");
    navLinks.classList.remove("translate-y-0");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

document.addEventListener("DOMContentLoaded", () =>{
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        let targetValue = counter.getAttribute("data-target");
        let target;
        if( targetValue.includes('K')){
            target =  targetValue.replace('K','') * 1000;
        }else{
            target = +targetValue;
        };
        let count = 0;
        let speed = target / 100;

        const formatNumber = (number) =>{
            if(number >= 1000){
                return (number / 1000) + "K";
            }else{
                return number;
            };
        };

        let updateCounter = () => {
        if (count < target){
            count += Math.ceil(speed);
            counter.textContent = formatNumber(count);
            setTimeout(updateCounter, 30);
        }else{
            counter.textContent = formatNumber(target);
        };
    };
    updateCounter();
    });
});
