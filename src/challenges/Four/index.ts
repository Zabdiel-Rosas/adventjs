interface Box {
  l: number
  w: number
  h: number
}

const boxes = [
  { l: 2, w: 2, h: 2 },
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
]

function fitsInOneBox(boxes: Box[]) {
  const sortedBoxes = boxes.sort((a, b) => b.l - a.l)
  const values: number[][] = sortedBoxes.map((box) => Object.values(box))

  for (let i = 0; i < values.length; i++) {
    const currentArr: number[] = values[i]
    const nextArr: number[] = values[i + 1]

    if (nextArr) {
      for (let c = 0; c < currentArr.length; c++) {
        if (currentArr[c] <= nextArr[c]) {
          return false
        }
      }
    }
  }

  return true
}

export { boxes, fitsInOneBox }
