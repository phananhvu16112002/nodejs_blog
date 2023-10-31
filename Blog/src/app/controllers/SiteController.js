const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //Get [home]
    home(req, res, next) {
        // try {
        //     const courses = await Course.find({});
        //     res.json(courses);

        // } catch (error) {
        //     res.status(400).json({error:'ERROR!!!'});
        // }
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((error) => next(error));
    }

    //Get [search/:slug]
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
