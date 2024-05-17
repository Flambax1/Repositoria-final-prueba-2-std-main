$(document).ready(function(){
    var cardData = [
      {
        title: "GeForce RTX 4070 Ti SUPER 16G GAMING X SLIM.",
        image: "https://campcom.cl/wp-content/uploads/2024/05/1024-32.png",
        description: "Experimenta el rendimiento extremo con 16GB de memoria GDDR6X y tecnología G-SYNC™."
      },
      {
        title: "FUENTE CORSAIR RM1000X SHIFT",
        image: "https://tienda.lancenter.cl/14178-large_default/fuente-corsair-rm1000x-shift-totalmente-modular.jpg",
        description: "uente de Alimentación ATX Totalmente Modular - Interfaz Lateral Modular - Compatible con ATX 3.0 y PCIe 5.0."
      },
      {
        title: "REFRIGERACIÓN LÍQUIDA PARA CPU H150 RGB 360 MM",
        image: "https://tienda.lancenter.cl/14161-large_default/refrigeracion-liquida-para-cpu-h100-rgb.jpg",
        description: "ofrece una refrigeración potente y fiable y una iluminación impresionante."
      },
      {
        title: "XBOX SERIES S CAPACIDAD 512GB COLOR BLANCA",
        image: "https://tienda.lancenter.cl/14155-large_default/xbox-series-s-capacidad-512gb-color-blanca.jpg",
        description: "Microsoft consola xbox series S capacidad 512GB color blanca, diseñada para juegos sin discos."
      },
      {
        title: "GIGABYTE B760M K DDR4 ( INTEL CORE 14TH/ 13TH /12TH)",
        image: "https://tienda.lancenter.cl/14148-large_default/gigabyte-b760m-k-ddr4-intel-core-14th-13th-12th.jpg",
        description: "Compatible con procesadores Intel® Core™ 14.º/13.º/12, Conectividad extendida: HDMI."
      },
      {
        title: "GABINETE GAMER GAME PRO 7689W (ATX, LATERAL ACRÍLICO)",
        image: "https://tienda.lancenter.cl/14134-large_default/gabinete-gamer-game-pro-7689w-atx-lateral-acrilico.jpg",
        description: "Gabinete Gamer ATX GamePro 7689W Blanco, Vidrio Templado, 3 ventiladores ARGB"
      }
    ];
  
    var numVisibleCards = 3; // Numero de cards visibles a la vez
    var currentIndex = 0; // Indice actual de la primera card visible


    // Funcion para mostrar las cards
    function showCards() {
      $('#card-container').empty(); // Limpia el contenedor
      for (var i = currentIndex; i < currentIndex + numVisibleCards; i++) {
        var card = cardData[i % cardData.length]; // Usamos módulo para que vuelva al principio al final
        var cardHTML = `
          <div class="col-md-4">
            <div class="card">
              <img src="${card.image}" class="card-img-top" alt="${card.title}">
              <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.description}</p>
              </div>
            </div>
          </div>
        `;
        $('#card-container').append(cardHTML);
      }
    }
  
    // Funcion para avanzar las cards
    function nextCards() {
      currentIndex++;
      showCards();
    }
  
    // Funcion para retroceder las cards
    function prevCards() {
      currentIndex--;
      showCards();
    }
  
    // Mostrar las cards iniciales
    showCards();
  
    // Intervalo para cambiar las cards cada 2 segundos
    var intervalID = setInterval(nextCards, 2000);
  
    // Boton Siguiente
    $('#next-btn').click(function(){
      clearInterval(intervalID); // Detiene el intervalo
      nextCards();
      intervalID = setInterval(nextCards, 2000); // Reinicia el intervalo
    });
  
    // Boton Anterior
    $('#prev-btn').click(function(){
      clearInterval(intervalID); // Detiene el intervalo
      prevCards();
      intervalID = setInterval(nextCards, 2000); // Reinicia el intervalo
    });
  
    // Flecha derecha
    $('.right-arrow').click(function(){
      clearInterval(intervalID); // Detiene el intervalo
      nextCards();
      intervalID = setInterval(nextCards, 2000); // Reinicia el intervalo
    });
  
    // Flecha izquierda
    $('.left-arrow').click(function(){
      clearInterval(intervalID); // Detiene el intervalo
      prevCards();
      intervalID = setInterval(nextCards, 2000); // Reinicia el intervalo
    });
  });
  
  