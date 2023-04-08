const router = require('express').Router()
let db = require('../models')



router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then((place) => { 
    res.render('places/edit', { place }) 
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then((place) => {
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(String(req.params.id))
  .then(() => { res.redirect('/places') })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(String(req.params.id), req.body)
  .then(() => { res.redirect(`/places/${req.params.id}`) })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

module.exports = router
