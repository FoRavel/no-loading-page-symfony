/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

var links = document.getElementsByTagName("a");
// var _nextViewWrapper = document.getElementsByClassName("next-view");
// var nextViewWrapper = _nextViewWrapper[0];
// var _currentViewWrapper = document.getElementsByClassName("current-view");
// var currentViewWrapper = _currentViewWrapper[0];
// var _container = document.getElementsByClassName("container");
// var container = _container[0];
// var newViewWrapper = document.createElement("div");




links.forEach(link => {
    var path = link.getAttribute("href");
    link.addEventListener('click', async event => {
        event.preventDefault();
        content = await getViewContent(path);
        
        showView(content)
    })
})

async function getViewContent(path){
    let response = await fetch(path);
    let responseText = await response.text();
    return responseText;
}

function showView(content){

    var _container = document.getElementsByClassName("container");
    var container = _container[0];
    var _nextViewWrapper = document.getElementsByClassName("next-view");
    var nextViewWrapper = _nextViewWrapper[0];
    var _currentViewWrapper = document.getElementsByClassName("current-view");
    var currentViewWrapper = _currentViewWrapper[0];
    var newViewWrapper = document.createElement("div");

    nextViewWrapper.innerHTML = content;
    container.classList.add("view-change");

    setTimeout(function(){
        currentViewWrapper.remove();
        container.classList.remove("view-change");
        nextViewWrapper.classList.remove("next-view");
        nextViewWrapper.classList.add("current-view");
        container.appendChild(newViewWrapper);
        nextViewWrapper = newViewWrapper;
        newViewWrapper.classList.add("view");
        newViewWrapper.classList.add("next-view");
    }, 3000)

}

function getNodes(){
    
}

console.log("test")

