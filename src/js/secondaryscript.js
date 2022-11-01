window.onload = function(){
    document.getElementsByClassName("logo")[0].addEventListener("click",pictureClicked,true);

    function pictureClicked(){
        document.getElementsByClassName("dropdownNav")[0].style.display = "flex";
    }

    //dropdown menu will disappear if window width is changed to less than 900px (header picture will also disappear at the same time)
    window.onresize = function(){
        if(window.innerWidth<=900){
            document.getElementsByClassName("dropdownNav")[0].style.display = "none";
            }
    }
    window.onclick = function(event){
        if(event.target.id == "" || !event.target.id == "header-image"){
            document.getElementsByClassName("dropdownNav")[0].style.display = "none";
        }
    }
}