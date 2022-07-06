const inputSearch = document.querySelector("input[type='search']");
const searchBox = document.querySelector(".search-box")
inputSearch.addEventListener("focus", () => {
    searchBox.classList.add("input-focus")
})
inputSearch.addEventListener("blur", () => {
    searchBox.classList.remove("input-focus")
})

// click card C-I ** 
document.querySelector(".fade").addEventListener("click", (e) => {
    
   const cards = document.querySelectorAll(".card");
    cards.forEach((item) => {
        (item === e.target.closest(".card"))? item.classList.add("bg-light"):item.classList.remove("bg-light");
    })  
})
// click image ***

const search = document.getElementById("search");
let pass;
search.addEventListener("change", (e) => {
    
  pass = search.value;
})
const images = document.querySelectorAll("img");
const  hideImg = document.querySelector(".hidden");
images.forEach((image) => {
 image.addEventListener("click", (e) => {
    if(pass === "active-image" ){

        const src = e.target.getAttribute("src");
       hideImg.setAttribute("src", src);
       hideImg.classList.toggle("hidden")
          hideImg.classList.toggle("animation-img");
    }
 })
})

// item sidbar >>>

const items = document.querySelector(".items");
items.addEventListener("click", (e) => {
 
    [...items.children].forEach((item) => {
       e.target.closest("li") === item? item.classList.add("active-sid"):item.classList.remove("active-sid");
    })
})
//  screan sidbar



    const menue = document.querySelector(".image-screen");
    const sidbar = document.querySelector(".sidbar");
    menue.addEventListener("click", () => {
        // if(Number(screen.width) <= 720 ){

            sidbar.classList.add("show");
            menue.classList.add("menue-hide")
        // }
    })
    const menueS = document.querySelector(".image");
    menueS.addEventListener("click", () => {
        // if(Number(screen.width) <= 720 ){

            sidbar.classList.remove("show");
             menue.classList.remove("menue-hide");
        // }
        
        
    })



        
    

