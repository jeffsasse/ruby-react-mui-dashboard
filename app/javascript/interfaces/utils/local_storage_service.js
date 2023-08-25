function setItem(field, item) {
  localStorage.setItem(field, item)
}

function getItem(field) {
  const result = localStorage.getItem(field)
  return result
}

function removeItem(field) {
  localStorage.removeItem(field)
}

function clearAll() {
  localStorage.clear()
}

module.exports = {
  setItem,
  getItem,
  removeItem,
  clearAll
}
