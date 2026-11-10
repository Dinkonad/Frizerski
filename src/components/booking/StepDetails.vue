<script setup>
import { useBooking } from '../../composables/useBooking.js'

const { state } = useBooking()
</script>

<template>
  <div class="step">
    <h3 class="step-title">Na koga glasi termin?</h3>

    <div class="field">
      <label for="b-name">Ime i prezime</label>
      <input id="b-name" v-model="state.name" type="text" placeholder="Ivan Horvat" autocomplete="name" />
    </div>

    <div class="field">
      <label for="b-phone">Telefon</label>
      <input id="b-phone" v-model="state.phone" type="tel" placeholder="091 234 5678" autocomplete="tel" />
    </div>

    <div class="field">
      <label for="b-email">Email <span class="optional">(opcionalno)</span></label>
      <input id="b-email" v-model="state.email" type="email" placeholder="ivan@mail.com" autocomplete="email" />
    </div>

    <div class="field">
      <label for="b-note">Napomena <span class="optional">(opcionalno)</span></label>
      <textarea id="b-note" v-model="state.note" rows="3" placeholder="Npr. želja za duljinom, alergije..."></textarea>
    </div>
  </div>
</template>

<style scoped>
.step-title {
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.field {
  margin-bottom: 20px;
}

.field label {
  display: block;
  font-size: 0.86rem;
  color: var(--bone-dim);
  margin-bottom: 8px;
}

.optional {
  color: var(--bone-faint);
}

.field input,
.field textarea {
  width: 100%;
  background: var(--cave-green-900);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  padding: 12px 14px;
  color: var(--bone);
  font-family: var(--font-body);
  font-size: 0.98rem;
  resize: vertical;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--brass);
}

.field input::placeholder,
.field textarea::placeholder {
  color: var(--bone-faint);
}
</style>
