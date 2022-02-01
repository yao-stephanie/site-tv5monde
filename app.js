let affiche = document.querySelector('#afficher');
let apikey = "7843f8d22a43911f15301ef8d76338ae";



fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`
)
  .then((aff) => aff.json())
  .then((data) => Displayaffiche(data.results));



  function Displayaffiche(data) {
    for (let i = 0; i < data.length; i++) {
        affiche.innerHTML += `
        <div class="card_1">
        <img class="card_img" src="https://image.tmdb.org/t/p/w500${data[i].poster_path}" class="card-img-top" alt="image1">
        
      </div>

              `;
      }

}

let span = document.querySelector('.left_arrow');
let span1 = document.querySelector('.right_arrow');
let card = document.getElementsByClassName('card_1')
let productPage = Math.ceil(card.length/4);
let n = 0;
let movePer = 25.34;
let maxMove = 203;

let mob_view = window.matchMedia("(max-width: 768px)");

if(mob_view.matches){
  movePer = 50.36;
  maxMove = 504
}

let right_mover = ()=>{
  n = n + movePer;
  if(card == n){n = 0;}
  for(const i of card){
    if(n>maxMove){n = n-movePer;}
    i.style.left = '-' + n + '%'
  }
}

let left_mover = ()=>{
  n = n-movePer;
  if(n<=0){n = 0;}
  for(const i of card){
    if(productPage > n){
      i.style.left = '-' + n + '%';
    }
  }
}

span1.onclick = ()=>{right_mover();}
span.onclick = ()=>{left_mover();}