var page = 0;
var maxPage=4;

window.onload = function(){
    selected();
}

function clicked(){
    var btn = document.getElementById("selected_"+page);
    
    
    btn.style.transform="scale(1.03)";
    var cnt = 0;
    var interval = setInterval(function(){
        if(cnt!=3){
            flashBtn(btn);
            cnt++;
        }else{
            clearInterval(interval);
        }
    }, 200);

    if(page == maxPage){
        setTimeout(function() {
            hideContent();
            getLastBtn();
        }, 1000);
    }else{
        setTimeout(function() {
            selected();
        }, 1000);
    }
    
    page++;
}

function flashBtn(btn){
    if(btn.style.backgroundColor=="rgb(0, 0, 0)"){
        btn.style.backgroundColor="rgb(255, 250, 244)";
        btn.style.color="rgb(0, 0, 0)";
    }else{
        btn.style.backgroundColor="rgb(0, 0, 0)";
        btn.style.color="rgb(255, 250, 244)";
    } 
} 

function selected(){
    var bar = document.getElementById(page);
    var img = document.getElementsByClassName('content_img');
    var text = document.getElementsByClassName('content_text');
    var btn = document.getElementsByClassName('select');

    bar.style.backgroundColor="rgb(0, 0, 0)";
    for(var i=0; i<img.length; i++){
        img[i].style.display="none";
        text[i].style.display="none";
        btn[i].style.display="none";
        if(page==i){
            img[page].style.display="block";
            text[page].style.display="block";
            btn[page].style.display="block";
        }
    }
}

function hideContent(){
    var img = document.getElementsByClassName('content_img');
    var text = document.getElementsByClassName('content_text');
    var btn = document.getElementsByClassName('select');
    for(var i=0; i<img.length; i++){
        img[i].style.display="none";
        text[i].style.display="none";
        btn[i].style.display="none";
    }
}

function getLastBtn(){
    var lastBtn = document.getElementsByClassName('result_box');
    lastBtn[0].style.display="block";
}

function getResult(){
    var lastBtn = document.getElementsByClassName('result_box');
    lastBtn[0].style.display="none";
    var lastContent = document.getElementsByClassName('result_content');
    lastContent[0].style.display="block";
}