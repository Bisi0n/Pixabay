let form = document.querySelector('form');
let input = document.querySelector('#input')
let color = document.querySelector('#select-color')
let image = document.querySelector('#photo')

//form on submit, eventprevent default.

form.onsubmit = async event => {
    event.preventDefault();

    let respons= await fetch('https://pixabay.com/api/?key=33504400-b87edb6ce041e4f4c84fb55a2&q=yellow+flowers&image_type=photo');

    let jsonRespons = await respons.json();

    let result = jsonRespons.hits[0].previewURL;
    //let result = jsonRespons.hits;
    //img = src

    photo = new image
    image = result;

    //document.createelement(img);

}

let apiKey = 'https://pixabay.com/api/?key=33504400-b87edb6ce041e4f4c84fb55a2'

// async function searchPhoto(){
    
//     let respons= await fetch('https://pixabay.com/api/?key=33504400-b87edb6ce041e4f4c84fb55a2&q=yellow+flowers&image_type=photo');
    
//     let json = await respons.json();
// }



