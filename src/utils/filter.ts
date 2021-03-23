import { ITicketItem } from '../store/ticket/types'

export const filterTicketItemsByChangedStops = (
  item: ITicketItem,
  changedStops: (string | number)[],
) => {
  const nonChecked = changedStops.length === 0
  const woStopChecked = !!changedStops.find(
    (changedSort) => changedSort === 'wo-stop',
  )
  const oneStopChecked = !!changedStops.find(
    (changedSort) => changedSort === 'one-stop',
  )
  const twoStopChecked = !!changedStops.find(
    (changedSort) => changedSort === 'two-stops',
  )
  const threeStopChecked = !!changedStops.find(
    (changedSort) => changedSort === 'three-stops',
  )

  const startStopCount = item.segments[0] ? item.segments[0].stops.length : 0
  const endStopCount = item.segments[1] ? item.segments[1].stops.length : 0

  if (nonChecked) return true
  else if (woStopChecked && (startStopCount === 0 || endStopCount === 0))
    return true
  else if (oneStopChecked && (startStopCount === 1 || endStopCount === 1))
    return true
  else if (twoStopChecked && (startStopCount === 2 || endStopCount === 2))
    return true
  else if (threeStopChecked && (startStopCount === 3 || endStopCount === 3))
    return true
  else return false
}
