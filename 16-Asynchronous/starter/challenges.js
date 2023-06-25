'use strict';

const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');
const imagesContainer = document.querySelector('.images');
const API_KEY = `228662073460122986412x7157`;

function getJSON(url, errorMsg = "Couldn't fetch data.") {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`${errorMsg} Status code ${response.status}`);
    return response.json();
  });
}

function renderError(err) {
  console.error(err);
  countriesContainer.insertAdjacentText(
    'beforeend',
    `Something went wrong. ${err}`
  );
}

function renderCountry(data, className = '') {
  const html = `
            <article class="country ${className}">
                  <img class="country__img" src="${data.flags.png}" />
                  <div class="country__data">
                    <h3 class="country__name">${data.name.common}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(1)} million people</p>
                    <p class="country__row"><span>🗣️</span>${Object.values(
                      data.languages
                    )
                      .slice(0, 3)
                      .join(', ')}</p>
                    <p class="country__row"><span>💰</span>${
                      Object.values(data.currencies)[0].name
                    }</p>
                  </div>
                </article>
                `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
}

const getCurrentPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

function whereAmI() {
  getCurrentPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return getJSON(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${API_KEY}`
      );
    })
    .then(data => {
      if (data.city === 'Throttled! See geocode.xyz/pricing') {
        throw new Error(
          `API call limit reached. Couldn't fetch data. Try again later.`
        );
      }
      let city = data.city;
      let country = data.country;
      console.log(`You are in ${city}, ${country}.`);
      return getJSON(
        `https://restcountries.com/v3.1/name/${country}?fullText=false`
      );
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      renderError(err);
      //   console.error(`Something went wrong. ${err}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener('click', function () {
  whereAmI();
});

console.log('Getting current position');

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let img;

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imagesContainer.insertAdjacentElement('beforeend', img);
      resolve(img);
    });
    img.addEventListener('error', () =>
      reject(new Error('Failed to load image.'))
    );
  });
}

createImage('./img/img-1.jpg')
  .then(() => wait(2))
  .then(() => {
    img.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(() => wait(2))
  .then(() => {
    img.style.display = 'none';
    return createImage('./img/img-3.jpg');
  })
  .then(() => wait(2))
  .then(() => (img.style.display = 'none'))
  .catch(err => console.error(err));
