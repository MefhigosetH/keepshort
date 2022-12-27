/*
* Keep YT Short videos yours.
* Developed by Victor Villarreal @ Dec 2022
* Source code with No license
*
*/

// The input HTMLElement ref.
var urlInput;

// The result div HTMLElement ref.
var resultDiv;

/*
* Init the NavBar.
*
* @return None
*/
function initNavBar() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    };

    console.log('NavBar initialized');
}



/*
* Search for the Short video url, try to parse and grab the source link.
*
* @return None
*/
async function searchShortVideo() {
    console.log('Buscando link...');
    //var htmlResponse = await fetch('https://cors-anywhere.herokuapp.com/' + urlInput.value);
    $.get(urlInput.value, function(html) {
        console.log('Short video found.', html);
    });
    
}


/*
* Clear the user input.
*
* @return None
*/
function clearUserInput() {
    urlInput.value = '';
    console.log('Form cleared.');
}


/*
* Init the app when document is loaded.
*/
document.addEventListener('DOMContentLoaded', () => {
    // Initialize NavBar
    initNavBar();

    // Init user controls and callbacks
    urlInput = document.getElementById("inputUrl");

    var searchButton = document.getElementById("btnSearch");
    searchButton.onclick = searchShortVideo;

    var btnClear = document.getElementById("btnClear");
    btnClear.onclick = clearUserInput;
});
