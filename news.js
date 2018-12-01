$(document).ready(function() {
    getNews();


    function getNews(){
        var newsSource = {
            //  CHOOSE YOUR PREFERED NEWS SOURCES FROM NEWS API SITE
            "business-insider":1,
            "buzzfeed":2,
            "techcrunch":3,
            "cnn":4,
            "the-verge":5,
        };

        for (var key in newsSource) {
            //console.log(newsSource[key]);
            var order = "latest";
            //test API KEY
            //var newsUrl = ("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=e3aadcf138c842cc8fb14e4461cd4fdd");
            var newsUrl = ("https://newsapi.org/v1/articles?source="+key+"&sortBy="+order+"&apiKey=e3aadcf138c842cc8fb14e4461cd4fdd");
            console.log(key);
            getNewsJson(newsUrl);
        }
    }

    function getNewsJson(newsUrl) {
        //console.log("started getJson with this url: " + newsUrl);
        var article = Math.floor((Math.random() * 10) + 1);
        console.log(article)
        $.ajax({
            format: "json",
            dataType: "json",
            url: newsUrl,
            success: function(json) {
                console.log("great success");
                $("#publisher").html(json.source);
                $("#title").html(json.articles[article].title);
                $("#description").html(json.articles[article].description);
            }

        })

    }

    setInterval(function () {
        getNews();
    }, 10000);
})