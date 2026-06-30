module.exports = {
  createToModel: function (data) {
    const { customerName, customerEmail, date, time, partySize, tableNumber, notes, createdBy } = data
    return { customerName, customerEmail, date, time, partySize, tableNumber, notes, createdBy }
  },
  updateToModel: function (data) {
    const { customerName, customerEmail, date, time, partySize, tableNumber, status, notes } = data
    return { customerName, customerEmail, date, time, partySize, tableNumber, status, notes }
  },
}
