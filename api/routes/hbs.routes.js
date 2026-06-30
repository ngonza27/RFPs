const { Router } = require('express')

const router = Router()

router.get('/login', (req, res) => {
  res.render('login')
})
router.get('/reservations', (req, res) => {
  res.render('reservation')
})

module.exports = router
