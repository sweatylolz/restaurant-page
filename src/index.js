import './styles.css';
import { homeStart } from './home';
import { menuStart } from './menu';
import { teamStart } from './team';


const homeBtn = document.getElementById("homebtn");
homeBtn.onclick = function() {
    resetDiv();
    homeStart();
}

const menuBtn = document.getElementById("menubtn");
menuBtn.onclick = function() {
    resetDiv();
    menuStart();
}

const teamBtn = document.getElementById("teambtn");
teamBtn.onclick = function() {
    resetDiv();
    teamStart();
}

function resetDiv() {
    const container = document.getElementById("content");
    const mainContainer = document.getElementById("main-content-container");
    container.removeChild(mainContainer);
}

homeStart();
//menuStart();
//teamStart();