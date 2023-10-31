
class NewsController{

    //Get [news]
    index(req, res){
        res.render('news');
    }
    //Get /news/slug
    show(req,res){
        res.send('Hello Detail');
    }
}
module.exports = new NewsController;