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
              <div class="card-group col-4">
          <div class="card">
            <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path}" class="card-img-top" alt="image1">
            <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
              <p class="card-text">${data[i].overview}</p>
            </div>
          </div>
          </div>
              `;
      }
}