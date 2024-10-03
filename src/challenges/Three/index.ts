const sequence = 'xxxx'
const modified = 'xxox'

function findNaughtyStep(original: string, modified: string) {
  const isMissing = original.length > modified.length
  const longer = isMissing ? original : modified
  const shorter = isMissing ? modified : original

  // if both strings have the same length and are not equal
  if (original.length === modified.length && original !== modified) {
    return modified.split('').find((e, index) => e !== original[index]) || ''
  }
  // if the lengths are different, find the first mismatch in the bigger array
  return longer.split('').find((e, index) => e !== shorter[index]) || ''
}

export { sequence, modified, findNaughtyStep }
