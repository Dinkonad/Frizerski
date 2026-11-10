import { reactive } from 'vue'
import { getAvailableDays, dateKey, formatDateLabel } from '../utils/schedule.js'

function seedDays() {
  const days = getAvailableDays(6)
  const seedAppointments = [
    [
      { time: '08:30', client: 'Ivan H.', service: 'Fade šišanje' },
      { time: '10:00', client: 'Luka P.', service: 'Brijanje glave (žilet)' },
    ],
    [{ time: '13:30', client: 'Petar K.', service: 'Klasično brijanje' }],
    [],
    [
      { time: '09:00', client: 'Ante B.', service: 'Šišanje kratke kose' },
      { time: '11:30', client: 'Dino S.', service: 'Uređivanje brade (mašinica + žilet)' },
    ],
    [],
    [{ time: '14:00', client: 'Marin T.', service: 'Preljev' }],
  ]

  return days.map((d, i) => ({
    key: dateKey(d),
    label: formatDateLabel(d),
    vacation: false,
    appointments: seedAppointments[i] ?? [],
  }))
}

const state = reactive({
  days: seedDays(),
})

function addAppointment(dayKey, entry) {
  const day = state.days.find((d) => d.key === dayKey)
  if (!day) return
  day.appointments.push(entry)
  day.appointments.sort((a, b) => a.time.localeCompare(b.time))
}

function setVacation(dayKey, value) {
  const day = state.days.find((d) => d.key === dayKey)
  if (!day) return
  day.vacation = value
}

export function useAdminDemo() {
  return { state, addAppointment, setVacation }
}
