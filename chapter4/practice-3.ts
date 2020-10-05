type Reservation = {}

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
  (destination: string): Reservation
}

let reserve: Reserve = (
  fromOrDestination: Date | string,
  ToOrDestination?: Date | string,
  Destination?: string
): Reservation => {
  if (fromOrDestination instanceof Date &&
      ToOrDestination instanceof Date &&
      Destination !== undefined) {
    // 宿泊
    return {}
  } else if (fromOrDestination instanceof Date &&
    typeof ToOrDestination === 'string') {
    // 日帰り
    return {}
  } else if (typeof fromOrDestination === 'string') {
    // 目的地のみ
    return {}
  }
  return {}
}