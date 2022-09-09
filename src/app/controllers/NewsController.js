

class NewsController
{   
    //GET/news
    index(req,res)
    {
         res.render('news');
    }

    // show detail tin-tuc
    //GET/[news]//slug
    show(req,res)
    {
             res.send('Detail form');
    }
}


module.exports = new NewsController;