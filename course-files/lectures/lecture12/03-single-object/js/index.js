//The data:
const person = { 
    name: "Jane", 
    pic: "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png", 
    score: 300 
};

document.write("<img src='" + person.pic + "'>");
document.write(person.name + "'s high score is: " + person.score + "<br>");

