export const gifts: string[] = ['cat', 'game', 'socks']

export function wrapping(gifts: string[]) {
  const wrapped: string[] = []

  for (let gift of gifts) {
    const size: number = gift.length + 2
    let wrapCover: string = ''

    for (let i = 0; i < size; i++) {
      wrapCover += '*'
    }

    const giftWrapped = `${wrapCover}\n*${gift}*\n${wrapCover}`

    wrapped.push(giftWrapped)
  }
  // returns a wrapped gifts
  return wrapped
}
