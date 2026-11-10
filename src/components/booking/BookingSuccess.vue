<script setup>
import { computed } from 'vue'
import { useBooking } from '../../composables/useBooking.js'
import { formatDateLabel, parseDateKey } from '../../utils/schedule.js'

const { state, close } = useBooking()

const dateLabel = computed(() => (state.date ? formatDateLabel(parseDateKey(state.date)) : ''))
</script>

<template>
  <div class="success">
    <svg viewBox="0 0 56 56" class="success-icon" aria-hidden="true">
      <circle cx="28" cy="28" r="26" fill="none" stroke="var(--brass)" stroke-width="1.4" />
      <path d="M17 29l8 8 14-16" fill="none" stroke="var(--brass-bright)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <h3>Termin je rezerviran.</h3>
    <p>
      {{ state.name }}, čekamo te {{ dateLabel.toLowerCase() }} u {{ state.time }}h za
      uslugu <strong>{{ state.service?.name }}</strong>. Potvrda stiže na {{ state.phone }}.
    </p>

    <button type="button" class="btn btn-primary" @click="close">Zatvori</button>
  </div>
</template>

<style scoped>
.success {
  text-align: center;
  padding: 24px 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.success-icon {
  width: 56px;
  height: 56px;
  margin-bottom: 24px;
}

.success h3 {
  font-size: 1.6rem;
}

.success p {
  margin-top: 16px;
  color: var(--bone-dim);
  max-width: 42ch;
  font-size: 0.98rem;
}

.success .btn {
  margin-top: 32px;
}
</style>
