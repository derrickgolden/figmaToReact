
export async function fetchData( title ){
        const blogData = JSON.parse(localStorage.getItem("blogData"))
        const articles = blogData?.articles
        if(articles && articles?.length > 0){
            const article = searchArticle(articles, title)
            if(article) return article
            else {
                const artic = fetchArticles(title)
                return artic;
            }
        }else{
            const article = fetchArticles(title)
            return article
        }

}

export function searchArticle(articles, title){
    for(let article of articles){
        if(article.title == title){
            console.log(article?.content)
            return (article);
        }
    }
    throw new Error;
}

 async function fetchArticles(title){

    var url = 'https://newsapi.org/v2/everything?' +
                  `q=${title}&` + 'searchIn=title&' +
                  'from=2023-07-14&' + 
                  'apiKey=592e3097c035444abc5f2c8f1ad28caf';
        
    var req = new Request(url);
    let article;
    try {
        console.log("fetching")
        let res = await fetch(req);
        let data = await res.json();
        article = searchArticle(data.articles, title)
        } catch (error) {
            console.error(error);
            throw new Error;
        } 
    return article;  
}