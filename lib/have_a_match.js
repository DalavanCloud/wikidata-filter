module.exports = function (hash, array) {
  for (let value of array) {
    if (hash[value]) return true
  }
  return false
}
