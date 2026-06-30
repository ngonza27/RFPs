const ReservationBusiness = require('../../business/reservation.business')

module.exports = {
  saveReservation: async function (req, res) {
    const { body } = req
    const reservation = await ReservationBusiness.create(body)
    return res.status(201).send({ payload: reservation })
  },
  getReservation: async function (req, res) {
    const { id } = req.params
    const reservation = await ReservationBusiness.getByPk(id)
    return res.send({ payload: reservation })
  },
  getReservations: async function (req, res) {
    const reservations = await ReservationBusiness.getAll()
    return res.send({ payload: reservations })
  },
  updateReservation: async function (req, res) {
    const { id } = req.params
    const { body } = req
    const reservation = await ReservationBusiness.update(id, body)
    return res.send({ payload: reservation })
  },
  deleteReservation: async function (req, res) {
    const { id } = req.params
    const reservation = await ReservationBusiness.remove(id)
    return res.send({ payload: reservation })
  },
}
