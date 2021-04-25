const container = document.querySelector(".container");
let currentPage = 1;

//Characters

let displayChracters = (event) => {
    event.preventDefault();
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    getCharacters();
};


async function getCharacters() {
    await axios.get ('https://swapi.dev/api/films/1')
        .then((response) => {
            const character = response.data.characters;
            for (let i = 0; i < character.length; i++) {
                fetch(character[i])
                    .then((response) => {
                        return response.json()
                    })
                    .then((data) => {
                        const wrapCharachter = document.createElement('div')
                        wrapCharachter.className = "characters";
                        wrapCharachter.style.cssText =`
                        display: block;
                        flex-direction: row;
                        margin: 5px;
                        color: white;
                        font-size: 15px;
                        flex-wrap: wrap;`;
                        wrapCharachter.innerHTML =
                            "Name: " + data.name + " |" +
                            " Birth date: " + data.birth_year + " |" +
                            " Gender: " + data.gender;
                        container.append(wrapCharachter);
                    });
            }
        })
}

document.getElementById("get-characters-btn").addEventListener("click", displayChracters);




// Planets

let displayPlanets = (event) => {
    event.preventDefault();
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    getPlanets();
};


async function getPlanets() {
    await axios.get ('https://swapi.dev/api/planets/')
        .then((response) => {
            const ObjectPlanets = response.data.results;
            const planetsNames = ObjectPlanets.map((planet) => planet.name ).join("<br>");
            const wrapPlanets = document.createElement('div')
            wrapPlanets.className = "planets";
            wrapPlanets.style.cssText = `
            display: flex;
            flex-direction: row;
            margin: 10px;
            color: white;
            font-size: 20px;
            flex-wrap: wrap;
            padding: 15px;`;
            wrapPlanets.innerHTML = planetsNames;
            container.append(wrapPlanets);
        })
}

document.getElementById("get-planets-btn").addEventListener("click", displayPlanets);



//Next Page


let displayNextPlanets = (event) => {
    event.preventDefault();
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    nextPage();
};


async function nextPage() {
        if (currentPage < 6) {
            currentPage++
        let link = `https://swapi.dev/api/planets/?page=${currentPage}`
        await axios.get (link)
            .then((response) => {
                const ObjectPlanets = response.data.results;
                const planetsNames = ObjectPlanets.map((planet) => planet.name ).join("<br>");
                const wrapPlanets = document.createElement('div')
                wrapPlanets.className = "planets";
                wrapPlanets.style.cssText = `
                    display: flex;
                    flex-direction: row;
                    margin: 10px;
                    color: white;
                    font-size: 20px;
                    flex-wrap: wrap;
                    padding: 15px;`;
                wrapPlanets.innerHTML = planetsNames;
                container.append(wrapPlanets);
            })
    }
}


document.getElementById("next-page").addEventListener("click", displayNextPlanets);

