const flowersURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/flowers.json';    
const bikesURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/bikes.json';    
const carsURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/cars.json';    


const loadCards = (photos) => {

    // clear out the .cards innerHTML:
    document.querySelector('.cards').innerHTML = '';
    
    for (const photo of photos) {
        // create the template:
        const template = `
            <div class="card" style="background-image:url('${photo}')"></div>`;
        
        // append the div tag you just created to the ".cards" section of the DOM:
        document.querySelector('.cards').innerHTML += template;
    }
};

// this function uses the fetch API to go out to the internet to get the data to be displayed.
const showPics = ev => {
    let url = flowersURL;
    
    if (ev) {
        const preference = ev.currentTarget.value;
        if (preference === 'bikes') {
            url = bikesURL;
        } else if (preference === 'cars') {
            url = carsURL;
        }
    }
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(loadCards); // invokes a function to process the data
};


document.querySelector('#gallery').addEventListener('change', showPics)


showPics();