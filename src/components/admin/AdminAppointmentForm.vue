<script setup>
import { reactive, computed } from 'vue'
import { useAdminDemo } from '../../composables/useAdminDemo.js'
import { serviceCategories } from '../../data/services.js'

const emit = defineEmits(['close'])
const { state, addAppointment } = useAdminDemo()

const serviceNames = serviceCategories.flatMap((cat) => cat.items.map((item) => item.name))

const form = reactive({
  dayKey: state.days[0]?.key ?? '',
  time: '',
  client: '',
  service: serviceNames[0],
})

const canSubmit = computed(() => form.dayKey && form.time.trim() && form.client.trim())

function submit() {
  if (!canSubmit.value) return
  addAppointment(form.dayKey, { time: form.time.trim(), client: form.client.trim(), service: form.service })
  emit('close')
}
</script>

<template>
  <div class="admin-form">
    <h3>Novi termin</h3>

    <div class="form-row">
      <label>
        Dan
        <select v-model="form.dayKey">
          <option v-for="d in state.days" :key="d.key" :value="d.key">{{ d.label }}</option>
        </select>
      </label>
      <label>
        Vrijeme
        <input v-model="form.time" type="text" placeholder="14:00" />
      </label>
    </div>

    <div class="form-row">
      <label>
        Klijent
        <input v-model="form.client" type="text" placeholder="Ime i prezime" />
      </label>
      <label>
        Usluga
        <select v-model="form.service">
          <option v-for="name in serviceNames" :key="name" :value="name">{{ name }}</option>
        </select>
      </label>
    </div>

    <div class="form-actions">
      <button type="button" class="btn btn-ghost" @click="emit('close')">Odustani</button>
      <button type="button" class="btn btn-primary" :disabled="!canSubmit" @click="submit">Dodaj termin</button>
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
  margin-bottom: 18px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.form-row label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.84rem;
  color: var(--bone-dim);
}

.form-row input,
.form-row select {
  background: var(--cave-black);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  padding: 10px 12px;
  color: var(--bone);
  font-family: var(--font-body);
  font-size: 0.94rem;
}

.form-row input:focus,
.form-row select:focus {
  outline: none;
  border-color: var(--brass);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

@media (min-width: 560px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
