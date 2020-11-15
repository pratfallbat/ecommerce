const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');
const userCtrl = require('../controller/user');


router.get('/secret',userCtrl.authMiddleware, function (req, res) {
    res.json({ "secret": true })
})

router.get('', function (req, res) {
    Rental.find({}, function (err, foundRentals) {
        console.log(foundRentals)
        res.json(foundRentals);        
    })

});
router.get('/:id', function (req, res) {
    const rentalId = req.params.id;
    Rental.findById(rentalId, function (err, foundRentals) {
        if (err) {
            res.status(422).send({ errors: [{ title: 'Rental Error!', detail: 'Could not find Rental by Id' }] });
        }
        res.json(foundRentals);        
    })

});
module.exports = router;