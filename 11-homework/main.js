document.getElementById("get-planets-btn").addEventListener("click", getPlanets, {once : true});
document.getElementById("get-characters-btn").addEventListener("click", getCharacters, {once : true});
// document.getElementById("next-page").addEventListener("click", nextPage, {once : true});

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
            document.body.append(wrapPlanets);
        })
}


//
// async function nextPage() {
//     let currentPage = 1;
//     if (currentPage < 6) {
//         currentPage++
//         await axios.get (`https://swapi.dev/api/planets/?page=${currentPage}`)
//             .then((response) => {
//                 const ObjectPlanets = response.data.results;
//                 const planetsNames = ObjectPlanets.map((planet) => planet.name ).join("<br>");
//                 const wrapPlanets = document.createElement('div')
//                 wrapPlanets.className = "planets";
//                 wrapPlanets.style.cssText = `
//                     display: flex;
//                     flex-direction: row;
//                     margin: 10px;
//                     color: white;
//                     font-size: 20px;
//                     flex-wrap: wrap;
//                     padding: 15px;`;
//                 wrapPlanets.innerHTML = planetsNames;
//                 document.body.append(wrapPlanets);
//             })
//     }
// }

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
                        document.body.append(wrapCharachter);
                    });
            }
        })
}



