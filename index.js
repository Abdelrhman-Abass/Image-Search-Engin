
const acsses = 'ITc_w50DUASFRp2gHVo_NXy1nD5GS1SzvVos5qDQNI0'
const searchForm =document.getElementById("search-form")
const searchBox =document.getElementById("search-box")
const searchReasult =document.getElementById("search-result")
const showMoreBtn =document.getElementById("show-more-btn")


let keyword = "";
let page =1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=
    ${page}&query=${keyword}&client_id=${acsses}&per_page=12`;
    const responce = await fetch(url);
    const data = await responce.json()

    if (page===1){
        searchReasult.innerHTML = ""
    }

    const results  = data.results;
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target= "_blank";

        imageLink.appendChild(image);
        searchReasult.appendChild(imageLink);
    })
    showMoreBtn.style.display="block";

}
searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page = 1;
    searchImage();
})

showMoreBtn.addEventListener("click" , ()=>{
    page++;
    searchImage();
})