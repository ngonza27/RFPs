module.exports = {
  gett: function (req, res) {
    const {userId, name} = req.body
    return res.status(200).json({ 
      "id": 1 ,
      "id1": userId,
      "name": "nicolas",
      "name1": name
    });    
  }
}
