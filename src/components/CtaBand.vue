<script setup>
import { useBooking } from '../composables/useBooking.js'

const { open: openBooking } = useBooking()
</script>

<template>
  <section class="cta-band">
    <div class="container cta-inner">
      <h2>Termin te čeka. Fotelja isto.</h2>
      <button type="button" class="btn btn-primary" @click="openBooking">
        Rezerviraj termin
      </button>
    </div>
  </section>
</template>

<style scoped>
.cta-band {
  background: linear-gradient(135deg, var(--cave-green-900), var(--cave-black) 70%);
  border-top: 1px solid var(--line);
  padding: clamp(56px, 9vw, 96px) 0;
}

.cta-inner {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
}

.cta-inner h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  max-width: 16ch;
}

@media (min-width: 760px) {
  .cta-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
