let form = document.querySelector('form');
let input = document.querySelector('#input')
let color = document.querySelector('#select-color')
let photoSection = document.querySelector('#photo')
let button = document.querySelector('#submit')
let previous = document.querySelector('#prev')
let next = document.querySelector('#next')
let buttonContainer = document.querySelector('#buttonContainer')
let apiKey = 'https://pixabay.com/api/?key=33504400-b87edb6ce041e4f4c84fb55a2'
let counter = 1; //page 
let perPage = 10;
let totalHits = 0;
let pagesTotal = 0;
let search = '';


form.onsubmit = async event => {
  event.preventDefault();
  search = '&q=' + input.value + '&colors=' + color.value;
  counter = 1; //resets page on new search
  displayImage();
  buttonContainer.style.display = 'grid';
}

async function displayImage() {
  let respons = await fetch(apiKey + search + '&page=' + counter + '&per_page=' + perPage + '&image_type=photo');
  let jsonRespons = await respons.json();

  photoSection.textContent = '';

  jsonRespons.hits.forEach(hit => {
    // Create container element for each image
    let container = document.createElement('div');
    container.classList.add('main')

    let img = document.createElement('img');
    img.src = hit.webformatURL;
    container.appendChild(img);

    let tags = document.createElement('p');
    tags.textContent = hit.tags;
    tags.classList.add('imageTags');
    container.appendChild(tags);

    let photographer = document.createElement('p');
    photographer.textContent = 'Taken by: ' + hit.user;
    photographer.classList.add('photographerCss');
    container.appendChild(photographer);

    // Append container to photoSection
    photoSection.appendChild(container);
  });

  //Divide images on pages
  totalHits = jsonRespons.totalHits;
  pagesTotal = Math.ceil(totalHits / perPage);

  // First page
  if (counter === 1) {
    previous.disabled = true;
  }

  // Last page
  if (counter === pagesTotal) {
    next.disabled = true;
  }
}

// Previous button
previous.onclick = event => {
  if (counter > 1) {
    counter--;
    displayImage();

    next.disabled = false;
  }
  if (counter === 1) {
    previous.disabled = true; //first page
  }
}

// Next button
next.onclick = event => {
  if (counter < pagesTotal) {
    counter++;
    displayImage();

    previous.disabled = false;
  }
  if (counter === pagesTotal) {
    next.disabled = true;
  }
}
