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

export const formatDate = (date: Date) => {
  const day = dayToString(date.getDate() || 0)
  const month = monthToString(date.getMonth() || 0)
  const year = yearToString(date.getFullYear() || 0)

  const hours = hoursToString(date.getHours() || 0)
  const minutes = minutesToString(date.getMinutes() || 0)

  return `${day} ${month} ${year} ${hours}:${minutes}`
}
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
export const formatLeftoversTime = (
  startDate: Date | string,
  endDate: Date | string,
) => {
  const leftoversTime = new Date(calcLeftoversTime(startDate, endDate))

  const leftoversDays = leftoversTime.getUTCDate() - 1
  const leftoversHours = leftoversTime.getUTCHours()
  const leftoversMinutes = leftoversTime.getUTCMinutes()

  return `${
    leftoversDays > 0 ? `${dayToString(leftoversDays)}д ` : ''
  }${leftoversHours}ч ${leftoversMinutes}м`
}
export const formatPeriodAtOriginToDestination = (
  startDate: Date | string,
  duration: number,
) => {
  const periodStartDate = new Date(startDate)
  const periodEndDate = new Date(calcDestinationTime(startDate, duration))

  return formatPeriod(periodStartDate, periodEndDate)
}

export const calcLeftoversTime = (
  startDate: Date | string,
  endDate: Date | string,
) => {
  const startDateToTimestamp = new Date(startDate).valueOf()
  const endDateToTimestamp = new Date(endDate).valueOf()

  return endDateToTimestamp - startDateToTimestamp
}
export const calcDestinationTime = (
  startDate: Date | string,
  duration: number,
) => {
  const startDateToTimestamp = new Date(startDate).valueOf()
  const durationToTimestamp = duration * 60 * 1000

  return new Date(startDateToTimestamp + durationToTimestamp)
}
