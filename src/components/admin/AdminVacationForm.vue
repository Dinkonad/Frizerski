<script setup>
import { ref } from 'vue'
import { useAdminDemo } from '../../composables/useAdminDemo.js'

const emit = defineEmits(['close'])
const { state, setVacation } = useAdminDemo()

const selected = ref([])

function toggle(key) {
  const idx = selected.value.indexOf(key)
  if (idx === -1) selected.value.push(key)
  else selected.value.splice(idx, 1)
}

function submit() {
  selected.value.forEach((key) => setVacation(key, true))
  emit('close')
}
</script>

<template>
  <div class="admin-form">
    <h3>Dodaj godišnji odmor</h3>
    <p class="hint">Odaberi dane kad te nema — termini ostaju vidljivi, ali označeni kao zatvoreno.</p>

    <ul class="day-checks">
      <li v-for="d in state.days" :key="d.key">
        <label :class="{ disabled: d.vacation }">
          <input
            type="checkbox"
            :checked="selected.includes(d.key)"
            :disabled="d.vacation"
            @change="toggle(d.key)"
          />
          {{ d.label }}
          <span v-if="d.vacation" class="already">već godišnji</span>
        </label>
      </li>
    </ul>

    <div class="form-actions">
      <button type="button" class="btn btn-ghost" @click="emit('close')">Odustani</button>
      <button type="button" class="btn btn-primary" :disabled="!selected.length" @click="submit">
        Spremi godišnji
      </button>
    </div>
  </div>
</template>

<style scoped>
.admin-form {
  background: var(--cave-green-900);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-md);
  padding: 24px;
  margin-bottom: 32px;
}

.admin-form h3 {
  font-size: 1.15rem;
  margin-bottom: 8px;
}

.hint {
  color: var(--bone-faint);
  font-size: 0.86rem;
  margin-bottom: 18px;
}

.day-checks {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.day-checks label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.94rem;
  color: var(--bone);
}

.day-checks label.disabled {
  color: var(--bone-faint);
}

.already {
  font-size: 0.78rem;
  color: var(--brass);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
