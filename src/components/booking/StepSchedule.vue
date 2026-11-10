<script setup>
import { computed } from 'vue'
import { useBooking } from '../../composables/useBooking.js'
import { getAvailableDays, getSlotsForDay, dateKey, formatDateLabel, isSlotBusy } from '../../utils/schedule.js'

const { state } = useBooking()

const days = getAvailableDays(10)

const selectedDay = computed(() => days.find((d) => dateKey(d) === state.date))
const slots = computed(() => (selectedDay.value ? getSlotsForDay(selectedDay.value) : []))

function selectDay(day) {
  state.date = dateKey(day)
  state.time = null
}
</script>

<template>
  <div class="step">
    <h3 class="step-title">Kad ti odgovara?</h3>

    <div class="day-row">
      <button
        v-for="day in days"
        :key="dateKey(day)"
        type="button"
        class="day-chip"
        :class="{ selected: state.date === dateKey(day) }"
        @click="selectDay(day)"
      >
        {{ formatDateLabel(day) }}
      </button>
    </div>

    <div v-if="selectedDay" class="slot-grid">
      <button
        v-for="slot in slots"
        :key="slot"
        type="button"
        class="slot"
        :class="{ selected: state.time === slot, busy: isSlotBusy(state.date, slot) }"
        :disabled="isSlotBusy(state.date, slot)"
        @click="state.time = slot"
      >
        {{ slot }}
      </button>
    </div>
    <p v-else class="slot-hint">Odaberi dan da vidiš slobodne termine.</p>
  </div>
</template>

<style scoped>
.step-title {
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.day-row {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
  margin-bottom: 24px;
}

.day-chip {
  flex-shrink: 0;
  background: var(--cave-green-900);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 10px 16px;
  font-size: 0.86rem;
  color: var(--bone-dim);
  white-space: nowrap;
}

.day-chip.selected {
  border-color: var(--brass);
  color: var(--bone);
  background: var(--cave-green-800);
}

.slot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
  gap: 10px;
}

.slot {
  background: var(--cave-green-900);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 10px 8px;
  font-size: 0.88rem;
  color: var(--bone);
}

.slot:not(:disabled):hover {
  border-color: var(--line-strong);
}

.slot.selected {
  border-color: var(--brass-bright);
  background: rgba(199, 160, 74, 0.14);
  color: var(--brass-bright);
}

.slot.busy {
  opacity: 0.35;
  text-decoration: line-through;
  cursor: not-allowed;
}

.slot-hint {
  color: var(--bone-faint);
  font-size: 0.92rem;
}
</style>
