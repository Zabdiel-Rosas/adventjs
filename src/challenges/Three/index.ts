const packOfGifts = ['book', 'doll', 'ball']
const reindeers = ['dasher', 'dancer']

function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  let giftPacks = 0
  let packWeights = 0
  let reindeersCanCarry = 0

  for (let gift of packOfGifts) {
    let size = gift.length
    packWeights += size
  }

  for (let reindeer of reindeers) {
    let size = reindeer.length * 2
    reindeersCanCarry += size
  }

  giftPacks = Math.floor(reindeersCanCarry / packWeights)

  return giftPacks
}

export { packOfGifts, reindeers, distributeGifts }
