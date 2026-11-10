<script setup>
import { computed, watch, onMounted, onUnmounted } from 'vue'
import { useBooking } from '../../composables/useBooking.js'
import StepService from './StepService.vue'
import StepStaff from './StepStaff.vue'
import StepSchedule from './StepSchedule.vue'
import StepDetails from './StepDetails.vue'
import StepConfirm from './StepConfirm.vue'
import BookingSuccess from './BookingSuccess.vue'

const { state, stepMeta, canProceed, close, next, back, submit } = useBooking()

const currentKey = computed(() => stepMeta[state.stepIndex].key)
const progressPct = computed(() => `${((state.stepIndex + 1) / stepMeta.length) * 100}%`)
const isLastStep = computed(() => state.stepIndex === stepMeta.length - 1)

watch(
  () => state.isOpen,
  (open) => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }
)

function onKeydown(e) {
  if (e.key === 'Escape' && state.isOpen) close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition name="booking-fade">
      <div v-if="state.isOpen" class="booking-overlay" @click.self="close">
        <div class="booking-dialog" role="dialog" aria-modal="true" aria-label="Rezervacija termina">
          <header class="booking-head">
            <div class="booking-progress" v-if="!state.submitted">
              <span class="booking-progress-label">Korak {{ state.stepIndex + 1 }} / {{ stepMeta.length }} — {{ stepMeta[state.stepIndex].label }}</span>
              <div class="booking-bar"><div class="booking-bar-fill" :style="{ width: progressPct }"></div></div>
            </div>
            <button type="button" class="booking-close" aria-label="Zatvori" @click="close">✕</button>
          </header>

          <div class="booking-body">
            <BookingSuccess v-if="state.submitted" />
            <template v-else>
              <StepService v-if="currentKey === 'usluga'" />
              <StepStaff v-else-if="currentKey === 'majstor'" />
              <StepSchedule v-else-if="currentKey === 'termin'" />
              <StepDetails v-else-if="currentKey === 'podaci'" />
              <StepConfirm v-else-if="currentKey === 'potvrda'" />
            </template>
          </div>

          <footer class="booking-foot" v-if="!state.submitted">
            <button v-if="state.stepIndex > 0" type="button" class="btn btn-ghost" @click="back">Natrag</button>
            <span v-else></span>
            <button
              v-if="!isLastStep"
              type="button"
              class="btn btn-primary"
              :disabled="!canProceed"
              @click="next"
            >
              Dalje
            </button>
            <button v-else type="button" class="btn btn-primary" @click="submit">Potvrdi rezervaciju</button>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.booking-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(8, 10, 9, 0.78);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.booking-dialog {
  width: 100%;
  max-width: 560px;
  max-height: min(720px, 90vh);
  background: var(--cave-green-950);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  box-shadow: 0 30px 80px -24px rgba(0, 0, 0, 0.6);
}

.booking-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 24px 0;
}

.booking-progress {
  flex: 1;
}

.booking-progress-label {
  display: block;
  font-size: 0.82rem;
  color: var(--brass);
  margin-bottom: 10px;
}

.booking-bar {
  height: 2px;
  background: var(--line);
}

.booking-bar-fill {
  height: 100%;
  background: var(--ember-bright);
  transition: width 0.3s ease;
}

.booking-close {
  background: none;
  border: none;
  color: var(--bone-dim);
  font-size: 1.1rem;
  line-height: 1;
  padding: 2px 4px;
  flex-shrink: 0;
}

.booking-close:hover {
  color: var(--brass-bright);
}

.booking-body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.booking-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 24px 24px;
}

.booking-fade-enter-active,
.booking-fade-leave-active {
  transition: opacity 0.22s ease;
}

.booking-fade-enter-active .booking-dialog,
.booking-fade-leave-active .booking-dialog {
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.booking-fade-enter-from,
.booking-fade-leave-to {
  opacity: 0;
}

.booking-fade-enter-from .booking-dialog,
.booking-fade-leave-to .booking-dialog {
  transform: translateY(12px) scale(0.98);
  opacity: 0;
}

@media (max-width: 560px) {
  .booking-overlay {
    padding: 0;
  }

  .booking-dialog {
    max-width: none;
    max-height: 100vh;
    height: 100vh;
    border-radius: 0;
  }
}
</style>
