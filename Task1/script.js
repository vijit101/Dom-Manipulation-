function changeBackgroundColor(selector){
    //Implement your function here
    let allclass = document.querySelectorAll(selector);
    for(let i= 0;i<allclass.length;i++){
        allclass[i].setAttribute("style", "background-color: yellow;");
    }
   
}