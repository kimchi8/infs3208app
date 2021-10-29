// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
});

const accountDetails = document.querySelector('.account-details');

const setupUserInfo = (data) => {
    let html = '';
    if(data != null){
        html = `<h5>User: ${data.email}</h5>`;
    } else {
        html = `<h5>Login or Register an Account</h5>`;
    }
    accountDetails.innerHTML = html;
}

const searchBar = document.querySelector('.searchcontent');
const showSearchBar = (data) => {
    if(data != null){
        $("div.searchcontent").show();
    } else {
        $("div.searchcontent").hide();
    }
}

const addMovieToList = document.querySelector('.moviecontainer');
const showMovieAdd = (data) => {
    if(data != null){
        $("div.moviecontainer").show();
    }  else {
        $("div.moviecontainer").hide();
    }
}

const homediv = document.querySelector('.home');
const showHome = (data) => {
    if(data != null){
        $("div.home").hide();
    }  else {
        $("div.home").show();
    }
}
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e8494476fb49536295f58b417d0a716f&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=e8494476fb49536295f58b417d0a716f&query=";


const getMovies = async(url) => {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);
    showMovies(respData.results);
}

const homeContent = document.querySelector('.row');
const showMovies = (movies) => {

    let main = '';
    for(let i = 0; i < 12; i++){
        let movie = movies[i];
        const { poster_path, title, vote_average, overview } = movie;
        const infoCard = `
        <div class="col s4">
            <div class="card hover-reveal hoverable">
                <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${IMGPATH + poster_path}" alt="${title}" />
                </div>
                <div class="card-content">
                    <h6 class="cardtitle activator grey-text text-darken-4">${title} </h6>
                    <h6>${vote_average}</h6>
                </div>
              
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Overview<i class="material-icons right">close</i></span>
                    <p>${overview}</p>
                </div>
            </div>
        </div>
      `
      main += infoCard; 
    }
    homeContent.innerHTML = main;
}
