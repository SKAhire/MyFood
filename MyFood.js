// add js file to html..
// add below code to navBar

/* <div id="slideMenu">
<ul>
    <li class="menuList">Close Menu</li>
    <li class="menuList">Food</li>
    <li class="menuList">About</li>
</ul>
</div> */


console.log("conected");

// creating the div for menu
let sideBar= document.createElement('div');
    sideBar.setAttribute('id', "slideMenu");
    // sideBar.style.visibility="visible";
    sideBar.innerHTML= `
    <ul>
        <li class="menuList" id="closeMenu" ><a onclick="closeTab()" class="menuAnchor">Close Menu</a></li>
        <li class="menuList"><a class="menuAnchor" href="#foodSec">Food</a></li>
        <li class="menuList"><a class="menuAnchor" href="#about">About</a></li>
    </ul>`;


// event for the opeing the menu
let sideMenu= document.getElementById("menu");
sideMenu.addEventListener('click',()=>{
        // console.log("visible");
        sideBar.style.visibility="visible";
        let navBar=document.getElementById("navbar");
        navBar.appendChild(sideBar);
})


// let closeMenu= document.getElementById("closeMenu");
// closeMenu.addEventListener("click", function closeTab(){
//     console.log("something")
//     sideBar.style.display= "none";
// })


// event to close the menu
function closeTab(){
        // console.log("closed");
        sideBar.style.visibility= "hidden";
}