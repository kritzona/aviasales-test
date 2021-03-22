const dayToString = (date: number): string =>
  date < 10 ? `0${date}` : `${date}`
const hoursToString = (hours: number): string =>
  hours < 10 ? `0${hours}` : `${hours}`
const minutesToString = (minutes: number): string =>
  minutes < 10 ? `0${minutes}` : `${minutes}`

const monthToString = (month: number): string => {
  switch (month) {
    case 0:
      return 'Янв'
    case 1:
      return 'Фев'
    case 2:
      return 'Мар'
    case 3:
      return 'Апр'
    case 4:
      return 'Мая'
    case 5:
      return 'Июн'
    case 6:
      return 'Июл'
    case 7:
      return 'Авг'
    case 8:
      return 'Сен'
    case 9:
      return 'Окт'
    case 10:
      return 'Ноя'
    case 11:
      return 'Дек'
    default:
      return 'Янв'
  }
}
const yearToString = (year: number): string => `${year}`

export const formatTime = (date: Date | string): string => {
  const ctxDate = new Date(date)

  const hours = hoursToString(ctxDate.getHours() || 0)
  const minutes = minutesToString(ctxDate.getMinutes() || 0)

  return `${hours}:${minutes}`
}
export const formatPeriod = (
  startDate: Date | string,
  endDate: Date | string,
): string => {
  const formattedTimeOfStartDate = formatTime(startDate)
  const formattedTimeOfEndDate = formatTime(endDate)

  return `${formattedTimeOfStartDate} - ${formattedTimeOfEndDate}`
}