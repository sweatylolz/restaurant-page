export function menuStart() 
{
    const contentContainer = document.createElement("div");
    contentContainer.id = "main-content-container";
    const content = document.getElementById("content");
    content.appendChild(contentContainer);
    
    const menuHeader = "Menu";
    const firstItem = "Very Berry Spritz 12$";
    const secondItem = "Juicy Jammin' Cocktail 15$";
    const thirdItem = "Beer Pretzels 8$";
    const fourthItem = "Nasty Little Nachos 11$";

    const h1Element = document.createElement("h1");         //header title
    h1Element.id = "header";
    h1Element.textContent = menuHeader;
    contentContainer.appendChild(h1Element);

    const menuContainer1 = document.createElement("div");  //menu container
    menuContainer1.id = "menu-container";
    menuContainer1.classList = "content-container";
    const menuItemOne = document.createElement("h3");    //first menu item container
    menuItemOne.id = "menu-item-one";
    menuItemOne.textContent = firstItem;
    const menuItemOneDescription = document.createElement("p");
    menuItemOneDescription.textContent = "A cocktail made from three types of berries, vodka, soda, served in a high glass.";
    menuContainer1.appendChild(menuItemOne);
    menuContainer1.appendChild(menuItemOneDescription);
    contentContainer.appendChild(menuContainer1);

    const menuContainer2 = document.createElement("div");  //menu container
    menuContainer2.id = "menu-container";
    menuContainer2.classList = "content-container";
    const menuItemTwo = document.createElement("h3");    //second menu item container
    menuItemTwo.id = "menu-item-two";
    menuItemTwo.textContent = secondItem;
    const menuItemTwoDescription = document.createElement("p");
    menuItemTwoDescription.textContent = "Another house favorite cocktail, made with the nectar from an orange, tequila, soda, with a lime on the rim.";
    menuContainer2.appendChild(menuItemTwo);
    menuContainer2.appendChild(menuItemTwoDescription);
    contentContainer.appendChild(menuContainer2);

    const menuContainer3 = document.createElement("div");  //menu container
    menuContainer3.id = "menu-container";
    menuContainer3.classList = "content-container";
    const menuItemThree = document.createElement("h3");    //third menu item container
    menuItemThree.id = "menu-item-two";
    menuItemThree.textContent = thirdItem;
    const menuItemThreeDescription = document.createElement("p");
    menuItemThreeDescription.textContent = "Beer pretzels, you already know the vibe.";
    menuContainer3.appendChild(menuItemThree);
    menuContainer3.appendChild(menuItemThreeDescription);
    contentContainer.appendChild(menuContainer3);

    const menuContainer4 = document.createElement("div");  //menu container
    menuContainer4.id = "menu-container";
    menuContainer4.classList = "content-container";
    const menuItemFour = document.createElement("h3");    //fourth menu item container
    menuItemFour.id = "menu-item-two";
    menuItemFour.textContent = fourthItem;
    const menuItemFourDescription = document.createElement("p");
    menuItemFourDescription.textContent = "They're nasty, they're yummy, they're nastily yummy.";
    menuContainer4.appendChild(menuItemFour);
    menuContainer4.appendChild(menuItemFourDescription);
    contentContainer.appendChild(menuContainer4);
};

