let bar=document.getElementById("bar")
let nav=document.getElementById("navbar")
let close=document.getElementById("close")

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active")
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active")
    })
}


let accesskey = "9fvSK4hfrH9ojp1ZcJ4l9b20keRT4SpI6ieYdPt303o";

let form = document.querySelector("form");
let input = document.getElementById("search-input");
let searchResults = document.querySelector(".search-results");
let showMore = document.getElementById("show-more-button");
let inputData = "";
var page = 1;

async function searchImages() {
  inputData = input.value;
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

  let response = await fetch(url);
  let data = await response.json();

  let results = data.results;
  if (page === 1) {
    searchResults.innerHTML = "";
  }


  console.log(results);

  results.map((result) => {
    let imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    let image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    let imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);
  });
 page ++;
  if (page>1) { 
    showMore.style.display = "block";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMore.addEventListener("click", () => {
  searchImages();
});
