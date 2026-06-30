const { ReservationRepository } = require('../dal/repositories')
const { ReservationPopulator } = require('./populators')

module.exports = {
  create: async function (data) {
    data = ReservationPopulator.createToModel(data)
    data.estado = true
    return await ReservationRepository.create(data)
  },
  getByPk: async function (id) {
    return await ReservationRepository.getByPk(id)
  },
  getAll: async function () {
    return await ReservationRepository.getAll()
  },
  update: async function (id, data) {
    data = ReservationPopulator.updateToModel(data)
    return await ReservationRepository.update(id, data)
  },
  remove: async function (id) {
    return await ReservationRepository.remove(id, { estado: false, status: 'cancelled' })
  },
}
