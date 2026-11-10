<script setup>
import { computed } from 'vue'
import { team } from '../../data/team.js'
import { useBooking } from '../../composables/useBooking.js'

const { state } = useBooking()

const options = computed(() => [
  { id: 'any', name: 'Nemam preferenciju', role: 'Prva slobodna majstorica', initials: '—' },
  ...team.map((person) => ({
    id: person.name,
    name: person.name,
    role: person.role,
    initials: person.initials,
  })),
])
</script>

<template>
  <div class="step">
    <h3 class="step-title">Kod koga ideš?</h3>

    <ul class="staff-options">
      <li v-for="opt in options" :key="opt.id">
        <button
          type="button"
          class="staff-row"
          :class="{ selected: state.staffId === opt.id }"
          @click="state.staffId = opt.id"
        >
          <span class="staff-avatar">{{ opt.initials }}</span>
          <span class="staff-text">
            <span class="staff-name">{{ opt.name }}</span>
            <span class="staff-role">{{ opt.role }}</span>
          </span>
          <span class="option-radio" aria-hidden="true"></span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.step-title {
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.staff-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.staff-row {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--cave-green-900);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  color: var(--bone);
  text-align: left;
  transition: border-color 0.15s ease;
}

.staff-row:hover {
  border-color: var(--line-strong);
}

.staff-row.selected {
  border-color: var(--brass);
}

.staff-avatar {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--brass);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 0.9rem;
  color: var(--brass-bright);
}

.staff-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.staff-name {
  font-size: 1rem;
}

.staff-role {
  font-size: 0.82rem;
  color: var(--bone-faint);
}

.option-radio {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1.4px solid var(--line-strong);
  position: relative;
}

.staff-row.selected .option-radio {
  border-color: var(--brass-bright);
}

.staff-row.selected .option-radio::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: var(--brass-bright);
}
</style>
