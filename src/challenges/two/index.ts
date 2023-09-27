export const year = 2022
export const holidays = ['01/06', '04/01', '12/25']

export function countHours(year: number, holidays: string[]) {
  let extraHours = 0
  const stringDates = holidays.map((item) => {
    return `${year}/` + item
  })

  for (let item of stringDates) {
    const date = new Date(item)
    const day = date.getDay()

    if (day > 0 && day < 6) {
      extraHours += 2
    }
  }
  // return extra hours
  return extraHours
}
