import { reactive, computed } from 'vue'

export const stepMeta = [
  { key: 'usluga', label: 'Usluga' },
  { key: 'majstor', label: 'Majstor' },
  { key: 'termin', label: 'Termin' },
  { key: 'podaci', label: 'Podaci' },
  { key: 'potvrda', label: 'Potvrda' },
]

const state = reactive({
  isOpen: false,
  stepIndex: 0,
  submitted: false,
  service: null,
  staffId: 'any',
  date: null,
  time: null,
  name: '',
  phone: '',
  email: '',
  note: '',
})

const canProceed = computed(() => {
  switch (stepMeta[state.stepIndex].key) {
    case 'usluga':
      return !!state.service
    case 'majstor':
      return !!state.staffId
    case 'termin':
      return !!state.date && !!state.time
    case 'podaci':
      return state.name.trim().length > 1 && state.phone.trim().length > 5
    default:
      return true
  }
})

function reset() {
  state.stepIndex = 0
  state.submitted = false
  state.service = null
  state.staffId = 'any'
  state.date = null
  state.time = null
  state.name = ''
  state.phone = ''
  state.email = ''
  state.note = ''
}

function open() {
  reset()
  state.isOpen = true
}

function close() {
  state.isOpen = false
}

function next() {
  if (!canProceed.value) return
  if (state.stepIndex < stepMeta.length - 1) state.stepIndex += 1
}

function back() {
  if (state.stepIndex > 0) state.stepIndex -= 1
}

function submit() {
  state.submitted = true
}

export function useBooking() {
  return { state, stepMeta, canProceed, open, close, next, back, submit }
}
