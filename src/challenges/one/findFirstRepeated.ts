// Find the first identification number that has been repeated, where the second occurrence has the smallest index!

export function findFirstRepeated(gifts: number[]): number {
  const seenGifts: number[] = []

  for (const gift of gifts) {
    if (seenGifts.includes(gift)) {
      return gift
    }

    seenGifts.push(gift)
  }

  return -1
}
