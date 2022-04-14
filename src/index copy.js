console.log('loading index.js ...')

var i = 0;


function initializePage() {
    if(this.state) {
        console.log('state exists IDK :shrug:', this.state)
    } else {
        // load cookies too
        this.state = {}
        console.log('app state initialized', this.state)
    }
    const urlParams = new URLSearchParams(window.location)
    console.log('url??', window.location, urlParams.get('page'))
    loadPortfolioElements()
}

function loadPortfolioElements() {
    let portfolioHangers = []
    for(let item of portfolio_ref) {
        let img = document.createElement('img')
        img.src = item.img
        img.classList.add('portfolio-select-icon')
        let title = document.createElement('span')
        title.textContent = item.name
        title.classList.add('portfolio-select-title')
        let container = document.createElement('li')
        container.classList.add('portfolio-select')
        container.onclick = () => {console.log('selfmade click', item.link)}
        container.append(img, title)

        // portfolioHangers.push(container)
        document.getElementById('portfolio-selection').appendChild(container)
    }

    // .appendC(portfolioHangers)
}

function loadPortfolio(pageTitle) {

    fetch(pageTitle).then(response => response.text())
    .then(data => document.getElementById('main-content').innerHTML = data);
    // .then(response => {
    //     console.log('response', response)
    //     return response.json()
    //     // document.getElementById('main-content').innerHTML = jres.body
    // }).then(data => {
    //     console.log('data', data)
    // })
}

function test() {
    console.log(this);
}

function putContent() {
    let my_content = document.createElement('p')
    my_content.innerHTML = i++
    document.getElementById('testID').appendChild(document.createElement('template').content.appendChild(my_content))
    console.log(document.getElementById('testID'))
}

function clearContent() {
    document.getElementById('testID').innerHTML = ''
}


console.log('finished loading index.js')