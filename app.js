const submit = document.getElementById('btn')
const newTitle = document.getElementById('newTitle')
const title = document.getElementById('title')
const container = document.getElementById('container')
const changeTitle = document.getElementById('changeTitle')
const jokeBtn = document.getElementById('jokeBtn')
const jokeCon = document.getElementById('jokeCon')

let x;
let setup;
let punchline;

// clear out the html--
function removeAllChildNodes(container) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

// API fetch call and Render
const jokeAPI = async () => {
    try 
{const res = await fetch("https://manatee-jokes.p.rapidapi.com/manatees/random", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "manatee-jokes.p.rapidapi.com",
                "x-rapidapi-key": "37e54864f6msh4425a9c55ae566ep1c5416jsnc4b75b4a6f0b"
            }
    })
    
    // pull joke/punchline from data and insert into HTML
    const data = await res.json()
    setup = data.setup;
    punchline = data.punchline;

    const html = `<h1 id="setup" class="theTitle">${setup}</h1>`
    const htmlPunch = `<h1 id="punchline" class="theTitle">${punchline}</h1>`
    container.insertAdjacentHTML('afterbegin', html)
    
    //delay for punchline
    setTimeout(function () {
        container.insertAdjacentHTML('beforeend', htmlPunch)
    }, 3000)
    } catch (err) {
        console.log(err);
    }
}



submit.addEventListener('click', function () {
    x = newTitle.value
       
    const html = `<h1 id="title" class="theTitle">${x}</h1>`

    removeAllChildNodes(container)
    removeAllChildNodes(changeTitle)
    jokeCon.classList.remove('--hidden');
    container.insertAdjacentHTML('afterbegin', html)
})


jokeBtn.addEventListener('click', function () {
    removeAllChildNodes(container)
    jokeAPI()
})




// jokeBtn.addEventListener('click', function () {
//     removeAllChildNodes(container)
    

//     fetch("https://manatee-jokes.p.rapidapi.com/manatees/random", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "manatee-jokes.p.rapidapi.com",
//             "x-rapidapi-key": "37e54864f6msh4425a9c55ae566ep1c5416jsnc4b75b4a6f0b"
//         }
//     })
//     .then(res => {
//         return res.json()
//     })
//         .then(data => {
//             const setup = data.setup;
//             const punchline = data.punchline;

//             const html = `<h1 id="setup" class="theTitle">${setup}</h1>`
//              const htmlPunch = `<h1 id="punchline" class="theTitle">${punchline}</h1>`
    
//             container.insertAdjacentHTML('afterbegin', html)

//             setTimeout(function () {
//                 container.insertAdjacentHTML('beforeend', htmlPunch)

//             }, 3000)
            
//         })
//     .catch(err => {
//         console.error(err);
//     });
// })
