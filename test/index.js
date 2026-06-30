const { assert } = require('chai')
const UserBusiness = require('../business/user.business')
const ReservationBusiness = require('../business/reservation.business')
const { dbConnection } = require('../dal/models/db')
const mongoose = require('mongoose')

dbConnection()

describe('API', function () {
  describe('User', function () {
    it('Check that only necessary fields are returned', async function () {
      const user = await UserBusiness.create({
        email: 'test@restaurant.com',
        username: 'testuser',
        password: 'password',
        basura: 'ignored',
      })
      assert.isUndefined(user.password)
      assert.isUndefined(user.basura)
    })
    it('Check that token is returned on sign in', async function () {
      const user = await UserBusiness.signIn('test@restaurant.com', 'password')
      assert.isDefined(user)
    })
  })

  describe('Reservation', function () {
    let reservationId

    it('Check that reservation is created with pending status', async function () {
      const reservation = await ReservationBusiness.create({
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        date: new Date('2026-07-15'),
        time: '19:00',
        partySize: 4,
        tableNumber: 5,
        notes: 'Window seat preferred',
      })
      reservationId = reservation._id
      assert.equal(reservation.status, 'pending')
      assert.equal(reservation.estado, true)
    })

    it('Check that all active reservations are returned', async function () {
      const reservations = await ReservationBusiness.getAll()
      reservations.forEach((r) => {
        assert.equal(r.estado, true)
      })
    })

    it('Check that a reservation is fetched by id', async function () {
      const reservation = await ReservationBusiness.getByPk(reservationId)
      assert.strictEqual(reservation._id.toString(), reservationId.toString())
    })

    it('Check that a reservation updates successfully', async function () {
      const updated = await ReservationBusiness.update(reservationId, {
        status: 'confirmed',
        partySize: 6,
      })
      assert.equal(updated.status, 'confirmed')
    })

    it('Check that a reservation is cancelled on remove', async function () {
      const removed = await ReservationBusiness.remove(reservationId)
      assert.equal(removed.estado, false)
      assert.equal(removed.status, 'cancelled')
    })
  })
})
