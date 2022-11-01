window.onload = function(){
    
    //the next commented out row is for fetching online
    //fetch('https://api.npoint.io/dd97174d7d1e6f185fbd')
    fetch("/html and css/hw2.json")
        .then((response)=>response.json())
        .then(json => {

            showJsoncontent(json);
        }
            )


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
        if(event.target.id === "" || !event.target.id === "header-image" && event.target.id === "dropdown-label1" && event.target.id === "dropdown-label2"){
            document.getElementsByClassName("dropdownNav")[0].style.display = "none";
        }
    }
}

function showJsoncontent(jsonElements){

    for (const jsonElement of jsonElements) {
        
        //whole post element
        let newArticle=document.createElement("article");
        
        //post header
        let newArticleHeaderSection=document.createElement("section");
        newArticleHeaderSection.className=jsonElement.classofArticleHeader;

        let newProfileIcon=document.createElement("a");
        newProfileIcon.className=jsonElement.classofProfileIcon;

        let newProfileImage=document.createElement("img");
        newProfileImage.src = jsonElement.pathToFacePicture;
        newProfileImage.alt = "profile picture"
        newProfileImage.width=50;
        newProfileImage.height=50;

        newProfileIcon.appendChild(newProfileImage);

        let newName = document.createElement("label");
        newName.className = "post-name";
        newName.textContent += jsonElement.authorName;
        newProfileIcon.appendChild(newName);
        
        let dateElement = document.createElement("p");
        dateElement.className=jsonElement.classofDate;
        dateElement.textContent+=jsonElement.creationTime;

        newArticleHeaderSection.append(newProfileIcon,dateElement);
        newArticle.appendChild(newArticleHeaderSection);

        //post body
        let newArticleBodySection = document.createElement("section");
        newArticleBodySection.className=jsonElement.classofArticleBody;

        let articleBodyImagePath=jsonElement.pathToBodyPicture;
        if(articleBodyImagePath!=null){
            let newArticleBodyImage = document.createElement("img")
            newArticleBodyImage.className=jsonElement.classOfPicture;
            newArticleBodyImage.src=articleBodyImagePath;
            newArticleBodyImage.alt="body image";

            newArticleBodySection.appendChild(newArticleBodyImage);
        }

        let articleBodyText = document.createElement("p");
        articleBodyText.textContent=jsonElement.bodyOfPost;
        newArticleBodySection.appendChild(articleBodyText);

        let newLikeButton = document.createElement("img");
        newLikeButton.className = jsonElement.classOfButton;
        newLikeButton.src="/Images/likeIcon.png";
        newLikeButton.alt="Like";
        newArticleBodySection.appendChild(newLikeButton);

        newArticle.appendChild(newArticleBodySection);

        const documentMain = document.getElementsByTagName("main")[0];
        documentMain.appendChild(newArticle);
        //in the end will add new article to </main>
    }
}