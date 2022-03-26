const makeBigger = () => {
   document.querySelector('.content').style.fontSize = '2em';
   document.querySelector('body').style.backgroundColor = 'hotpink';
};

const makeSmaller = () => {
   document.querySelector('.content').style.fontSize = '1.4em';
   document.querySelector('body').style.backgroundColor = 'white';
};


document.querySelector('.a1').onclick = makeBigger;
document.querySelector('.a2').onclick = makeSmaller;