let precoBitcoin = window.document.getElementById('valor-bitcoin')

fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((response) => {
    response.json().then((description, rate_float) => {
        console.log(description, rate_float)
    })
})