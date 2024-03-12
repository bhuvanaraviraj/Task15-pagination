let link = document.getElementsByClassName("link");

let currentValue = 1;

function activeLink(event){
    const links = document.querySelectorAll('a');
    for(l of link){
        l.classList.remove("active");
        l.addEventListener('click', activeLink);
    }
    event.target.classList.add("active");
    currentValue = event.target.value;
   
}

function backBtn(event){
    if(currentValue > 1){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue--;
        link[currentValue-1].classList.add("active");
    }
}

function nextBtn(){
    if(currentValue < 6){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue++;
        link[currentValue-1].classList.add("active");
    }
}

