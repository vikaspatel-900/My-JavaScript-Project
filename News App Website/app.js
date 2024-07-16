const api_key = "9a00bce2b3904dde81bbcbef640cdd56";
const url = "https://newsapi.org/v2/everything?q=";


window.addEventListener("load", () => fetchNews("india"));


document.getElementById("sports").addEventListener("click",sportsclick("sport"))




async function fetchNews(query) {
    const resp = await fetch(`${url}${query}&apiKey=${api_key}`);
    const data = await resp.json()
    console.log(data)
    bindData(data.articles)
}


function bindData(articles) {
    const card_cont = document.getElementById("cards-cont")
    const card_temp = document.getElementById("card-temp");
    card_cont.innerHTML = "";

    articles.forEach((article) => {
        if (article.urlToImage){;

        const cardClone = card_temp.content.cloneNode(true)

        fillDataInCard(cardClone, article)

        card_cont.appendChild(cardClone)
        }
    })
}



function fillDataInCard(cardClone,article){
    const newsImg=cardClone.getElementById("news-img")
    const newsTitle=cardClone.getElementById("card-title")
    const newsSource=cardClone.getElementById("card-sourse")
    const newsDesc=cardClone.getElementById("card-desc")

    newsImg.src=article.urlToImage;
    newsTitle.innerHTML=article.title;
   newsDesc.innerHTML=article.description


   let date=new Date(article.publishedAt).toLocaleString("en-US",{
    timeZone:"Asia/Jakarta"
   })

  newsSource.innerHTML=`${article.source.name} . ${date}`


   cardClone.firstElementChild.addEventListener("click",()=>{
          window.open(article.url)
   })
}



const search_news=document.getElementById("news-search")
const search_btn=document.getElementById("search-btn")

search_btn.addEventListener("click",function(){
    let query=search_news.value;

     if(!query) return;
     fetchNews(query)
})



function sportsclick(query){
    fetchNews(query)
}





//********************************************************************hamburger************************************************************* */




let hamburger=document.querySelector(".hamburger")
let hamburger_nav=document.querySelector(".hamburger-nav")

hamburger.addEventListener("click",function(){
    hamburger_nav.classList.toggle("toggle")
})