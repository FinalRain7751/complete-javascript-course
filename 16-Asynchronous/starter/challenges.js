'use strict';

const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');
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
                    )}</p>
                    <p class="country__row"><span>💰</span>${
                      Object.values(data.currencies)[0].name
                    }</p>
                  </div>
                </article>
                `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
}

function whereAmI(lat, lng) {
  getJSON(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${API_KEY}`)
    .then(data => {
      if (data.city === 'Throttled! See geocode.xyz/pricing') {
        throw new Error(
          `API call limit reached. Couldn't fetch data. Try again later.`
        );
      }
      const city = data.city;
      const country = data.country;
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

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(position => {
    const coords = position.coords;
    whereAmI(coords.latitude, coords.longitude);
  });
}

btn.addEventListener('click', function () {
  getCurrentPosition();
  //   whereAmI(52.508, 13.381);
  //   whereAmI(-33.933, 18.474);
  //   whereAmI(19.037, 72.873);
});
