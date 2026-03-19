Toastify({
    text: "Dasturimizga xush kelibsiz !",
    duration: 3500,
    gravity: "top",
    position: "center",
    close: true,
    style: {
      background: "linear-gradient(to right, black, black )",
      borderRadius: "30px",
      color: "cyan",
      boxShadow: "0 4px 12px rgba(0, 255, 255, 0.4)"
    }
  }).showToast();

  Toastify({
    text: "Assalomu alaykum",
    duration: 3500,
    gravity: "top",
    position: "center",
    close: true,
    style: {
      background: "linear-gradient(to right, black, black)",
      borderRadius: "30px",
      color: "cyan",
      boxShadow: "0 4px 12px rgba(0, 255, 255, 0.4)"
    }
  }).showToast();

const api = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin&vs_currencies=usd";
const mainContainerSections = document.querySelector(".main__container__sections");

fetch(`${api}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    
    mainContainerSections.innerHTML = `
      <div class="main__container__section">
        <p class="main__container__section__text"> BinanceCoin </p>
        <p class="main__container__section__price"> $${data.binancecoin.usd} </p>
      </div>

      <div class="main__container__section">
        <p class="main__container__section__text"> Bitcoin </p>
        <p class="main__container__section__price"> $${data.bitcoin.usd} </p>
      </div>

      <div class="main__container__section">
        <p class="main__container__section__text"> Ethereum </p>
        <p class="main__container__section__price"> $${data.ethereum.usd} </p>
      </div>

      <div class="main__container__section">
        <p class="main__container__section__text"> Tether </p>
        <p class="main__container__section__price"> $${data.tether.usd} </p>
      </div>
    `;
  });