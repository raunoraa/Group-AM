window.onload = function(){
    
    //the next commented out row is for fetching online
    //fetch('https://api.npoint.io/dd97174d7d1e6f185fbd')
    fetch("/html and css/hw2.json")
        .then((response)=>response.json())
        .then(json => {

            showJsoncontent(json);
        }
            )
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

        /*
        for (const arrElement of jsonElement.array) {
            let liElement=document.createElement("li");
            let liText=document.createTextNode(arrElement);

            liElement.appendChild(liText);
            ulElement.appendChild(liElement);
        }

        let truthValueText=document.createTextNode(jsonElement.boolean);
        newDiv.appendChild(truthValueText);

        let colorText=document.createTextNode(jsonElement.color);
        newDiv.appendChild(colorText);

        let numberText=document.createTextNode(jsonElement.number);
        newDiv.appendChild(numberText)

        let objectText=document.createTextNode(jsonElement.object);
        newDiv.appendChild(objectText);

        let textText=document.createTextNode(jsonElement.string)
        newDiv.appendChild(textText)

        document.body.appendChild(newDiv);
        */
    }
}