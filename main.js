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



form.onsubmit = async event => {
  event.preventDefault();
  search = '&q=' + color.value + '+' + input.value;
  displayImage(search);
}



async function displayImage(search) {
  let respons = await fetch(apiKey + search + '&page=' + counter + '&per_page=10&image_type=photo');
  let jsonRespons = await respons.json();

  photoSection.textContent = ''; //clear images when searching again
  jsonRespons.hits.forEach(hit => {

    // Create container element for each image
    let container = document.createElement('div');

    let img = document.createElement('img');
    img.src = hit.webformatURL;
    container.appendChild(img);

    let tags = document.createElement('p');
    tags.textContent = hit.tags;
    tags.style.color = 'white'; //To change text-color
    tags.style.fontSize = '20px';
    tags.style.textAlign = 'center'
    container.appendChild(tags);

    let photographer = document.createElement('p');
    photographer.textContent = 'Taken by: ' + hit.user;
    photographer.style.color = 'white';
    photographer.style.fontSize = '20px';
    photographer.style.textAlign = 'center'
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




