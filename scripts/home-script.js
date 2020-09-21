const readMoreBtn = document.getElementsByClassName("read-more-btn");

// function buttonMouseOver(i){
//     readMoreBtn[i].className = "read-more-btn active";
//     console.log("hovered");
// }

// function buttonMouseLeave(i){
//     readMoreBtn[i].className = "read-more-btn";
//     console.log("left");
// }
function setColor(index){
    switch(index){
        case 0:
            readMoreBtn[0].style.color = "#008037";
            break;
        case 1:
            readMoreBtn[1].style.color = "#ff914d";
            break;
        case 2:
            readMoreBtn[2].style.color = "#ff5757";
            break;
    }
}

for(var i = 0 ; i < 3; i++){
    let index = i;
    readMoreBtn[index].addEventListener("mouseover",(e) => {
        readMoreBtn[index].setAttribute("hover","true");
        setColor(index);
    });

    readMoreBtn[index].addEventListener("mouseleave",(e)=>{
        readMoreBtn[index].setAttribute("hover","false");
        readMoreBtn[index].style.color = "white";
    });

}

readMoreBtn[0].addEventListener("click",(e)=>{
    window.location.href="#";
});

readMoreBtn[1].addEventListener("click",(e)=>{
    window.location.href="#";
});

readMoreBtn[2].addEventListener("click",(e)=>{
    window.location.href="#";
});

