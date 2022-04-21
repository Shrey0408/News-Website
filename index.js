//
apiKey = "987c9b76c66c484fa5dad9f513ef8549"
console.log("In JS");
let allnews = document.getElementById("allnews");
let xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
xhr.onload = function () {
    if (this.status == 200) {
        let jsonNews = JSON.parse(this.responseText);
        let articles = jsonNews.articles;

        articles.forEach((news, index) => {
            let content;
            if (news["content"] != null)
                content = news["content"].substring(0, news["content"].length - 14);
            else
                content = "";
                
            allnews.innerHTML += `<div class="card mx-4 my-4">
                                    <div class="justify-content-center row btn card-header text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#news${index}"
                                        aria-expanded="false" aria-controls="news${index}">
                                        <div class="column1 col-lg-3 col-md-3 col-sm-3 col-xl-3">
                                            <img src=${news["urlToImage"]} alt="No Image">
                                        </div>
                                        <div class=" column2 col-lg-3 col-md-3 col-sm-3 col-xl-3">
                                            ${news["title"]}
                                        </div>
                                    </div>

                                    <div class="collapse" id="news${index}">
                                        <div class="card-body">
                                        ${content}<a href=${news["url"]} target="_blank"> Read More</a>
                                        </div>
                                    </div>
                                </div>`
        });
    } else {

    }
}
xhr.send();