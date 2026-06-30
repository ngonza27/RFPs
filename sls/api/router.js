const { Router } = require('express')
const DynamoRoutes = require('./DynamoRoutes')
const router = Router()

router.use('/dynamo', DynamoRoutes)

module.exports = router
