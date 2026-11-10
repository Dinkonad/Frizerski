<script setup>
import { computed } from 'vue'
import { useBooking } from '../../composables/useBooking.js'
import { formatDateLabel, parseDateKey } from '../../utils/schedule.js'

const { state } = useBooking()

const dateLabel = computed(() => (state.date ? formatDateLabel(parseDateKey(state.date)) : ''))
const staffLabel = computed(() => (state.staffId === 'any' ? 'Nemam preferenciju' : state.staffId))
</script>

<template>
  <div class="step">
    <h3 class="step-title">Provjeri i potvrdi</h3>

    <ul class="summary">
      <li>
        <span class="summary-label">Usluga</span>
        <span>{{ state.service?.name }} <em>({{ state.service?.price }})</em></span>
      </li>
      <li>
        <span class="summary-label">Majstor</span>
        <span>{{ staffLabel }}</span>
      </li>
      <li>
        <span class="summary-label">Termin</span>
        <span>{{ dateLabel }} u {{ state.time }}</span>
      </li>
      <li>
        <span class="summary-label">Kontakt</span>
        <span>{{ state.name }} · {{ state.phone }}</span>
      </li>
      <li v-if="state.note">
        <span class="summary-label">Napomena</span>
        <span>{{ state.note }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.step-title {
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.summary {
  display: flex;
  flex-direction: column;
}

.summary li {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 0;
  border-top: 1px solid var(--line);
  font-size: 0.96rem;
}

.summary li:last-child {
  border-bottom: 1px solid var(--line);
}

.summary-label {
  color: var(--bone-faint);
  flex-shrink: 0;
}

.summary em {
  font-style: normal;
  color: var(--brass-bright);
}
</style>
