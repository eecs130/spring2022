let results;
const serverURL = 'https://www.apitutor.org/flickr/simple/';

const getPhotos = () => {
    // this function pulls down data from a server
    // everytime it is invoked. Change the value of
    // the tag to get different data:
    fetch(serverURL + '?tags=nature')
        .then(response => response.json())
        .then(doSomethingWithTheData);
};

const doSomethingWithTheData = (response) => {
    // this function executes once the data has been 
    // pulled down from the server:
    results = response;
    for (const result of results) {
        const template = `<img src="${result.img_url}" />`;
        document.querySelector('#gallery').innerHTML += template;
    }

    console.log('The Flickr data is stored in a variable called "results":')
    console.log(results);
};

// invoke the function when the page initializes:
getPhotos();