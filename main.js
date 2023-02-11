let form = document.querySelector('form');
let input = document.querySelector('#input')
let color = document.querySelector('#select-color')
let photoSection = document.querySelector('#photo')

//form on submit, eventprevent default.

form.onsubmit = async event => {
    event.preventDefault();

    let respons= await fetch('https://pixabay.com/api/?key=33504400-b87edb6ce041e4f4c84fb55a2&q=yellow+flowers&image_type=photo');

    let jsonRespons = await respons.json();

    //let result = jsonRespons.hits[0].previewURL;
    //LargeImageUrl = HD
    

    // let img = document.createElement('img');
    // img.src = result;
    // photoSection.appendChild(img);

    
    //all pictures
    jsonRespons.hits.forEach(hit => {
      let img = document.createElement('img');
      img.src = hit.LargeImageUrl;
      photoSection.appendChild(img);
    }
    );

}

//let apiKey = 'https://pixabay.com/api/?key=33504400-b87edb6ce041e4f4c84fb55a2'

// async function searchPhoto(){
    
//     let respons= await fetch('https://pixabay.com/api/?key=33504400-b87edb6ce041e4f4c84fb55a2&q=yellow+flowers&image_type=photo');
    
//     let json = await respons.json();
// }



