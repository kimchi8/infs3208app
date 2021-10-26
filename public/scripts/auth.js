const signupForm = document.querySelector('#signup-form');

//listen to authentication status 
auth.onAuthStateChanged(user => {
        setupUserInfo(user);  
        showSearchBar(user);
        showMovieAdd(user);
        showHome(user);
})

signupForm.addEventListener('submit', (e) => {
    e.preventDefault;

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //authenticate email and password
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log("hello there from this function")
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
})

//logout user functionality
const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
    e.preventDefault;
    auth.signOut().then(() => {
        console.log("user has signed out");
    })
})

//login users 
const login = document.querySelector('#login-form');

login.addEventListener('submit', (e) =>{
    e.preventDefault;
    const email = login['login-email'].value;
    const password = login['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then((cred) =>{
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close(); 
        login.reset(); 
    })
})

const movieSearch = document.querySelector('#movie-searchbar');

movieSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchVal = movieSearch['text'].value;
    if(searchVal){
        getMovies(SEARCHAPI + searchVal);
    } else {
        console.log("Opps, you entered something wrong!")
    }
})