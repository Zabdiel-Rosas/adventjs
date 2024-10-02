const sequence = 'xxxhgl'
const modified = 'xxxn'

function findNaughtyStep(original: string, modified: string): string {
  let isMissing = original.length > modified.length
  let result = ''

  if (original.length === modified.length) {
    if (original !== modified) {
      let stringArr = modified
        .split('')
        .find((ch: string, index: number) => ch !== original[index])

      if (stringArr) result = stringArr
    }
  } else {
    const dynamicObj = {
      biggerArr: isMissing ? original : modified,
      smallerArr: isMissing ? modified : original,
    }

    let arr = dynamicObj.biggerArr
      .split('')
      .find((e, index) => e != dynamicObj.smallerArr[index])

    if (arr) result = arr
  }

  return result
}

export { sequence, modified, findNaughtyStep }
