interface Box {
  l: number
  w: number
  h: number
}

const boxes: Box[] = [
  { l: 2, w: 2, h: 2 },
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
]

function fitsInOneBox(boxes: Box[]) {
  const sortedBoxes = boxes.sort((a, b) => b.l - a.l)

  const isBigger = (box: Box, nextBox: Box) => {
    return box.l > nextBox.l && box.w > nextBox.w && box.h > nextBox.h
  }

  return sortedBoxes.every((box, i) => {
    const nextBox = sortedBoxes[i + 1]

    return !nextBox || isBigger(box, nextBox)
  })
}

export { boxes, fitsInOneBox }
