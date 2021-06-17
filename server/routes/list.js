const {
    resolveInclude
} = require('ejs');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//connect to variable to mongoose using Contact List
let ContactList = require('../models/list');

// GET ROUTER  for the contactlist page - Read operation//

router.get('/', (req, res, next) => {
    ContactList.find((err, data) => {

        if (err) {
            return console.error(err);
        } else {
            //console.log(data);
            res.render('list/contactList', {
                title: 'User Contact List',
                data: data
            })

        }

    });
});

// GET ROUTER  for display add page - Create operation//

router.get('/add', (req, res, next) => {
    res.render('list/add', { title: 'add User' });
});

// Post ROUTER  for processing add page - Create operation//
router.post('/add', (req, res, next) => {
    let newUser = ContactList({
        "username": req.body.username,
        "password": req.body.password,
        "emailaddress": req.body.emailaddress
    });
    ContactList.create(newUser, (err, data) => {
        if (err) {
            console.log(err);
            res.end(err);

        } else {
            res.redirect('/list');
        }

    });

});





// GET ROUTER  for displaying add edit page - Update  operation//

router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    ContactList.findById(id, (err, listToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('list/edit', {
                title: 'Edit list',
                list: listToEdit
            })
        }

    });
});



// Post ROUTER  for displaying add edit page - Update  operation//

router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedList = ContactList({
        "_id": id,
        "username": req.body.username,
        "password": req.body.password,
        "emailaddress": req.body.emailaddress
    });

    ContactList.updateOne({ _id: id }, updatedList, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //refresh the contact list
            res.redirect('/list');
        }
    });

});

// GET perform  Delete operation -- Delete  operation//

router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    ContactList.remove({
        _id: id
    }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/list');
        }
    });

});

module.exports = router;