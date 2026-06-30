const { Router } = require('express')
const { gett } = require('./dynamoController')
const router = Router()

router.get('/:id', gett);

module.exports = router
