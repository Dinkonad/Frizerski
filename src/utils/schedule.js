// Radno vrijeme po danu u tjednu (0 = nedjelja ... 6 = subota)
const WEEKDAY_HOURS = {
  1: ['08:00', '15:00'],
  2: ['13:00', '20:00'],
  3: ['08:00', '15:00'],
  4: ['13:00', '20:00'],
  5: ['08:00', '15:00'],
}

export function dateKey(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function parseDateKey(key) {
  const [year, month, day] = key.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export function formatDateLabel(date) {
  const label = date.toLocaleDateString('hr-HR', { weekday: 'short', day: 'numeric', month: 'short' })
  return label.charAt(0).toUpperCase() + label.slice(1)
}

export function getAvailableDays(count = 8) {
  const days = []
  const cursor = new Date()
  cursor.setDate(cursor.getDate() + 1)
  cursor.setHours(0, 0, 0, 0)

  while (days.length < count) {
    if (WEEKDAY_HOURS[cursor.getDay()]) {
      days.push(new Date(cursor))
    }
    cursor.setDate(cursor.getDate() + 1)
  }
  return days
}

export function getSlotsForDay(date) {
  const range = WEEKDAY_HOURS[date.getDay()]
  if (!range) return []

  const [startH, startM] = range[0].split(':').map(Number)
  const [endH, endM] = range[1].split(':').map(Number)
  const slots = []
  let h = startH
  let m = startM

  while (h < endH || (h === endH && m < endM)) {
    slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
    m += 30
    if (m >= 60) {
      m -= 60
      h += 1
    }
  }
  return slots
}

export function isSlotBusy(key, time) {
  const str = key + time
  let hash = 0
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0
  }
  return hash % 5 === 0
}
