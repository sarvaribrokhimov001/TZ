// const api = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin&vs_currencies=usd";
// const mainContainerSections = document.querySelector('.main__container__sections');

// fetch(api)
// .then(res => res.json())
// .then((data) => {
//     showData(data);
// });

// function showData(data) {
//     data.map((item) => {
//         const {} = item;
//         // console.log(flags);
//         console.log(data);
        
//     mainContainerSections.innerHTML += `
    
//                   <div>
//                     <div class="main__container__section">
//                         <p class="main__container__section__text"> binancecoin </p>
//                         <p class="main__container__section__price"> $919,79 </p>
//                     </div> <!-- main__container__section -->

//                       <div class="main__container__section">
//                         <p class="main__container__section__text"> bitcoin </p>
//                         <p class="main__container__section__price"> $94 280 </p>
//                     </div> <!-- main__container__section -->

//                       <div class="main__container__section">
//                         <p class="main__container__section__text"> ethereum </p>
//                         <p class="main__container__section__price"> $3 298,57 </p>
//                     </div> <!-- main__container__section -->

//                       <div class="main__container__section">
//                         <p class="main__container__section__text"> tether </p>
//                         <p class="main__container__section__price"> $1 </p>
//                     </div> <!-- main__container__section -->
//                   </div>
//     `
//     });
//  };








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

fetch(api)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    
    mainContainerSections.innerHTML = `
      <div class="main__container__section">
        <p class="main__container__section__text">BinanceCoin</p>
        <p class="main__container__section__price">$${data.binancecoin.usd}</p>
      </div>

      <div class="main__container__section">
        <p class="main__container__section__text">bitcoin</p>
        <p class="main__container__section__price">$${data.bitcoin.usd}</p>
      </div>

      <div class="main__container__section">
        <p class="main__container__section__text">Ethereum</p>
        <p class="main__container__section__price">$${data.ethereum.usd}</p>
      </div>

      <div class="main__container__section">
        <p class="main__container__section__text">Tether</p>
        <p class="main__container__section__price">$${data.tether.usd}</p>
      </div>
    `;
  });