const getInfo = document.querySelector('#info');
const planets = document.querySelector('#planets');

const btn = [getInfo, planets];

function removeActive() {
    for(let i = 0; i < btn.length; i++) {
        btn[i].classList.remove('active');
    }

    const container = document.querySelector('.container');
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    };

    const nextBtn = document.querySelector('#next');
    if(nextBtn) nextBtn.remove();
}


//People

//Event listener
getInfo.addEventListener('click', getInformation);

function getInformation (event) {
    event.preventDefault();
    removeActive();
    getInfo.classList.add('active');
    getResponse1();
};

//
async function getResponse1() {
    try{
        fetch('https://swapi.dev/api/films/2/')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                const result = data.characters;
                console.log(result);

                for(let item of result) {
                    const requestURL = item.replace('http', 'https');
                    console.log(requestURL);
                    fetch(requestURL)
                        .then((response) => {
                            return response.json()
                        })
                        .then((data) => {
                            console.log(data);
                            const name = data.name;
                            const birthYear = data.birth_year;
                            const gender = data.gender;
                            console.log(name);
                            console.log(birthYear);
                            console.log(gender);

                            const container = document.querySelector('.container');
                            const person = document.createElement('div');
                            person.classList.add('person');
                            person.innerHTML = `
                        <h4>${data.name}</h4>
                        <p>${data.birth_year}</p>
                        <p>${data.gender}</p>
                    `;
                            container.append(person);
                        })
                }
            })
    } catch (error) {
        console.error('error');
    }
}


//Planets

//Event listener
planets.addEventListener('click', getPlanets);

function getPlanets (event) {
    event.preventDefault();
    removeActive();
    planets.classList.add('active');
    getResponse2();
};

//
async function getResponse2() {
    try{
        let page = 1;

        fetch('https://swapi.dev/api/planets/?page=1')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                const result = data.results;
                console.log(result);
                for(let item of result) {
                    const name = item.name;
                    const container = document.querySelector('.container');
                    const planet = document.createElement('div');
                    planet.classList.add('planet');
                    planet.innerHTML = `
                    <h4>${item.name}</h4>
                `;
                    container.append(planet);
                }

            })

        const container = document.querySelector('.container');
        container.insertAdjacentHTML('afterend', '<button id="next">Next</button>');

        const nextBtn = document.querySelector('#next')
        //Event button next:
        nextBtn.addEventListener('click', event => {
            ++page;

            fetch(`https://swapi.dev/api/planets/?page=${page}`)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    console.log(data);
                    const result = data.results;
                    console.log(result);
                    for(let item of result) {
                        const name = item.name;
                        const container = document.querySelector('.container');
                        const planet = document.createElement('div');
                        planet.classList.add('planet');
                        planet.innerHTML = `
                        <h4>${item.name}</h4>
                    `;
                        container.append(planet);
                    }
                })

            while(container.firstChild) {
                container.removeChild(container.firstChild)
            };

            const pages = 5;

            if(page === pages) {
                page = 0;
            };

        })
    } catch (error) {
        console.error('error');
    }
}