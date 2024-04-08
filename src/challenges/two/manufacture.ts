//given a list of gifts and the available materials, returns a list of the gifts that can be made.

const gifts = ['train', 'bear', 'ball']
const materials = 'blahbler'

function manufacture(gifts: string[], materials: string) {
  return gifts.filter((gift) =>
    gift.split('').every((part) => materials.includes(part))
  )
}

export const result = manufacture(gifts, materials)
