let form = document.querySelector('form');
let input = document.querySelector('#input')
let color = document.querySelector('#select-color')
let photoSection = document.querySelector('#photo')
let button = document.querySelector('#submit')
let previous = document.querySelector('#prev')
let next = document.querySelector('#next')
let apiKey = 'https://pixabay.com/api/?key=33504400-b87edb6ce041e4f4c84fb55a2'
let counter = 1; //page 

//Uncaught ReferenceError: search is not defined
let search;




//form on submit, eventprevent default.
form.onsubmit = async event => {
  event.preventDefault();
  search = '&q=' + color.value + '+' + input.value;
  displayImage(search);
}

// async function displayImage(search){
//   let respons = await fetch(apiKey + search + '&page=' + counter + '&per_page=10&image_type=photo');
//   let jsonRespons = await respons.json();

//   photoSection.textContent = ''; //clear images when searching again
//   jsonRespons.hits.forEach(hit => {
//       let img = document.createElement('img');
//       img.src = hit.webformatURL;
//       photoSection.appendChild(img);
      
//       // Create tags element
//       let tags = document.createElement('p');
//       tags.textContent = hit.tags;
//       photoSection.appendChild(tags);
      
//       // Create photographer element
//       let photographer = document.createElement('p');
//       photographer.textContent = ' Taken by:' + hit.user;
//       photoSection.appendChild(photographer);
//     });
// };

async function displayImage(search){
  let respons = await fetch(apiKey + search + '&page=' + counter + '&per_page=10&image_type=photo');
  let jsonRespons = await respons.json();

  photoSection.textContent = ''; //clear images when searching again
  jsonRespons.hits.forEach(hit => {
   
    // Create container element for each image
    let container = document.createElement('div');
    
    // Create image element and append to container
    let img = document.createElement('img');
    img.src = hit.webformatURL;
    container.appendChild(img);
      
    // Create tags element and append to container
    let tags = document.createElement('p');
    tags.textContent = hit.tags;
    container.appendChild(tags);
      
    // Create photographer element and append to container
    let photographer = document.createElement('p');
    photographer.textContent = 'Taken by: ' + hit.user;
    container.appendChild(photographer);
    
    // Append container to photoSection
    photoSection.appendChild(container);
  });
};




// Previous button
previous.onclick = event => {
  counter--;
  displayImage(search);
}

// Next button
next.onclick = event => {
  counter++;
  displayImage(search);
}




// let button = document.querySelector('button')
// let counter = 0;

// button.onclick = event => {
//   counter++;
//   alert('You have clicked ' + counter + ' times')
// }



//let apiKey = 'https://pixabay.com/api/?key=33504400-b87edb6ce041e4f4c84fb55a2'

// async function searchPhoto(){
    
//     let respons= await fetch('https://pixabay.com/api/?key=33504400-b87edb6ce041e4f4c84fb55a2&q=yellow+flowers&image_type=photo');
    
//     let json = await respons.json();
// }



