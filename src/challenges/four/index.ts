let message = ''

export function decode(message: string) {
  //code here
  let raw = message.replace(' ', '')
  const rawArr = []
  let current = ''
  let toReverse = ''
  let foundStartingPoint = false

  // separates words in an array
  for (let i = 0; i < raw.length; i++) {
    if (raw[i] === '(') {
      foundStartingPoint = true
      if (current) {
        rawArr.push(current)
        current = ''
      }
      toReverse += raw[i]
    } else if (raw[i] === ')') {
      foundStartingPoint = false
      toReverse += raw[i]
      rawArr.push(toReverse)
      toReverse = ''
    } else {
      foundStartingPoint ? (toReverse += raw[i]) : (current += raw[i])
    }
  }
  rawArr.push(current)

  // format words in correct order
  return rawArr.map((word) => {
    let decoded = ''
    if (word.includes('(')) {
      for (let i = word.length - 1; i > 0; i--) {
        if (word[i] !== '(' && word[i] !== ')') {
          decoded += word[i]
        }
      }
      return decoded
    }
    return word
  })
}
