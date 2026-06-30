const { Reservation } = require('../models')

module.exports = {
  create: async function (data) {
    const reservation = new Reservation(data)
    return await reservation.save()
  },
  getByPk: async function (id) {
    return await Reservation.findById(id)
  },
  getAll: async function () {
    return await Reservation.find({ estado: true })
  },
  update: async function (id, data) {
    return await Reservation.findByIdAndUpdate(id, data, { new: true })
  },
  remove: async function (id, data) {
    return await Reservation.findByIdAndUpdate(id, data, { new: true })
  },
}
