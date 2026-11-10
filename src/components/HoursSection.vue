<script setup>
import { hours, PHONE, PHONE_HREF, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/site.js'
</script>

<template>
  <section id="kontakt" class="section hours">
    <div class="container hours-grid">
      <div class="hours-block">
        <h2>Radno vrijeme</h2>
        <ul class="hours-table">
          <li v-for="h in hours" :key="h.days">
            <span>{{ h.days }}</span>
            <span class="hours-time">{{ h.time }}</span>
          </li>
        </ul>
      </div>

      <div class="hours-block">
        <h2>Pronađi nas</h2>
        <ul class="contact-list">
          <li>
            <span class="contact-label">Lokacija</span>
            <span>Pula, Istra</span>
          </li>
          <li>
            <span class="contact-label">Telefon</span>
            <a :href="PHONE_HREF">{{ PHONE }}</a>
          </li>
          <li>
            <span class="contact-label">Instagram</span>
            <a :href="INSTAGRAM_URL" target="_blank" rel="noopener">{{ INSTAGRAM_HANDLE }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hours-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
}

.hours-block h2 {
  font-size: clamp(1.7rem, 3vw, 2.1rem);
  margin-bottom: 28px;
}

.hours-table,
.contact-list {
  display: flex;
  flex-direction: column;
}

.hours-table li,
.contact-list li {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
  border-top: 1px solid var(--line);
  font-size: 0.98rem;
}

.hours-table li:last-child,
.contact-list li:last-child {
  border-bottom: 1px solid var(--line);
}

.hours-time {
  color: var(--brass-bright);
  font-weight: 500;
  flex-shrink: 0;
}

.contact-label {
  color: var(--bone-faint);
}

.contact-list a {
  color: var(--bone);
  transition: color 0.2s ease;
}

.contact-list a:hover {
  color: var(--brass-bright);
}

@media (min-width: 760px) {
  .hours-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
