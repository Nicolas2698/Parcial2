const express = require('express');

    var app = express();

    const engines = require('consolidate');
    const handlebars = require('handlebars');
    const bodyParser = require('body-parser');
    const hbs = require('express-handlebars');


    app.engine('hbs', engines.handlebars);
    app.set('views', './views');
    app.set('view engine', 'hbs');
    app.use(express.static('public'));


    app.get('/titulo', function(request, response){
        res.render('titulo');
    })


    app.listen(2000);
