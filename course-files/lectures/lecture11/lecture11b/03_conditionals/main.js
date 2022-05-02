// See CodePen: https://codepen.io/vanwars/pen/KYjNQm?editors=0010

// event handler:
const fontSizer = ev => {
    const buttonElement = ev.currentTarget;

    // currentTarget refers to the DOM element that triggered the event:
    console.log(buttonElement);
};

