<script setup>
const features = [
  {
    title: 'Žilet, ne samo mašinica',
    text: 'Klasično brijanje i kontura brade rade se žiletom — čistija linija, bolji osjećaj na koži.',
  },
  {
    title: 'Jedan klijent u isto vrijeme',
    text: 'Termini se ne preklapaju. Dok si u stolici, pažnja je samo na tebi.',
  },
  {
    title: 'Fade po mjeri glave',
    text: 'Ne po fotografiji s interneta — prema obliku lica, gustoći kose i onome što stvarno paše.',
  },
  {
    title: 'Rezervacija bez zvanja',
    text: 'Odaberi majstora, uslugu i termin online. Potvrda stiže odmah, bez čekanja na liniji.',
  },
]
</script>

<template>
  <section class="section features">
    <div class="container">
      <div class="section-head">
        <h2>Zašto se ljudi vraćaju.</h2>
      </div>

      <ul class="features-list">
        <li v-for="f in features" :key="f.title" class="features-row">
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.features-list {
  display: grid;
  grid-template-columns: 1fr;
}

.features-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 28px 0;
  border-top: 1px solid var(--line);
}

.features-row:last-child {
  border-bottom: 1px solid var(--line);
}

.features-row h3 {
  font-size: 1.15rem;
  color: var(--brass-bright);
}

.features-row p {
  color: var(--bone-dim);
  max-width: 56ch;
  font-size: 0.98rem;
}

@media (min-width: 760px) {
  .features-row {
    grid-template-columns: minmax(220px, 320px) 1fr;
    align-items: baseline;
    gap: 40px;
  }
}
</style>
