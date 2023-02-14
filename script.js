const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const crypName = urlParams.get('crypto')



const bitcoinApi = 'https://api.coincap.io/v2/assets/'+crypName;


async function getBitcoin() {
    const response = await fetch(bitcoinApi)
    const data = await response.json();

    document.getElementById('name').textContent = data.data.name;
    document.getElementById('price').textContent = data.data.priceUsd;
    document.getElementById('symbol').textContent = data.data.symbol;
    document.getElementById('rank').textContent = data.data.rank;
    document.getElementById('supply').textContent = data.data.supply;
    document.getElementById('maxSupply').textContent = data.data.maxSupply;    
    document.getElementById('marketCap').textContent = data.data.marketCapUsd;
    document.getElementById('volumeUsd24Hr').textContent = data.data.volumeUsd24Hr;
    document.getElementById('changePercent24Hr').textContent = data.data.changePercent24Hr;
    document.getElementById('vwap24Hr').textContent = data.data.vwap24Hr;
    document.getElementById('explorer').textContent = data.data.explorer;
}

getBitcoin();

setInterval(getBitcoin, 1)