//write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain.

const original = 'abcd'
const modified = 'abcde'

function findNaughtyStep(original: string, modified: string) {
  //Get the extra step
  if (original.length < modified.length) {
    for (const element of modified) {
      if (!original.includes(element)) {
        return element
      }
    }
  } else {
    //Get the missing step
    for (const char of original) {
      if (!modified.includes(char)) {
        return char
      }
    }
  }
  //both sequences are the same
  return ''
}

export const result = findNaughtyStep(original, modified)
