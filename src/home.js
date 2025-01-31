export function homeStart() {

    const contentContainer = document.createElement("div");
    contentContainer.id = "main-content-container";
    const content = document.getElementById("content");

    content.appendChild(contentContainer);

    const h1Element = document.createElement("h1");         //header title
    h1Element.id = "header";
    h1Element.textContent = "Johnny's Joy Bar";
    contentContainer.appendChild(h1Element);

    const infoContainer = document.createElement("div");  //information container
    infoContainer.id = "info-container";
    infoContainer.classList = "content-container";
    const infoContainerText = document.createElement("p");
    infoContainerText.textContent = "Johnny's was established in 1995. It has been an austin staple for many happy customers. Focusing on fun cocktails, there is also many snacks and nibbles you can grab to eat.";
    infoContainer.appendChild(infoContainerText);
    contentContainer.appendChild(infoContainer);

    const hoursContainer = document.createElement("div"); //hours container
    hoursContainer.id = "hours-container";
    hoursContainer.classList = "content-container";
    const hoursContainerHeader = document.createElement("h3");
    hoursContainerHeader.textContent = "Hours";
    hoursContainer.appendChild(hoursContainerHeader);
    const hoursList = document.createElement("ul");
    hoursList.id = "hours-list";


    let hoursListArray = ["Monday: Closed", "Tuesday: Closed", "Wednesday: 4pm - 12am", "Thursday: 4pm - 12am", "Friday: 4pm - 2am", "Saturday: 4pm - 2am", "Saturday: 4pm - 2am"];

    hoursListArray.forEach(renderHourList);  //adds each item in the array to the ul
    function renderHourList(element, index, arr) {
        let li = document.createElement("li");
        hoursList.appendChild(li);
        li.textContent = li.textContent + element;
    }

    hoursContainer.appendChild(hoursList);
    contentContainer.appendChild(hoursContainer);

    const locationContainer = document.createElement("div");
    locationContainer.id = "location-container";
    locationContainer.classList = "content-container";
    const locationContainerHeader = document.createElement("h3"); 
    locationContainerHeader.textContent = "Location";
    const locationContainerInfo = document.createElement("p");
    locationContainerInfo.textContent = "2243 Joy Boy Street, 78703, Austin, TX";

    locationContainer.appendChild(locationContainerHeader);
    locationContainer.appendChild(locationContainerInfo);
    contentContainer.appendChild(locationContainer);
    
}