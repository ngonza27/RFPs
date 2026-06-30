const { Router } = require('express')
const { Auth, ErrorCatcher } = require('../middlewares')
const { ReservationController } = require('../controllers')

const router = Router()

router.get('/', ErrorCatcher.bind(ReservationController.getReservations))
router.get('/:id', ErrorCatcher.bind(ReservationController.getReservation))
router.post('/', [Auth], ErrorCatcher.bind(ReservationController.saveReservation))
router.put('/:id', [Auth], ErrorCatcher.bind(ReservationController.updateReservation))
router.delete('/:id', [Auth], ErrorCatcher.bind(ReservationController.deleteReservation))

module.exports = router
