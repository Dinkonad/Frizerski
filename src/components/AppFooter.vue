<script setup>
import BrandMark from './BrandMark.vue'
import { PHONE, PHONE_HREF, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/site.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <BrandMark />

      <nav class="footer-nav">
        <a href="#usluge">Usluge</a>
        <a href="#o-nama">O nama</a>
        <a href="#majstori">Majstori</a>
        <a :href="INSTAGRAM_URL" target="_blank" rel="noopener">{{ INSTAGRAM_HANDLE }}</a>
        <a :href="PHONE_HREF">{{ PHONE }}</a>
      </nav>

      <p class="footer-copy">© {{ year }} Barber's Cave Pula</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: 40px 0;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 0.88rem;
  color: var(--bone-dim);
}

.footer-nav a:hover {
  color: var(--brass-bright);
}

.footer-copy {
  font-size: 0.82rem;
  color: var(--bone-faint);
}

@media (min-width: 760px) {
  .footer-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
