const flowersURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/flowers.json';    
const bikesURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/bikes.json';    
const carsURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/cars.json';    

// Please complete the following tasks:
// 1. Create an image for each image address displayed in the list.
//      * If the images are an irregular size, you can also make div tags
//        with image backgrounds, for instance:
//           `<div class="card" style="background-image:url('${photo}')"></div>`
//
// 2. Add an "onchange" event handler to the select menu. When the user selects a different
//    option (e.g. flowers, cars), issue a fetch command with the corresponding url to 
//    display the new photos.
//
// 3. Extra credit: If you have time, add a click event handler to each photo so 
//    that the photo is shown in full screen.



// this code block uses the fetch API to (a) download a data file from the 
// Internet, and (b) print it to the console.
fetch(bikesURL)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });


    
    

