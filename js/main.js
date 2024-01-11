var  btnMenu = document.getElementById("btn-menu"); 
var linksActive = document.getElementById("links-active");


btnMenu.addEventListener("click",function(){
    linksActive.classList.toggle("active-links")
})


var myHttp = new XMLHttpRequest();
var inner  = document.getElementById("inner"); 
var newsLinks= document.querySelectorAll(".news-links li ");
var allPosts = [];
for(var i = 0 ;i < newsLinks.length ; i++){
    newsLinks[i].addEventListener("click",function(e){
        var contryKey =e.target;
        contries(contryKey.getAttribute("value"));
    })
}

contries()
function contries(contry="eg"){
    myHttp.open("GET",`https://newsapi.org/v2/top-headlines?country=${contry}&category=sports&apiKey=71e27b1cbe684bfb80a631ddaea37ef9`);
    myHttp.send();
    myHttp.addEventListener("readystatechange", function (){
    if(this.readyState == 4){
        allPosts =Array.from(JSON.parse(myHttp.response).articles);
        displayData()
    }
});
}
function displayData(){
    var cartona = ``; 
for(var i = 0 ; i < allPosts.length ; i++){
    cartona +=`
    <div class="col-md-6">
        <div class="border border-2 border-dark text-center p-3 my-2">
            <div class="d-flex align-items-center justify-content-between">
                <div class="date">${allPosts[i].publishedAt.slice(0,10)}</div>
                    <h5>${allPosts[i].author}</h5>
                </div>
                <p class="py-2">${allPosts[i].title}<p>
                <button class="btn btn-info text-white" ><a href="${allPosts[i].url}" target="_blank">قراءة المزيد </a></button>
            </div>
        </div>
    `
}
inner.innerHTML = cartona;
}


// var myHttp = new XMLHttpRequest();
// var data =[];
// var newsData = document.querySelector("#newsData");
// myHttp.open("GET", "https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=71e27b1cbe684bfb80a631ddaea37ef9");
// myHttp.send();

// myHttp.addEventListener("readystatechange",function() {
//     if(this.readyState == 4){
//                 data = JSON.parse(myHttp.response);
//                 displayData()
//             }
// });
// function displayData(){
//     var cartona = ``; 
// for(var i = 0 ; i < data.length ; i++){
//     cartona +=`
//     <div class="col-md-6">
//     <div class="border border-2 border-dark text-center p-3 my-2">
//         <div class="d-flex align-items-center justify-content-between">
//             <div class="date">${data.articles[i].publishedAt}</div>
//             <h5>${data.articles[i].author}</h5>
//         </div>
//         <p class="py-2">${data.articles[i].title}<p>
//         <button class="btn btn-info text-white" ><a href="${data.articles[i].url}">قراءة المزيد </a></button>
//     </div>
// </div>
//     `
// }
// newsData.innerHTML = cartona;
// }






























