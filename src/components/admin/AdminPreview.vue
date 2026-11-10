<script setup>
import { ref } from 'vue'
import { useAppView } from '../../composables/useAppView.js'
import { useAdminDemo } from '../../composables/useAdminDemo.js'
import AdminAppointmentForm from './AdminAppointmentForm.vue'
import AdminVacationForm from './AdminVacationForm.vue'

const { showSite } = useAppView()
const { state, setVacation } = useAdminDemo()

const activeForm = ref(null)

function toggleForm(name) {
  activeForm.value = activeForm.value === name ? null : name
}
</script>

<template>
  <div class="admin">
    <div class="admin-banner">
      <div class="container admin-banner-inner">
        <span class="admin-banner-text">
          Pregled samo za vlasnicu — ovako bi izgledalo upravljanje terminima u pravoj aplikaciji.
          Klijenti ovo nikad ne vide.
        </span>
        <button type="button" class="btn btn-ghost admin-back" @click="showSite">← Natrag na stranicu</button>
      </div>
    </div>

    <div class="container admin-body">
      <div class="section-head">
        <h2>Tvoj kalendar</h2>
        <p>Dodaj termin ručno ili označi dane kad te nema.</p>
      </div>

      <div class="admin-actions">
        <button type="button" class="btn btn-ghost" @click="toggleForm('appointment')">+ Novi termin</button>
        <button type="button" class="btn btn-ghost" @click="toggleForm('vacation')">+ Godišnji odmor</button>
      </div>

      <AdminAppointmentForm v-if="activeForm === 'appointment'" @close="activeForm = null" />
      <AdminVacationForm v-if="activeForm === 'vacation'" @close="activeForm = null" />

      <ul class="day-grid">
        <li v-for="day in state.days" :key="day.key" class="day-card" :class="{ vacation: day.vacation }">
          <div class="day-card-head">
            <h3>{{ day.label }}</h3>
            <button v-if="day.vacation" type="button" class="day-undo" @click="setVacation(day.key, false)">
              Ukloni
            </button>
          </div>

          <p v-if="day.vacation" class="day-vacation-tag">Godišnji odmor — zatvoreno</p>

          <ul v-else-if="day.appointments.length" class="day-appointments">
            <li v-for="a in day.appointments" :key="a.time + a.client">
              <span class="appt-time">{{ a.time }}</span>
              <span class="appt-client">{{ a.client }}</span>
              <span class="appt-service">{{ a.service }}</span>
            </li>
          </ul>

          <p v-else class="day-empty">Nema termina.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.admin {
  min-height: 100vh;
  background: var(--cave-black);
}

.admin-banner {
  background: var(--cave-green-800);
  border-bottom: 1px solid var(--line-strong);
  padding: 18px 0;
}

.admin-banner-inner {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.admin-banner-text {
  font-size: 0.88rem;
  color: var(--brass-bright);
  max-width: 60ch;
}

.admin-back {
  align-self: flex-start;
  padding: 0.6em 1.1em;
  font-size: 0.86rem;
  flex-shrink: 0;
}

.admin-body {
  padding: clamp(40px, 7vw, 72px) var(--gutter) 80px;
}

.admin-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 32px;
}

.day-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.day-card {
  background: var(--cave-green-900);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 20px;
}

.day-card.vacation {
  border-color: var(--brass);
  opacity: 0.85;
}

.day-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.day-card-head h3 {
  font-size: 1.05rem;
}

.day-undo {
  background: none;
  border: none;
  color: var(--brass);
  font-size: 0.8rem;
  text-decoration: underline;
}

.day-vacation-tag {
  color: var(--brass-bright);
  font-size: 0.9rem;
}

.day-empty {
  color: var(--bone-faint);
  font-size: 0.9rem;
}

.day-appointments {
  display: flex;
  flex-direction: column;
}

.day-appointments li {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  padding: 10px 0;
  border-top: 1px solid var(--line);
  font-size: 0.9rem;
}

.day-appointments li:first-child {
  border-top: none;
}

.appt-time {
  font-family: var(--font-display);
  color: var(--brass-bright);
  min-width: 3.2em;
}

.appt-client {
  color: var(--bone);
  flex-shrink: 0;
}

.appt-service {
  color: var(--bone-faint);
}

@media (min-width: 720px) {
  .admin-banner-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .day-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
