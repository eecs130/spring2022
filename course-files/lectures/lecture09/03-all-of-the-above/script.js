const changeColor = () => {
    document.querySelector('.panel').style.background = 'hotpink';
};

const changeTitle = () => {
    //what do we want to change?
    
};

const addImage = () => {
    // adds the following image to each panel:
    // 1. what element do you want to select?
    //`<img src="https://media1.britannica.com/eb-media/22/65322-004-8FF21CDA.jpg" />`;

};

const clearDivs = () => {
    // clears all of the panels of content
};

// attach event handlers:
document.querySelector("#color_button").onclick = changeColor;
document.querySelector("#title_button").onclick = changeTitle;
document.querySelector("#wombat_button").onclick = addImage;
document.querySelector("#clear_button").onclick = clearDivs;