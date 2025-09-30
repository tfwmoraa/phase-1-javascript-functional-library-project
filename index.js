// Normalize array or object values to an array
function myEach(collection, callback) {
  const values = Array.isArray(collection) ? collection : Object.values(collection)
  for (let i = 0; i < values.length; i++) {
    callback(values[i])
  }
  return collection
}

function myMap(collection, callback) {
  const values = Array.isArray(collection) ? collection : Object.values(collection)
  const newArr = []
  for (let i = 0; i < values.length; i++) {
    newArr.push(callback(values[i]))
  }
  return newArr
}

function myReduce(collection, callback, acc) {
  const values = Array.isArray(collection) ? collection : Object.values(collection)
  let start = 0
  if (acc === undefined) {
    acc = values[0]
    start = 1
  }
  for (let i = start; i < values.length; i++) {
    acc = callback(acc, values[i], collection)
  }
  return acc
}

function myFind(collection, predicate) {
  const values = Array.isArray(collection) ? collection : Object.values(collection)
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) return values[i]
  }
  return undefined
}

function myFilter(collection, predicate) {
  const values = Array.isArray(collection) ? collection : Object.values(collection)
  const newArr = []
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) newArr.push(values[i])
  }
  return newArr
}

function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length
}

function myFirst(array, n = 1) {
  if (n === 1) return array[0]
  return array.slice(0, n)
}

function myLast(array, n = 1) {
  if (n === 1) return array[array.length - 1]
  return array.slice(array.length - n)
}

function myKeys(object) {
  return Object.keys(object)
}

function myValues(object) {
  return Object.values(object)
}

// Export for tests
module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues
}
