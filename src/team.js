import lemmy from './art/lemmy.JPG';
import oscar from './art/oscar.JPG';
import mike from './art/mike.JPG'; 

export function teamStart() {

    const contentContainer = document.createElement("div");
    contentContainer.id = "main-content-container";
    const content = document.getElementById("content");

    content.appendChild(contentContainer);
    const aboutHeader = "Meet Our Team";

    const h1Element = document.createElement("h1");         //header title
    h1Element.id = "header";
    h1Element.textContent = aboutHeader;
    contentContainer.appendChild(h1Element);

    const imageContainer1 = document.createElement("div");  //make lemmy info and containers
    const lemmyImageElement = document.createElement("img");
    const h2Element1 = document.createElement("h2");
    h2Element1.id = "lemmy-header";
    h2Element1.textContent = "Head Chef: Lemmy"
    lemmyImageElement.src = lemmy;

    imageContainer1.appendChild(h2Element1);
    imageContainer1.appendChild(lemmyImageElement);
    contentContainer.appendChild(imageContainer1);
    
    const imageContainer2 = document.createElement("div"); //make oscar info and containers
    const oscarImageElement = document.createElement("img");
    const h2Element2 = document.createElement("h2");
    h2Element2.id = "oscar-header";
    h2Element2.textContent = "General Manager: Oscar";
    oscarImageElement.src = oscar;

    imageContainer2.appendChild(h2Element2);
    imageContainer2.appendChild(oscarImageElement);
    contentContainer.appendChild(imageContainer2);

    const imageContainer3 = document.createElement("div");   //make mike info and containers
    const mikeImageElement = document.createElement("img");  
    const h2Element3 = document.createElement("h2");
    h2Element3.id = "mike-header";
    h2Element3.textContent = "Bar Manager: Mike";
    mikeImageElement.src = mike;

    imageContainer3.appendChild(h2Element3);
    imageContainer3.appendChild(mikeImageElement);
    contentContainer.appendChild(imageContainer3);

}