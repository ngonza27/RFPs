const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReservationSchema = new Schema({
  customerName: {
    type: String,
    required: [true, 'Customer name is required'],
  },
  customerEmail: {
    type: String,
    required: [true, 'Customer email is required'],
    lowercase: true,
  },
  date: {
    type: Date,
    required: [true, 'Reservation date is required'],
  },
  time: {
    type: String,
    required: [true, 'Reservation time is required'],
  },
  partySize: {
    type: Number,
    required: [true, 'Party size is required'],
    min: 1,
  },
  tableNumber: {
    type: Number,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
  notes: {
    type: String,
  },
  estado: {
    type: Boolean,
    default: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

ReservationSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject()
  return data
}

module.exports = mongoose.model('Reservation', ReservationSchema)
